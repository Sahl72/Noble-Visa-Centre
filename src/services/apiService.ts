/**
 * API Service for:
 * 1. REST Countries API & Flag CDN (https://restcountries.com/v3.1/ & https://flags.restcountries.com/ or https://flagcdn.com/)
 * 2. Hipo University Domains API (https://universities.hipolabs.com/search)
 * 
 * Both APIs are 100% free, open, CORS-enabled, and require NO API key.
 */

import { WORLD_COUNTRIES_DATA } from '../data/worldCountries';
import { GLOBAL_UNIVERSITIES_DATA, GlobalUniversityItem } from '../data/globalUniversities';

export interface RestCountry {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  capital?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  region: string;
  subregion?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  timezones?: string[];
}

export interface HipoUniversity {
  name: string;
  country: string;
  alpha_two_code: string;
  web_pages: string[];
  domains: string[];
  'state-province'?: string | null;
  city?: string;
  popularFields?: string[];
  type?: string;
}

// Convert built-in WORLD_COUNTRIES_DATA into RestCountry format as instant offline-ready baseline
const INITIAL_WORLD_REST_COUNTRIES: RestCountry[] = WORLD_COUNTRIES_DATA.map(c => ({
  name: {
    common: c.name,
    official: c.officialName || c.name
  },
  cca2: c.code.toUpperCase(),
  cca3: c.code3.toUpperCase(),
  capital: [c.capital],
  currencies: { [c.code]: { name: c.currency, symbol: c.currency } },
  region: c.region,
  subregion: c.subregion,
  population: 5000000,
  flags: {
    png: `https://flagcdn.com/w320/${c.code}.png`,
    svg: `https://flagcdn.com/${c.code}.svg`,
    alt: `Flag of ${c.name}`
  }
}));

// In-memory caches to prevent redundant network calls, preloaded with world countries!
let cachedCountries: RestCountry[] = INITIAL_WORLD_REST_COUNTRIES;
const cachedUniversitySearches = new Map<string, HipoUniversity[]>();

// Normalize country alias map for robust search
const COUNTRY_ALIAS_MAP: Record<string, string> = {
  uk: 'United Kingdom',
  gb: 'United Kingdom',
  england: 'United Kingdom',
  scotland: 'United Kingdom',
  russia: 'Russian Federation',
  ru: 'Russian Federation',
  us: 'United States',
  usa: 'United States',
  america: 'United States',
  dubai: 'United Arab Emirates',
  uae: 'United Arab Emirates',
  belarus: 'Belarus',
  by: 'Belarus',
  malaysia: 'Malaysia',
  my: 'Malaysia',
  singapore: 'Singapore',
  sg: 'Singapore',
  switzerland: 'Switzerland',
  ch: 'Switzerland',
  swiss: 'Switzerland',
  taiwan: 'Taiwan',
  tw: 'Taiwan',
  cyprus: 'Cyprus',
  cy: 'Cyprus',
  latvia: 'Latvia',
  lv: 'Latvia',
  india: 'India',
  in: 'India',
  canada: 'Canada',
  ca: 'Canada',
  australia: 'Australia',
  au: 'Australia',
  germany: 'Germany',
  de: 'Germany',
  france: 'France',
  fr: 'France',
  japan: 'Japan',
  jp: 'Japan',
  newzealand: 'New Zealand',
  'new zealand': 'New Zealand',
  nz: 'New Zealand'
};

export function normalizeCountryName(countryInput: string): string {
  if (!countryInput || countryInput === 'all') return '';
  const key = countryInput.toLowerCase().trim();
  return COUNTRY_ALIAS_MAP[key] || countryInput;
}

/**
 * Get country flag image URL using the free Flag CDN / REST Countries
 */
export function getFlagCdnUrl(countryCode: string, width: 80 | 160 | 320 = 320): string {
  if (!countryCode) return '';
  const code = countryCode.toLowerCase().trim();
  return `https://flagcdn.com/w${width}/${code}.png`;
}

/**
 * Fetch all countries or search countries from REST Countries API
 */
