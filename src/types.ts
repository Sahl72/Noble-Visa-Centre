export interface VisaService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  popularCountries: string[];
  processingTime: string;
  requirements: string[];
}

export interface ProgramCategory {
  category: string;
  duration?: string;
  items: string[];
}

export interface FinancialStructure {
  title: string;
  items: { label: string; amount: string; note?: string }[];
  total: string;
  notes?: string;
}

export interface InternshipDetails {
  duration: string;
  targetAudience: string;
  hotelTier: string;
  allowanceOptions: string[];
  benefitsProvided: string[];
  studentResponsibilities: string[];
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  flagUrl?: string;
  image: string;
  popularFor: string;
  capital: string;
  visaTypes: string[];
  universitiesCount?: number;
  programsCount?: string;
  currency?: string;
  visas?: Record<string, any>;
  highlight: string;
  badge?: string;
  intake?: string;
  processingTime?: string;
  directPayment?: boolean;
  officialRole?: string;
  partnerUniversities?: string[];
  entryRequirements?: string[];
  keyBenefits?: string[];
  mandatoryDocuments?: string[];
  programs?: ProgramCategory[];
  sampleFinancials?: FinancialStructure;
  internshipDetails?: InternshipDetails;
}

export interface UniversityPartner {
  id: string;
  name: string;
  subtitle?: string;
  campus?: string;
  location: string;
  city?: string;
  logoText: string;
  logoBadge?: string;
  type: string;
  officialRole?: string;
  partnerType?: 'official-manager' | 'country-representative' | 'official-partner' | 'other-university';
  country: string;
  countryId?: string;
  intake?: string;
  studyLevels?: string[];
  fields?: string[];
  highlights?: string[];
  directPayment?: boolean;
  image?: string;
  logoUrl?: string;
  overview?: string;
}

export type StudyLevel = 'Foundation' | 'Diploma' | "Bachelor's" | "Master's" | 'MBBS' | 'Other';

export interface ProgramItem {
  id: string;
  name: string;
  universityId: string;
  universityName: string;
  country: string;
  countryId: string;
  level: StudyLevel;
  duration: string;
  intake: string;
  ielts: string;
  ageLimit?: string;
  field: string;
  overview: string;
  entryRequirements: string[];
  documents: string[];
  processingTime: string;
  partTimeWork?: string;
  accommodation?: string;
  mediumOfInstruction?: string;
  paymentInfo?: string;
  directPayment?: boolean;
  whyChoose?: string[];
}

export interface SuccessStory {
  id: string;
  name: string;
  visaType: string;
  country: string;
  countryCode?: string;
  category?: string;
  university?: string;
  intake?: string;
  image: string;
  quote?: string;
  badge?: string;
  flag?: string;
  date?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email?: string;
  interest: string;
  country?: string;
  preferredCountry?: string;
  visaType?: string;
  university?: string;
  program?: string;
  preferredIntake?: string;
  message?: string;
}

export type AppPage = 'home' | 'countries' | 'universities' | 'programs' | 'consultation' | 'visa-info';

export interface RouteState {
  page: AppPage;
  country?: string;
  visaType?: string;
  university?: string;
  program?: string;
  intake?: string;
  level?: string;
  field?: string;
}


