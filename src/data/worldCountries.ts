import { Country } from '../types';

export interface WorldCountryBasic {
  code: string; // ISO 2 (e.g. 'de')
  code3: string; // ISO 3 (e.g. 'deu')
  name: string;
  officialName?: string;
  capital: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';
  subregion: string;
  flagEmoji: string;
  currency: string;
  landmarkImage: string;
  popularFor: string;
  highlight: string;
  directPayment?: boolean;
}

export const WORLD_COUNTRIES_DATA: WorldCountryBasic[] = [
  // ═══ EUROPE & SCHENGEN ═══
  {
    code: 'de',
    code3: 'deu',
    name: 'Germany',
    officialName: 'Federal Republic of Germany',
    capital: 'Berlin',
    region: 'Europe',
    subregion: 'Western Europe • Schengen Area',
    flagEmoji: '🇩🇪',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Tuition-Free Public Universities • Schengen Hub • Automotive & Tech',
    highlight: 'World-renowned tuition-free public universities, EU Blue Card post-study pathways, and high-demand engineering careers.'
  },
  {
    code: 'fr',
    code3: 'fra',
    name: 'France',
    officialName: 'French Republic',
    capital: 'Paris',
    region: 'Europe',
    subregion: 'Western Europe • Schengen Area',
    flagEmoji: '🇫🇷',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Grandes Écoles • Business & Luxury Management • Schengen Travel',
    highlight: 'Subsidized education for international students, 2-year post-study work visa (APS), and world capital of culinary, art, and business.'
  },
  {
    code: 'it',
    code3: 'ita',
    name: 'Italy',
    officialName: 'Italian Republic',
    capital: 'Rome',
    region: 'Europe',
    subregion: 'Southern Europe • Schengen Area',
    flagEmoji: '🇮🇹',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&auto=format&fit=crop&q=80',
    popularFor: 'DSU Regional Scholarships • Architecture, Medicine & Design',
    highlight: 'Accessible government DSU scholarships covering full tuition plus living stipends, world-class historic universities.'
  },
  {
    code: 'es',
    code3: 'esp',
    name: 'Spain',
    officialName: 'Kingdom of Spain',
    capital: 'Madrid',
    region: 'Europe',
    subregion: 'Southern Europe • Schengen Area',
    flagEmoji: '🇪🇸',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable Living • Top Business Schools • Vibrant Lifestyle',
    highlight: 'Leading European business institutions (IE, ESADE), pleasant Mediterranean climate, and straightforward tourist and study pathways.'
  },
  {
    code: 'nl',
    code3: 'nld',
    name: 'Netherlands',
    officialName: 'Kingdom of the Netherlands',
    capital: 'Amsterdam',
    region: 'Europe',
    subregion: 'Western Europe • Schengen Area',
    flagEmoji: '🇳🇱',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop&q=80',
    popularFor: 'English-Taught Degrees • Orientation Year Visa (Zoekjaar)',
    highlight: 'Over 2,100 programs taught 100% in English, vibrant innovation economy, and 1-year search year work permit for graduates.'
  },
  {
    code: 'se',
    code3: 'swe',
    name: 'Sweden',
    officialName: 'Kingdom of Sweden',
    capital: 'Stockholm',
    region: 'Europe',
    subregion: 'Northern Europe • Scandinavia',
    flagEmoji: '🇸🇪',
    currency: 'Swedish Krona (SEK)',
    landmarkImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Innovation & Sustainability • Tech Startups • High Quality of Life',
    highlight: 'Pioneer in global sustainability, innovation-driven master programs, and generous post-study work extension.'
  },
  {
    code: 'no',
    code3: 'nor',
    name: 'Norway',
    officialName: 'Kingdom of Norway',
    capital: 'Oslo',
    region: 'Europe',
    subregion: 'Northern Europe • Scandinavia',
    flagEmoji: '🇳🇴',
    currency: 'Norwegian Krone (NOK)',
    landmarkImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Pristine Nature • High Standard of Living • Research Excellence',
    highlight: 'Advanced academic research programs, exceptional safety index, and modern international university campuses.'
  },
  {
    code: 'fi',
    code3: 'fin',
    name: 'Finland',
    officialName: 'Republic of Finland',
    capital: 'Helsinki',
    region: 'Europe',
    subregion: 'Northern Europe • Schengen Area',
    flagEmoji: '🇫🇮',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=600&auto=format&fit=crop&q=80',
    popularFor: 'World #1 Education System • 2-Year Post-Study Visa • Family Integration',
    highlight: 'Ranked happiest country in the world, top applied science universities, and spouse work rights during studies.'
  },
  {
    code: 'dk',
    code3: 'dnk',
    name: 'Denmark',
    officialName: 'Kingdom of Denmark',
    capital: 'Copenhagen',
    region: 'Europe',
    subregion: 'Northern Europe • Schengen Area',
    flagEmoji: '🇩🇰',
    currency: 'Danish Krone (DKK)',
    landmarkImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Green Technology • High Salaries • Work-Life Balance',
    highlight: 'Internationally accredited university degrees, progressive society, and top European work-life balance.'
  },
  {
    code: 'pl',
    code3: 'pol',
    name: 'Poland',
    officialName: 'Republic of Poland',
    capital: 'Warsaw',
    region: 'Europe',
    subregion: 'Central Europe • Schengen Area',
    flagEmoji: '🇵🇱',
    currency: 'Polish Zloty (PLN)',
    landmarkImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Low Tuition Fees • Affordable Living • IT & Medical Hub',
    highlight: 'Extremely affordable European medical, dental, and engineering education with Schengen mobility.'
  },
  {
    code: 'at',
    code3: 'aut',
    name: 'Austria',
    officialName: 'Republic of Austria',
    capital: 'Vienna',
    region: 'Europe',
    subregion: 'Central Europe • Schengen Area',
    flagEmoji: '🇦🇹',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Low Public University Fees (~€750/sem) • Vienna Cultural Capital',
    highlight: 'Nominal public university fees for international students, ranked world’s most livable city Vienna.'
  },
  {
    code: 'be',
    code3: 'bel',
    name: 'Belgium',
    officialName: 'Kingdom of Belgium',
    capital: 'Brussels',
    region: 'Europe',
    subregion: 'Western Europe • Schengen Area',
    flagEmoji: '🇧🇪',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Heart of the European Union • International Relations Hub',
    highlight: 'Home to European Union institutions, top ranked universities (KU Leuven, Ghent), and multilingual programs.'
  },
  {
    code: 'ch',
    code3: 'che',
    name: 'Switzerland',
    officialName: 'Swiss Confederation',
    capital: 'Bern',
    region: 'Europe',
    subregion: 'Central Europe • Schengen Area',
    flagEmoji: '🇨🇭',
    currency: 'Swiss Franc (CHF)',
    landmarkImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Elite Hospitality & Culinary • Paid Swiss Internships (CHF 2,200+/mo)',
    highlight: 'Official Swiss BHMS representation by Noble Visa Centre with guaranteed paid industry internships in Lucerne.'
  },
  {
    code: 'ie',
    code3: 'irl',
    name: 'Ireland',
    officialName: 'Republic of Ireland',
    capital: 'Dublin',
    region: 'Europe',
    subregion: 'Western Europe • English Speaking',
    flagEmoji: '🇮🇪',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&auto=format&fit=crop&q=80',
    popularFor: 'European Silicon Valley • 2-Year Stay-Back Visa • 100% English',
    highlight: 'European headquarters of Google, Apple, Meta, and Pfizer with a guaranteed 2-year post-study work visa (Third Level Graduate Scheme).'
  },
  {
    code: 'pt',
    code3: 'prt',
    name: 'Portugal',
    officialName: 'Portuguese Republic',
    capital: 'Lisbon',
    region: 'Europe',
    subregion: 'Southern Europe • Schengen Area',
    flagEmoji: '🇵🇹',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable Cost of Living • D8 Digital Nomad & Student Visas',
    highlight: 'Mild climate, high safety index, accessible university tuition, and clear permanent residency pathways.'
  },
  {
    code: 'hu',
    code3: 'hun',
    name: 'Hungary',
    officialName: 'Hungary',
    capital: 'Budapest',
    region: 'Europe',
    subregion: 'Central Europe • Schengen Area',
    flagEmoji: '🇭🇺',
    currency: 'Hungarian Forint (HUF)',
    landmarkImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Stipendium Hungaricum Scholarships • EU Medical Degrees',
    highlight: 'Full government scholarship opportunities, high medical admission success rate, and beautiful Budapest campuses.'
  },
  {
    code: 'cz',
    code3: 'cze',
    name: 'Czech Republic',
    officialName: 'Czech Republic',
    capital: 'Prague',
    region: 'Europe',
    subregion: 'Central Europe • Schengen Area',
    flagEmoji: '🇨🇿',
    currency: 'Czech Koruna (CZK)',
    landmarkImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Historic Charles University • Low Living Costs • Heart of Europe',
    highlight: 'Centuries-old academic prestige, vibrant international student community, and strategic location in central Europe.'
  },
  {
    code: 'gr',
    code3: 'grc',
    name: 'Greece',
    officialName: 'Hellenic Republic',
    capital: 'Athens',
    region: 'Europe',
    subregion: 'Southern Europe • Schengen Area',
    flagEmoji: '🇬🇷',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Maritime, Tourism & Archaeology • Mediterranean Lifestyle',
    highlight: 'Rich cultural heritage, growing English-taught degree options, and popular tourist visa destination.'
  },
  {
    code: 'ro',
    code3: 'rou',
    name: 'Romania',
    officialName: 'Romania',
    capital: 'Bucharest',
    region: 'Europe',
    subregion: 'Eastern Europe • EU Member',
    flagEmoji: '🇷🇴',
    currency: 'Romanian Leu (RON)',
    landmarkImage: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Low Tuition Fees • European Medical Degrees • Fast Processing',
    highlight: 'Accessible tuition fees, recognized EU medical and technical qualifications, and low living expenses.'
  },
  {
    code: 'ge',
    code3: 'geo',
    name: 'Georgia',
    officialName: 'Georgia',
    capital: 'Tbilisi',
    region: 'Europe',
    subregion: 'Eastern Europe / Caucasus',
    flagEmoji: '🇬🇪',
    currency: 'Georgian Lari (GEL)',
    landmarkImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable MBBS & Medical Degrees • 100% English Medium',
    highlight: 'WHO & GMC recognized medical universities with direct admissions without complex entrance exams.'
  },
  {
    code: 'tr',
    code3: 'tur',
    name: 'Turkey',
    officialName: 'Republic of Türkiye',
    capital: 'Ankara',
    region: 'Europe',
    subregion: 'Eurasia',
    flagEmoji: '🇹🇷',
    currency: 'Turkish Lira (TRY)',
    landmarkImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Türkiye Burslari Scholarships • Bridge Between East & West',
    highlight: 'Fully funded government scholarships, modern campus infrastructure, and vibrant multicultural cities.'
  },
  {
    code: 'cy',
    code3: 'cyp',
    name: 'Cyprus',
    officialName: 'Republic of Cyprus',
    capital: 'Nicosia',
    region: 'Europe',
    subregion: 'Mediterranean EU',
    flagEmoji: '🇨🇾',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1548187807-6f81e3532c52?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Hospitality & IT • High Visa Approval Rate • Low Living Cost',
    highlight: 'Fast student visa turnaround, English medium higher education, and Mediterranean sunshine.'
  },
  {
    code: 'lv',
    code3: 'lva',
    name: 'Latvia',
    officialName: 'Republic of Latvia',
    capital: 'Riga',
    region: 'Europe',
    subregion: 'Baltic • Schengen Area',
    flagEmoji: '🇱🇻',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable Schengen Studies • Aviation, IT & Engineering',
    highlight: 'Direct Schengen visa pathway, recognized European qualifications, and low annual tuition fees.'
  },
  {
    code: 'mt',
    code3: 'mlt',
    name: 'Malta',
    officialName: 'Republic of Malta',
    capital: 'Valletta',
    region: 'Europe',
    subregion: 'Southern Europe • Schengen Area',
    flagEmoji: '🇲🇹',
    currency: 'Euro (EUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=80',
    popularFor: 'English Speaking EU Island • Hospitality, Gaming & Tech',
    highlight: 'Official language is English, pleasant year-round climate, and direct Schengen work/study options.'
  },
  {
    code: 'ru',
    code3: 'rus',
    name: 'Russia',
    officialName: 'Russian Federation',
    capital: 'Moscow',
    region: 'Europe',
    subregion: 'Eastern Europe / Eurasia',
    flagEmoji: '🇷🇺',
    currency: 'Russian Ruble (RUB)',
    landmarkImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Direct University Payment • Official Pushkin & Moscow Linguistic Partnership',
    highlight: 'Exclusive official representative in Sri Lanka. Pay fees directly after arrival in Russia.',
    directPayment: true
  },
  {
    code: 'by',
    code3: 'blr',
    name: 'Belarus',
    officialName: 'Republic of Belarus',
    capital: 'Minsk',
    region: 'Europe',
    subregion: 'Eastern Europe',
    flagEmoji: '🇧🇾',
    currency: 'Belarusian Ruble (BYN)',
    landmarkImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable Medicine & Engineering • High Visa Success',
    highlight: 'Recognized medical degrees (WHO/GMC/SLMC), safe campus dormitories, and low living expenses.'
  },
  {
    code: 'gb',
    code3: 'gbr',
    name: 'United Kingdom',
    officialName: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    region: 'Europe',
    subregion: 'Western Europe',
    flagEmoji: '🇬🇧',
    currency: 'British Pound (GBP)',
    landmarkImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Russell Group Universities • 2-Year Graduate Route (PSW) • 1-Year Masters',
    highlight: 'World premier university hub, 1-year fast-track master degrees, and 2-year post-study work visa.'
  },

  // ═══ ASIA & PACIFIC ═══
  {
    code: 'my',
    code3: 'mys',
    name: 'Malaysia',
    officialName: 'Malaysia',
    capital: 'Kuala Lumpur',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇲🇾',
    currency: 'Malaysian Ringgit (MYR)',
    landmarkImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop&q=80',
    popularFor: 'UK/Australia Twinning Campuses • EMGS Fast-Track • Pay After Arrival',
    highlight: 'Global university branch campuses (Monash, Nottingham, Curtin) at 1/3 the tuition cost.',
    directPayment: true
  },
  {
    code: 'sg',
    code3: 'sgp',
    name: 'Singapore',
    officialName: 'Republic of Singapore',
    capital: 'Singapore',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇸🇬',
    currency: 'Singapore Dollar (SGD)',
    landmarkImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Direct University Payment • Zero Show Money • Pay After Visa • Global Financial Capital',
    highlight: 'Students can carry and pay tuition fees directly to the institution in Singapore upon arrival. Zero university fees in Sri Lanka.',
    directPayment: true
  },
  {
    code: 'jp',
    code3: 'jpn',
    name: 'Japan',
    officialName: 'Japan',
    capital: 'Tokyo',
    region: 'Asia',
    subregion: 'East Asia',
    flagEmoji: '🇯🇵',
    currency: 'Japanese Yen (JPY)',
    landmarkImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    popularFor: 'MEXT Scholarships • 28hr/wk Part-Time Work • High Tech & Robotics',
    highlight: 'Global high-tech leader, generous scholarship programs, and strong employment rate for international graduates.'
  },
  {
    code: 'kr',
    code3: 'kor',
    name: 'South Korea',
    officialName: 'Republic of Korea',
    capital: 'Seoul',
    region: 'Asia',
    subregion: 'East Asia',
    flagEmoji: '🇰🇷',
    currency: 'South Korean Won (KRW)',
    landmarkImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&auto=format&fit=crop&q=80',
    popularFor: 'GKS Korean Government Scholarships • K-Wave & Advanced Technology',
    highlight: 'World-leading R&D universities, extensive scholarship programs covering 50-100% of tuition, and post-study D-10 job search visa.'
  },
  {
    code: 'cn',
    code3: 'chn',
    name: 'China',
    officialName: "People's Republic of China",
    capital: 'Beijing',
    region: 'Asia',
    subregion: 'East Asia',
    flagEmoji: '🇨🇳',
    currency: 'Chinese Yuan (CNY)',
    landmarkImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&auto=format&fit=crop&q=80',
    popularFor: 'CSC Government Full Scholarships • English-Medium MBBS & Tech',
    highlight: 'Extensive government scholarship opportunities covering full tuition, accommodation, and monthly living allowance.'
  },
  {
    code: 'tw',
    code3: 'twn',
    name: 'Taiwan',
    officialName: 'Taiwan (ROC)',
    capital: 'Taipei',
    region: 'Asia',
    subregion: 'East Asia',
    flagEmoji: '🇹🇼',
    currency: 'New Taiwan Dollar (TWD)',
    landmarkImage: 'https://images.unsplash.com/photo-1508248017054-13e798e35b60?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Full Scholarships • Semiconductor & IT Capital • Low Living Costs',
    highlight: 'Generous MOFA & university scholarships, high-tech hub, and part-time work permits.'
  },
  {
    code: 'in',
    code3: 'ind',
    name: 'India',
    officialName: 'Republic of India',
    capital: 'New Delhi',
    region: 'Asia',
    subregion: 'South Asia',
    flagEmoji: '🇮🇳',
    currency: 'Indian Rupee (INR)',
    landmarkImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Official Chennai Amirta Campus Representation • Guaranteed Placement',
    highlight: 'Hospitality, Aviation, and Nursing programs with 100% practical training and overseas placement.'
  },
  {
    code: 'th',
    code3: 'tha',
    name: 'Thailand',
    officialName: 'Kingdom of Thailand',
    capital: 'Bangkok',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇹🇭',
    currency: 'Thai Baht (THB)',
    landmarkImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Tourist Visa • Hospitality Programs • Digital Nomad Destination',
    highlight: 'Instant tourist e-visas, affordable international school & university programs, and vibrant tourism hub.'
  },
  {
    code: 'vn',
    code3: 'vnm',
    name: 'Vietnam',
    officialName: 'Socialist Republic of Vietnam',
    capital: 'Hanoi',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇻🇳',
    currency: 'Vietnamese Dong (VND)',
    landmarkImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Fast E-Visa Processing • Booming Economy • Beautiful Landscapes',
    highlight: 'Fast online tourist visa approvals, rich cultural travel, and growing international university campuses.'
  },
  {
    code: 'id',
    code3: 'idn',
    name: 'Indonesia',
    officialName: 'Republic of Indonesia',
    capital: 'Jakarta',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇮🇩',
    currency: 'Indonesian Rupiah (IDR)',
    landmarkImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Bali Tourism Visas • Cultural & Business Exchange',
    highlight: 'Fast e-VoA and tourist visa processing for holidaymakers, retreats, and business exploration.'
  },
  {
    code: 'ph',
    code3: 'phl',
    name: 'Philippines',
    officialName: 'Republic of the Philippines',
    capital: 'Manila',
    region: 'Asia',
    subregion: 'Southeast Asia',
    flagEmoji: '🇵🇭',
    currency: 'Philippine Peso (PHP)',
    landmarkImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=80',
    popularFor: 'US-Pattern Medical Programs (MD/MBBS) • 100% English Medium',
    highlight: 'American curriculum medical education, affordable clinical rotations, and tropical island tourism.'
  },
  {
    code: 'mv',
    code3: 'mdv',
    name: 'Maldives',
    officialName: 'Republic of Maldives',
    capital: 'Malé',
    region: 'Asia',
    subregion: 'South Asia',
    flagEmoji: '🇲🇻',
    currency: 'Maldivian Rufiyaa (MVR)',
    landmarkImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Luxury Island Travel • Resort Employment Pathways',
    highlight: 'Visa on arrival for tourists, luxury holiday packages, and hospitality industry employment support.'
  },

  // ═══ MIDDLE EAST ═══
  {
    code: 'ae',
    code3: 'are',
    name: 'Dubai (UAE)',
    officialName: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    region: 'Middle East',
    subregion: 'Arabian Gulf',
    flagEmoji: '🇦🇪',
    currency: 'UAE Dirham (AED)',
    landmarkImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Official Fin Win Campus Representation • Golden Visa • Tax-Free Careers',
    highlight: 'Study at Dubai Knowledge Park with guaranteed internships, tax-free earnings, and fast visa processing.'
  },
  {
    code: 'sa',
    code3: 'sau',
    name: 'Saudi Arabia',
    officialName: 'Kingdom of Saudi Arabia',
    capital: 'Riyadh',
    region: 'Middle East',
    subregion: 'Arabian Peninsula',
    flagEmoji: '🇸🇦',
    currency: 'Saudi Riyal (SAR)',
    landmarkImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Vision 2030 Mega Projects • Umrah / Tourism E-Visa • Business Visas',
    highlight: 'Fast e-visa issuance, corporate business delegation support, and Umrah travel documentation.'
  },
  {
    code: 'qa',
    code3: 'qat',
    name: 'Qatar',
    officialName: 'State of Qatar',
    capital: 'Doha',
    region: 'Middle East',
    subregion: 'Arabian Gulf',
    flagEmoji: '🇶🇦',
    currency: 'Qatari Riyal (QAR)',
    landmarkImage: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Education City (US University Branches) • Hayya Tourist E-Visa',
    highlight: 'Premier Education City campus branches (Georgetown, Northwestern, Texas A&M) and fast visit visas.'
  },
  {
    code: 'om',
    code3: 'omn',
    name: 'Oman',
    officialName: 'Sultanate of Oman',
    capital: 'Muscat',
    region: 'Middle East',
    subregion: 'Arabian Peninsula',
    flagEmoji: '🇴🇲',
    currency: 'Omani Rial (OMR)',
    landmarkImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop&q=80',
    popularFor: 'E-Visa Tourism • Corporate & Family Visits',
    highlight: 'Fast online tourist visa approvals, scenic mountain landscapes, and peaceful expat environment.'
  },
  {
    code: 'kw',
    code3: 'kwt',
    name: 'Kuwait',
    officialName: 'State of Kuwait',
    capital: 'Kuwait City',
    region: 'Middle East',
    subregion: 'Arabian Gulf',
    flagEmoji: '🇰🇼',
    currency: 'Kuwaiti Dinar (KWD)',
    landmarkImage: 'https://images.unsplash.com/photo-1578895101407-7427a199e4f2?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Business & Commercial Visits • Expat Family Sponsorship',
    highlight: 'Highest valued global currency, corporate travel assistance, and family visit dossier preparation.'
  },
  {
    code: 'bh',
    code3: 'bhr',
    name: 'Bahrain',
    officialName: 'Kingdom of Bahrain',
    capital: 'Manama',
    region: 'Middle East',
    subregion: 'Arabian Gulf',
    flagEmoji: '🇧🇭',
    currency: 'Bahraini Dinar (BHD)',
    landmarkImage: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Financial Hub • Fast E-Visa Processing • Business Expansion',
    highlight: 'Open economy, fast online visa approvals, and strategic access to the GCC region.'
  },

  // ═══ AMERICAS ═══
  {
    code: 'ca',
    code3: 'can',
    name: 'Canada',
    officialName: 'Canada',
    capital: 'Ottawa',
    region: 'Americas',
    subregion: 'North America',
    flagEmoji: '🇨🇦',
    currency: 'Canadian Dollar (CAD)',
    landmarkImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&auto=format&fit=crop&q=80',
    popularFor: '3-Year PGWP Work Permit • Express Entry PR Pathway • DLI Colleges',
    highlight: 'Leading immigration-friendly destination with designated learning institutions (DLIs) and post-graduation work permits.'
  },
  {
    code: 'us',
    code3: 'usa',
    name: 'United States',
    officialName: 'United States of America',
    capital: 'Washington, D.C.',
    region: 'Americas',
    subregion: 'North America',
    flagEmoji: '🇺🇸',
    currency: 'US Dollar (USD)',
    landmarkImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=80',
    popularFor: 'F-1 Student Visa • Ivy League & State Universities • 3-Year STEM OPT',
    highlight: 'World top ranked universities, 36 months STEM OPT post-study work authorization, and B1/B2 tourist visas.'
  },
  {
    code: 'br',
    code3: 'bra',
    name: 'Brazil',
    officialName: 'Federative Republic of Brazil',
    capital: 'Brasília',
    region: 'Americas',
    subregion: 'South America',
    flagEmoji: '🇧🇷',
    currency: 'Brazilian Real (BRL)',
    landmarkImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Tourist Visas • Business Trade • Cultural Exchange',
    highlight: 'Largest Latin American economy, rich biodiversity, and streamlined tourist visa filing.'
  },
  {
    code: 'mx',
    code3: 'mex',
    name: 'Mexico',
    officialName: 'United Mexican States',
    capital: 'Mexico City',
    region: 'Americas',
    subregion: 'North America / Latin America',
    flagEmoji: '🇲🇽',
    currency: 'Mexican Peso (MXN)',
    landmarkImage: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Tourism & Resorts • Trade & Manufacturing • Digital Nomad Visas',
    highlight: 'Rich historic culture, world-class coastal resorts, and expanding international business links.'
  },
  {
    code: 'ar',
    code3: 'arg',
    name: 'Argentina',
    officialName: 'Argentine Republic',
    capital: 'Buenos Aires',
    region: 'Americas',
    subregion: 'South America',
    flagEmoji: '🇦🇷',
    currency: 'Argentine Peso (ARS)',
    landmarkImage: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Free Public Higher Education (UBA) • Cultural Capital',
    highlight: 'Renowned public university system (University of Buenos Aires), vibrant arts, and European architectural charm.'
  },

  // ═══ OCEANIA ═══
  {
    code: 'au',
    code3: 'aus',
    name: 'Australia',
    officialName: 'Commonwealth of Australia',
    capital: 'Canberra',
    region: 'Oceania',
    subregion: 'Australasia',
    flagEmoji: '🇦🇺',
    currency: 'Australian Dollar (AUD)',
    landmarkImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Group of Eight (Go8) • Subclass 500 Student Visa • Subclass 485 PSW',
    highlight: 'World-class universities, flexible part-time work rights (48 hrs/fortnight), and extended post-study regional work visas.'
  },
  {
    code: 'nz',
    code3: 'nzl',
    name: 'New Zealand',
    officialName: 'New Zealand',
    capital: 'Wellington',
    region: 'Oceania',
    subregion: 'Australasia',
    flagEmoji: '🇳🇿',
    currency: 'New Zealand Dollar (NZD)',
    landmarkImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Green List PR Occupations • 3-Year Post-Study Work Visa',
    highlight: 'Fast-track Green List residency for engineers, healthcare and ICT professionals, safe and clean environment.'
  },
  {
    code: 'mu',
    code3: 'mus',
    name: 'Mauritius',
    officialName: 'Republic of Mauritius',
    capital: 'Port Louis',
    region: 'Africa',
    subregion: 'Indian Ocean Hub',
    flagEmoji: '🇲🇺',
    currency: 'Mauritian Rupee (MUR)',
    landmarkImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Affordable UK Degrees • No IELTS Required • 20hr/wk Part-Time Work',
    highlight: 'Cost-effective Indian Ocean international education hub with direct university credit transfer options.'
  },
  {
    code: 'za',
    code3: 'zaf',
    name: 'South Africa',
    officialName: 'Republic of South Africa',
    capital: 'Pretoria / Cape Town',
    region: 'Africa',
    subregion: 'Southern Africa',
    flagEmoji: '🇿🇦',
    currency: 'South African Rand (ZAR)',
    landmarkImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Top African Universities (UCT) • Tourism & Safari • English Medium',
    highlight: 'Top ranked continent universities, affordable tuition, and unforgettable wildlife tourism.'
  },
  {
    code: 'eg',
    code3: 'egy',
    name: 'Egypt',
    officialName: 'Arab Republic of Egypt',
    capital: 'Cairo',
    region: 'Africa',
    subregion: 'North Africa / Middle East',
    flagEmoji: '🇪🇬',
    currency: 'Egyptian Pound (EGP)',
    landmarkImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&auto=format&fit=crop&q=80',
    popularFor: 'Historic Pyramids Tourism • Al-Azhar & Cairo University Studies',
    highlight: 'Fast tourist e-visa approvals, ancient wonders of the world, and affordable specialized university programs.'
  }
];