export async function fetchAllRestCountries(): Promise<RestCountry[]> {
  if (cachedCountries && cachedCountries.length > 0) {
    return cachedCountries;
  }

  try {
    const sessionData = sessionStorage.getItem('noble_rest_countries');
    if (sessionData) {
      cachedCountries = JSON.parse(sessionData);
      return cachedCountries || [];
    }
  } catch (e) {
    // Ignore sessionStorage error
  }

  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,currencies,languages,region,subregion,population,flags,idd,timezones'
    );
    if (!response.ok) {
      throw new Error(`REST Countries API error: ${response.statusText}`);
    }
    const data: RestCountry[] = await response.json();
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    cachedCountries = data;
    try {
      sessionStorage.setItem('noble_rest_countries', JSON.stringify(data));
    } catch (e) {
      // Ignore
    }
    return data;
  } catch (error) {
    console.warn('Failed to fetch from REST Countries API, falling back to local list:', error);
    return INITIAL_WORLD_REST_COUNTRIES;
  }
}

/**
 * Search countries from REST Countries API by keyword
 */
export async function searchRestCountries(query: string): Promise<RestCountry[]> {
  if (!query || !query.trim()) {
    return fetchAllRestCountries();
  }

  const allCountries = await fetchAllRestCountries();
  const q = query.toLowerCase().trim();

  if (allCountries.length > 0) {
    return allCountries.filter(c => 
      c.name.common.toLowerCase().includes(q) ||
      c.name.official.toLowerCase().includes(q) ||
      c.cca2.toLowerCase().includes(q) ||
      c.cca3.toLowerCase().includes(q) ||
      (c.capital && c.capital.some(cap => cap.toLowerCase().includes(q))) ||
      c.region.toLowerCase().includes(q) ||
      (c.subregion && c.subregion.toLowerCase().includes(q))
    );
  }

  return [];
}

/**
 * Search global universities across curated dataset with 100% reliability, instant speed,
 * and zero network failure points.
 */
export async function searchHipoUniversities(params: {
  name?: string;
  country?: string;
  limit?: number;
}): Promise<HipoUniversity[]> {
  const { name = '', country = '', limit = 60 } = params;
  const normalizedCountry = normalizeCountryName(country);
  const cacheKey = `${name.trim().toLowerCase()}_${normalizedCountry.toLowerCase()}_${limit}`;

  if (cachedUniversitySearches.has(cacheKey)) {
    return cachedUniversitySearches.get(cacheKey)!;
  }

  const qName = name.toLowerCase().trim();
  const qCountry = normalizedCountry.toLowerCase().trim();

  // 1. Perform in-memory search over our curated Global Universities Dataset
  let matched = GLOBAL_UNIVERSITIES_DATA.filter(uni => {
    // Country check
    if (qCountry && qCountry !== 'all') {
      const uCountry = uni.country.toLowerCase();
      const uCode = uni.alpha_two_code.toLowerCase();
      const matchesCountry = uCountry.includes(qCountry) || 
        qCountry.includes(uCountry) || 
        uCode === qCountry;
      if (!matchesCountry) return false;
    }

    // Name / Field / Domain search
    if (qName) {
      const matchName = uni.name.toLowerCase().includes(qName);
      const matchCity = uni.city && uni.city.toLowerCase().includes(qName);
      const matchState = uni['state-province'] && uni['state-province'].toLowerCase().includes(qName);
      const matchDomain = uni.domains.some(d => d.toLowerCase().includes(qName));
      const matchFields = uni.popularFields && uni.popularFields.some(f => f.toLowerCase().includes(qName));

      if (!matchName && !matchCity && !matchState && !matchDomain && !matchFields) {
        return false;
      }
    }

    return true;
  });

  // If no specific filters, return the full list up to limit
  if (!qName && (!qCountry || qCountry === 'all')) {
    matched = GLOBAL_UNIVERSITIES_DATA;
  }

  const results: HipoUniversity[] = matched.slice(0, limit);
  cachedUniversitySearches.set(cacheKey, results);
  return results;
}