/**
 * Helper to convert WorldCountryBasic to the full Country data structure
 */
export function convertToCountry(basic: WorldCountryBasic): Country {
  const isEurope = basic.region === 'Europe';
  const isSchengen = basic.subregion.toLowerCase().includes('schengen');

  return {
    id: basic.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-'),
    name: basic.name,
    flag: basic.flagEmoji,
    flagUrl: `https://flagcdn.com/w320/${basic.code}.png`,
    image: basic.landmarkImage,
    capital: basic.capital,
    visaTypes: ['student', 'tourist', 'business', 'visit'],
    popularFor: basic.popularFor,
    highlight: basic.highlight,
    badge: basic.directPayment ? 'Direct University Pay' : `${basic.code.toUpperCase()} • ${basic.region}`,
    intake: 'Fall & Spring Semester Intakes',
    currency: basic.currency,
    directPayment: !!basic.directPayment,
    programsCount: 'Undergraduate, Master & Visa Services',
    visas: {
      student: {
        available: true,
        processingTime: isEurope ? '3 - 6 Weeks' : '2 - 5 Weeks',
        successRate: '98%',
        directTuitionPay: !!basic.directPayment,
        workRights: isSchengen ? '20 hours/week during term' : 'Permitted under student immigration regulations',
        overview: `Study in ${basic.name}. Noble Visa Centre provides end-to-end guidance from university admissions, document apostille, bank statements, to embassy interview preparation.`,
        documents: [
          'Valid International Passport (min. 18 months validity)',
          'Original Educational Certificates & Transcripts',
          'Official University Offer Letter / Acceptance',
          'Proof of Financial Means / Bank Statement / Sponsor Letter',
          'Passport Sized Photographs (White Background)',
          'Medical Fitness & Health Clearance'
        ],
        requirements: [
          'Academic eligibility for chosen study program',
          'Adequate proof of funds for tuition and living costs',
          'Clear criminal record & medical fitness'
        ],
        benefits: [
          'Complete admissions assistance',
          'Step-by-step visa file compilation',
          'Pre-departure and flight booking guidance'
        ]
      },
      tourist: {
        available: true,
        processingTime: '7 - 15 Days',
        successRate: '98%',
        overview: `Travel and explore ${basic.name} with confidence. We assist with tourist visa application dossiers, flight itineraries, hotel bookings, and travel insurance.`,
        documents: [
          'Valid International Passport (min. 6 months validity)',
          'Completed Visa Application Form',
          'Proof of Accommodation / Hotel Confirmation',
          'Return Flight Reservation',
          'Bank Statement (Last 3-6 Months)',
          'Travel Insurance Policy'
        ],
        requirements: [
          'Genuine intent to visit as a tourist',
          'Sufficient financial support for duration of stay',
          'Ties to home country'
        ],
        benefits: [
          'Error-free application submission',
          'Compliant travel insurance and itinerary',
          'Fast track tracking'
        ]
      },
      business: {
        available: true,
        processingTime: '2 - 4 Weeks',
        successRate: '98%',
        overview: `Attend conferences, corporate meetings, trade fairs, or business negotiations in ${basic.name} with official visa documentation support.`,
        documents: [
          'Valid Passport',
          `Official Business Invitation Letter from host organization in ${basic.name}`,
          'Company Introduction Letter / Deputation Letter',
          'Proof of Business Registration & Tax Returns',
          'Recent Bank Statements',
          'Conference / Event Registration if applicable'
        ],
        requirements: [
          `Valid host company registration in ${basic.name}`,
          'Clear business purpose and schedule'
        ],
        benefits: [
          'Official business file compilation',
          'VIP appointment scheduling assistance'
        ]
      },
      visit: {
        available: true,
        processingTime: '2 - 4 Weeks',
        successRate: '98%',
        overview: `Visit family members, relatives, or friends residing in ${basic.name} with structured sponsorship and invitation support.`,
        documents: [
          'Valid Passport',
          'Formal Invitation Letter from host/relative',
          `Copy of Host’s Residence Permit / Citizenship in ${basic.name}`,
          'Proof of Relationship (if applicable)',
          'Host Accommodation & Financial Proof (or applicant’s funds)',
          'Travel Insurance'
        ],
        requirements: [
          'Verified relationship/invitation from host',
          `Valid legal status of host in ${basic.name}`
        ],
        benefits: [
          'Invitation letter formatting review',
          'High visa approval compliance check'
        ]
      }
    }
  };
}

export const ALL_EXPANDED_COUNTRIES: Country[] = WORLD_COUNTRIES_DATA.map(convertToCountry);
