import { VisaService, Country, UniversityPartner, SuccessStory } from '../types';

export const AGENCY_NAME = "Noble Visa Centre";
export const CORE_MISSION = "Your Future. Our Priority.";
export const CORE_DESCRIPTION = "Providing expert guidance, a wide range of top destinations, and end-to-end support for studying, working, and building a better future abroad.";

export const WEBSITES = [
  "www.noblevisacentre.org",
  "www.noblevisacentre.com"
];

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/noblevisacentre",
  instagram: "https://instagram.com/noblevisacentre",
  tiktok: "https://tiktok.com/@noblevisacentre",
  youtube: "https://youtube.com/@noblevisacentre",
  handle: "@noblevisacentre"
};

export const WHATSAPP_NUMBER = "94740104106"; // Sri Lanka format: 0740104106 -> +94 74 010 4106
export const WHATSAPP_DISPLAY = "+94 74 010 4106";
export const LOCAL_PHONE_DISPLAY = "074 010 4106";

export const BUSINESS_PHONES = [
  { display: "074 010 4106", raw: "0740104106", intl: "+94 74 010 4106", label: "WhatsApp Hotline 1 / Headquarters (Battaramulla)" },
  { display: "074 010 2108", raw: "0740102108", intl: "+94 74 010 2108", label: "WhatsApp Hotline 2 / One Galle Face Branch" }
];

export const EMAIL_DISPLAY = "info@noblevisacentre.org";

export const OFFICE_BRANCHES = [
  {
    name: "Headquarters - Battaramulla",
    address: "No 393 Lily Avenue, Robert Gunawardana Mawatha, Battaramulla, Sri Jayawardhanapura",
    city: "Battaramulla, Sri Jayawardhanapura",
    postalCode: "10120",
    phone: "074 010 4106",
    rawPhone: "0740104106",
    tag: "Headquarters",
    hours: "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 2:00 PM",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Noble+Visa+Centre+393+Lily+Avenue+Robert+Gunawardana+Mawatha+Battaramulla+Sri+Jayawardhanapura"
  },
  {
    name: "One Galle Face Branch",
    address: "Level 12, One Galle Face Tower, Colombo, Sri Lanka",
    city: "Colombo",
    postalCode: "00200",
    phone: "074 010 2108",
    rawPhone: "0740102108",
    tag: "Branch Office",
    hours: "Mon – Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 2:00 PM",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=One+Galle+Face+Tower+Colombo+Sri+Lanka"
  }
];

export const ADDRESS_DISPLAY = "No 393 Lily Avenue, Robert Gunawardana Mawatha, Battaramulla, Sri Jayawardhanapura | Level 12, One Galle Face Tower, Colombo, Sri Lanka";
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEWS_COUNT = "70+";

export const getWhatsAppUrl = (message?: string) => {
  const defaultMsg = "Hello Noble Visa Centre! I would like to book a free consultation regarding student visa / courses.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const DIRECT_FEE_PAYMENT_COUNTRIES = [
  {
    country: "Russia",
    flag: "🇷🇺",
    note: "Students can take and pay tuition directly by hand to the university upon arrival in Russia. No middlemen, zero university fee payment in Sri Lanka."
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    note: "Students can pay tuition fees directly by hand to the university campus in Malaysia upon arrival. No middlemen, zero university payment in Sri Lanka."
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    note: "Students can pay tuition fees directly by hand to the institution in Singapore upon arrival / visa grant. Zero university payment in Sri Lanka."
  }
];

export const OFFICIAL_REPRESENTATIONS = [
  {
    role: "Country Manager",
    institution: "Moscow Linguistic University",
    country: "Russia",
    icon: "GraduationCap",
    details: "Direct admissions, official entrance validation, and full institutional support."
  },
  {
    role: "Country Manager",
    institution: "Moscow Pushkin University",
    country: "Russia",
    icon: "Award",
    details: "State university academic pathway management and document verification."
  },
  {
    role: "Country Representative",
    institution: "Chennai Amirta Campus",
    country: "India",
    icon: "Building",
    details: "Hospitality, Nursing & Aviation programs with built-in internships and guaranteed job placements."
  },
  {
    role: "Country Representative",
    institution: "Swiss B.H.M.S. (Business & Hotel Management School)",
    country: "Switzerland",
    icon: "ShieldCheck",
    details: "Prestigious Lucerne campus representation with paid Swiss hospitality internships."
  },
  {
    role: "Country Manager",
    institution: "Fin Win Campus (Dubai Knowledge Park)",
    country: "Dubai (UAE)",
    icon: "Globe",
    details: "Direct pathway campus for undergraduate, postgraduate, and executive study in the UAE."
  }
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'student-visa',
    title: 'STUDENT VISA',
    subtitle: 'Study in top countries',
    iconName: 'GraduationCap',
    description: 'Complete guidance for undergraduate, postgraduate, medical degrees, and vocational diplomas abroad with official university admissions and visa filing.',
    popularCountries: ['Russia', 'Belarus', 'Malaysia', 'Singapore', 'Taiwan', 'Cyprus', 'Latvia', 'India', 'Switzerland', 'UK', 'Canada', 'Dubai'],
    processingTime: '7 Days - 6 Weeks (Country Dependent)',
    requirements: [
      'Academic Transcripts & Certificates (O/L, A/L or 12th Pass)',
      'Valid Passport Copy',
      'Medical Tests (HIV, Tuberculosis, Syphilis where applicable)',
      'Direct University Tuition Application'
    ]
  },
  {
    id: 'tourist-visa',
    title: 'TOURIST VISA',
    subtitle: 'Explore the world with ease',
    iconName: 'Luggage',
    description: 'Hassle-free holiday and visit visa processing with personalized travel itinerary planning, hotel confirmations, and document verification.',
    popularCountries: ['Malaysia (E-Visa)', 'Thailand', 'Vietnam', 'Dubai (UAE)', 'Singapore', 'UK', 'Schengen Area'],
    processingTime: '3 - 10 working days',
    requirements: ['Valid Passport (6+ months)', 'Proof of Funds', 'Travel Itinerary & Hotel Booking', 'Employment / Business Proof']
  },
  {
    id: 'business-visa',
    title: 'BUSINESS VISA',
    subtitle: 'For meetings, events & more',
    iconName: 'Briefcase',
    description: 'Fast-track visa processing for corporate travel, international conferences, business meetings, and commercial trade worldwide.',
    popularCountries: ['Malaysia', 'Vietnam', 'Dubai (UAE)', 'Singapore', 'UK', 'Thailand'],
    processingTime: '3 - 12 working days',
    requirements: ['Official Invitation Letter', 'Company Registration Details', 'Bank Statements', 'Covering Letter']
  },
  {
    id: 'family-visa',
    title: 'FAMILY VISA',
    subtitle: 'Bring your family together',
    iconName: 'Users',
    description: 'Reunite with your loved ones abroad with spouse visas, dependent visas, and family sponsorship consultancy.',
    popularCountries: ['UK', 'Canada', 'New Zealand', 'Dubai (UAE)', 'Malaysia'],
    processingTime: '4 - 12 weeks',
    requirements: ['Relationship Proof / Marriage Certificate', 'Sponsor Financial Documents', 'Accommodation Proof', 'TB & Medical Test']
  },
  {
    id: 'employment-visa',
    title: 'EMPLOYMENT VISA',
    subtitle: 'Work opportunities abroad',
    iconName: 'Handshake',
    description: 'Work permits, employment visas, and paid overseas training & internships (including 12-month paid hotel internships in Taiwan with USD 700-900 stipends and Swiss hospitality practical training).',
    popularCountries: ['Taiwan (Paid Internships)', 'Switzerland (B.H.M.S.)', 'India (Hospitality & Nursing)', 'Dubai (UAE)', 'UK', 'Canada'],
    processingTime: '3 - 8 weeks',
    requirements: ['Valid Passport', 'Educational / Professional Certificates', 'Resume / CV', 'Police Clearance & Medical Report']
  },
  {
    id: 'and-more',
    title: 'AND MORE',
    subtitle: 'Other visa solutions',
    iconName: 'ClipboardList',
    description: 'Custom visa solutions including medical treatment visas, transit permits, document translations & attestations, and appeal assistance for prior visa refusals.',
    popularCountries: ['Worldwide Destinations'],
    processingTime: 'Varies by visa type',
    requirements: ['Passport', 'Purpose Specific Documents', 'Identification Records']
  }
];

export const COUNTRIES: Country[] = [
  {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/ru.svg',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1600&q=85',
    popularFor: 'Medical & Engineering Studies',
    capital: 'Moscow',
    badge: 'Flagship Destination',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '45 Days',
    directPayment: true,
    officialRole: 'Official Country Manager for Moscow Linguistic & Pushkin Universities',
    universitiesCount: 15,
    highlight: 'Pay Tuition Direct by Hand on Arrival • Without IELTS • Up to Age 30',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa'],
    partnerUniversities: [
      'Omnis International University',
      'Moscow Linguistic University (Official Country Manager)',
      'Moscow Pushkin University (Official Country Manager)'
    ],
    entryRequirements: [
      'Minimum 12th Pass / School Certificate',
      'Age Limit: Up to 30 years',
      'Without IELTS requirement',
      'Part-Time Work Allowed for international students'
    ],
    keyBenefits: [
      'Pay tuition directly by hand to the university in Russia upon arrival (no middlemen or local tuition payments in Sri Lanka)',
      'World-recognized degrees in Medicine (M.B.B.S), Teaching, and Technology',
      'High standard of student accommodation and campus facilities'
    ],
    mandatoryDocuments: [
      'Original Passport (at least 2 blank pages, valid for at least 1.5 years from visa start date)',
      'School Certificate / Academic Transcripts',
      'Medical Reports: HIV 1 & 2 and P24 Combo Test, Tuberculosis Test (Montoux Test), Syphilis Test',
      'Scanned Copy of Agreement',
      'Digital Photograph & Travel History (If Any)'
    ],
    programs: [
      {
        category: 'Foundation Programs',
        duration: '1 Year',
        items: ['Preparatory Russian & English Language Bridging', 'Academic Foundations for Science & Humanities']
      },
      {
        category: 'Bachelor Degrees (4-Year Durations)',
        duration: '4 Years',
        items: [
          'Pedagogical Education (Specialisation in "Foreign Language" / Preschool Teaching)',
          'Human Resources Management',
          'Logistic & Transport Management',
          'Economics - Finance & Credit',
          'Information Systems & Technologies'
        ]
      },
      {
        category: 'M.B.B.S (Medical Degree)',
        duration: '6 Years',
        items: ['General Medicine (M.B.B.S) meeting international medical council standards']
      },
      {
        category: 'Masters Programs',
        duration: '2 Years',
        items: ['International Business', 'Advanced Linguistic Studies', 'Computer Science & AI']
      }
    ]
  },
  {
    id: 'belarus',
    name: 'Belarus',
    flag: '🇧🇾',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/by.svg',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Informatics, Radioelectronics & Foreign Languages',
    capital: 'Minsk',
    badge: 'Fast Track Admission',
    intake: 'Admissions Open / Rolling Intakes',
    processingTime: 'Admission: 7–10 Days | Visa Invitation: 30 Days',
    universitiesCount: 10,
    highlight: 'Admission in 7-10 Days • Affordable European Living • Bright Career Paths',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa'],
    partnerUniversities: [
      'Belarusian State University of Foreign Languages',
      'Belarusian State University of Informatics and Radioelectronics (BSUIR)'
    ],
    entryRequirements: [
      'Passport Copy',
      'School Certificate (O/L & A/L)',
      'Medical Fitness Report'
    ],
    keyBenefits: [
      'Fast admissions processing within 7–10 working days',
      'High-tech specialized programs in electronics, IT, and multilingual pedagogy',
      'Affordable tuition fee structures and international recognition'
    ],
    mandatoryDocuments: [
      'Passport Copy',
      'School Certificate / Official Transcripts',
      'Medical Report'
    ],
    programs: [
      {
        category: 'Higher Education Programs',
        duration: '4 - 5 Years',
        items: [
          'Informatics and Computer Systems (BSUIR)',
          'Radioelectronics & Telecommunications',
          'Foreign Languages & Applied Linguistics',
          'Software Engineering'
        ]
      }
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/my.svg',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Affordable World-Class Degrees & E-Visas',
    capital: 'Kuala Lumpur',
    badge: 'Direct Tuition Payment',
    intake: 'Multiple Rolling Intakes',
    processingTime: '2 - 4 Weeks',
    directPayment: true,
    universitiesCount: 22,
    highlight: 'Pay Tuition by Hand Direct to University on Arrival • Entry with O/Ls • Zero Payment in SL',
    visaTypes: ['Student Visa', 'Tourist E-Visa', 'Work Permit'],
    entryRequirements: [
      'Entry accepted with Ordinary Levels (O/L’s)',
      'Low IELTS requirement / English waiver available',
      'Without Show Money options available'
    ],
    keyBenefits: [
      'Direct University Fee Payment: Students can pay directly by hand to the Malaysian campus upon arrival (no middlemen or university payments in Sri Lanka)',
      'Globally recognized qualifications, experienced faculty, and multicultural learning environment',
      'Fast, easy, and reliable E-Visa processing for tourists and visiting family members'
    ],
    mandatoryDocuments: [
      'Valid Passport',
      'O/L or A/L Certificates',
      'White background photos',
      'EMGS Health Declaration'
    ],
    programs: [
      {
        category: 'Featured Specialized Diplomas',
        duration: '2 - 2.5 Years',
        items: [
          'Diploma in Logistics & Supply Chain Management',
          'Diploma in Occupational Safety & Health (Workplace Safety & Health Management)',
          'Diploma in Human Resource Management',
          'Diploma in Business Administration & IT'
        ]
      },
      {
        category: 'Bachelor Degree Pathways',
        duration: '3 Years',
        items: ['Dual UK/Australian degrees hosted in Malaysia', 'Hospitality & Tourism Management']
      }
    ],
    sampleFinancials: {
      title: 'Sample Financial Structure (Human Resource Management Example)',
      items: [
        { label: 'EMGS Visa Processing Fee', amount: 'RM 3,000*' },
        { label: 'Course Tuition Fee', amount: 'RM 30,000*' }
      ],
      total: 'RM 33,000/-*',
      notes: '*Approximate sample rates; exact fees vary by program and institution.'
    }
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/sg.svg',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=85',
    popularFor: 'Global Business, Tech & Automation Hub',
    capital: 'Singapore',
    badge: 'Pay After Visa',
    intake: 'Monthly / Quarterly Intakes',
    processingTime: '2 - 3 Weeks',
    directPayment: true,
    universitiesCount: 12,
    highlight: 'Pay Tuition Direct by Hand on Arrival • Age 18–30 • Entry with O/Ls • Zero Show Money',
    visaTypes: ['Student Pass', 'Tourist Visa', 'Employment Pass'],
    entryRequirements: [
      'Age Limit: 18 to 30 years',
      'Entry possible with O/L’s only',
      'Minimal documentation required',
      'No show money required'
    ],
    keyBenefits: [
      'Pay After Visa / On Arrival: Students can carry and pay tuition fees directly by hand to the Singapore institution (zero university fees paid in Sri Lanka)',
      'Zero local middlemen charges and no hidden agency commissions',
      'UK recognized qualifications with progression pathways to UK, Australia & worldwide'
    ],
    mandatoryDocuments: [
      'Passport Copy',
      'Birth Certificate',
      'O/L or A/L Certificates',
      'Digital Passport Photos'
    ],
    programs: [
      {
        category: 'UK Recognized Qualifications',
        duration: '4 Months - 2 Years',
        items: [
          'Diploma in Information Technology (UK Qualification, flexible learning, low IELTS, pathway to higher degrees)',
          'Certificate in Robotics Programming (Kickstart career in automation, UK-recognized, low IELTS, fast 4-month timeline)'
        ]
      }
    ]
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    flag: '🇹🇼',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/tw.svg',
    image: 'https://images.unsplash.com/photo-1508248467877-aec1b08de376?auto=format&fit=crop&w=600&q=80',
    popularFor: '12-Month Paid Hospitality Internship',
    capital: 'Taipei',
    badge: 'Paid Internship',
    intake: 'Year-Round Placements',
    processingTime: '3 - 6 Weeks',
    universitiesCount: 8,
    highlight: '12-Month Internship in 5★ & 6★ Hotels • USD 700 - USD 900 / Month Allowance',
    visaTypes: ['Internship Visa', 'Visitor Visa', 'Student Visa'],
    entryRequirements: [
      'Hospitality students, fresh graduates, and career starters looking for 5-star & 6-star hotel experience',
      'Age 18–30',
      'Good conversational English & professional grooming'
    ],
    keyBenefits: [
      '12-month full-year structured internship at prestigious 5★ or 6★ luxury hotels',
      'Monthly allowance options: USD 700 / month OR USD 900 / month',
      'Accommodation provided, duty meals, laundry services, and comprehensive medical coverage'
    ],
    mandatoryDocuments: [
      'Valid Passport',
      'Hospitality diploma / degree or student status certificate',
      'Updated CV / Resume with photo',
      'Medical Examination Report'
    ],
    programs: [
      {
        category: 'Hospitality Internship Tracks',
        duration: '12 Months (1 Full Year)',
        items: [
          'Food & Beverage (F&B) Management at 5★ / 6★ Luxury Hotels',
          'Front Office & Guest Relations Operations',
          'Culinary & Kitchen Operations',
          'Housekeeping & Hospitality Management'
        ]
      }
    ],
    internshipDetails: {
      duration: '12-Month Full-Year Structured Program',
      targetAudience: 'Hospitality students, fresh graduates, and career starters',
      hotelTier: '5★ and 6★ Luxury Hotels in Taiwan',
      allowanceOptions: [
        'Option 1: USD 700 / month',
        'Option 2: USD 900 / month (payable upon issuance of Letter of Offer)'
      ],
      benefitsProvided: [
        'Accommodation provided (with USD 200–250 monthly deduction)',
        'Duty meals during work shifts',
        'Staff laundry services',
        'Medical coverage during placement'
      ],
      studentResponsibilities: [
        'Flight ticket from home country to placement location',
        'Visa application & processing expenses'
      ]
    }
  },
  {
    id: 'cyprus',
    name: 'Cyprus',
    flag: '🇨🇾',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/cy.svg',
    image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=600&q=80',
    popularFor: 'European Degrees & Mediterranean Lifestyle',
    capital: 'Nicosia',
    badge: 'European Degree',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '3 - 5 Weeks',
    universitiesCount: 9,
    highlight: 'World-Class Education • Globally Recognized Degrees • Diverse International Environment',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa'],
    entryRequirements: [
      'O/L or A/L School Completion',
      'English proficiency or institutional placement test',
      'Valid financial sponsorship documents'
    ],
    keyBenefits: [
      'World-class education and globally recognized degrees in Europe',
      'Dynamic international student community and safe Mediterranean living',
      'Flexible credit transfer options across the European Union'
    ],
    mandatoryDocuments: [
      'Passport Copy (valid 2+ years)',
      'Academic Certificates with Apostille/Ministry Attestation',
      'Bank Statement & Affidavit',
      'Medical & Police Clearance'
    ],
    programs: [
      {
        category: 'Featured Academic Programs',
        duration: '3 - 4 Years',
        items: [
          'Health Studies & Nursing Sciences',
          'Culinary and Hospitality Management',
          'Journalism and Media Communications',
          'Business Administration & Marketing',
          'Environmental Studies & Sustainability'
        ]
      }
    ]
  },
  {
    id: 'latvia',
    name: 'Latvia',
    flag: '🇱🇻',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/lv.svg',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Schengen European Union Degrees',
    capital: 'Riga',
    badge: 'Schengen EU',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '4 - 6 Weeks',
    universitiesCount: 7,
    highlight: 'Age 18–30 • G.C.E. A/L with 3 C Passes • IELTS 5.5 • Full Schengen Access',
    visaTypes: ['Schengen Student Visa', 'Residence Permit', 'Visitor Visa'],
    entryRequirements: [
      'Age Limit: 18–30 years',
      'G.C.E. A/L with minimum 3 C Passes',
      'IELTS Academic overall band 5.5'
    ],
    keyBenefits: [
      'Full access to 27 Schengen European countries',
      'Affordable tuition fees from €2,500 - €3,800/year',
      'Post-study European job opportunities'
    ],
    mandatoryDocuments: [
      'Original Passport',
      'G.C.E. A/L Certificate and Transcripts',
      'IELTS Academic Test Report Form (5.5)',
      'Police Clearance Certificate & Bank Balance'
    ],
    programs: [
      {
        category: 'Bachelor & Master Degrees',
        duration: '3 - 4 Years',
        items: [
          'Business Management & International Economics',
          'Information Technology (IT)',
          'Tourism & Hospitality Management',
          'Software Engineering',
          'Psychology'
        ]
      }
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/in.svg',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Chennai Amirta Campus • Guaranteed Job Placements',
    capital: 'New Delhi / Chennai',
    badge: 'Official Representation',
    intake: 'Next Available Intake (Admissions Open)',
    processingTime: '10 - 20 Days',
    officialRole: 'Official Country Representative for Chennai Amirta Campus',
    universitiesCount: 16,
    highlight: 'Chennai Amirta Partner • Hospitality, Nursing & Aviation • Guaranteed Job Placements',
    visaTypes: ['Student Visa', 'Tourist E-Visa', 'Medical Visa'],
    partnerUniversities: ['Chennai Amirta Campus (Official Representative)'],
    entryRequirements: [
      'O/L or A/L qualification',
      'Passionate about hands-on professional careers',
      'No IELTS required'
    ],
    keyBenefits: [
      'Affordable fee structures and very low cost of living',
      'Built-in industry internships throughout the program',
      'Guaranteed after-program job placements with multinational hotel chains and airlines'
    ],
    mandatoryDocuments: [
      'Passport Copy',
      'Educational Certificates',
      'Passport Size Photographs'
    ],
    programs: [
      {
        category: 'Premier Streams at Chennai Amirta',
        duration: '1 - 3 Years',
        items: [
          'Hospitality & Hotel Management (Guaranteed Job Placements)',
          'Nursing & Allied Health Sciences',
          'Aviation, Cabin Crew & Airport Ground Operations'
        ]
      }
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/ch.svg',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
    popularFor: 'World-Renowned B.H.M.S. Hospitality & Business',
    capital: 'Bern / Lucerne',
    badge: 'Official Representation',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '4 - 8 Weeks',
    officialRole: 'Official Country Representative for Swiss B.H.M.S. (Lucerne)',
    universitiesCount: 5,
    highlight: 'Swiss B.H.M.S. Partner • Paid Swiss Internships (CHF 2,200+/mo) • Global Career Placement',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa'],
    partnerUniversities: ['Swiss B.H.M.S. (Business & Hotel Management School, Lucerne)'],
    entryRequirements: [
      'O/L or A/L completion',
      'IELTS 5.0 - 6.0 or B.H.M.S. English Test',
      'Passion for luxury hospitality and business leadership'
    ],
    keyBenefits: [
      '6 months study + 6 months guaranteed paid Swiss industry internship per year',
      'Earn Swiss Francs (CHF) during internship to support living and tuition',
      'Global network of top international hotel chains recruiting on campus'
    ],
    mandatoryDocuments: [
      'Valid Passport',
      'Academic Records & Resume',
      'Letter of Motivation',
      'Financial Proof of Funds'
    ],
    programs: [
      {
        category: 'Swiss B.H.M.S. Dual Degrees',
        duration: '1 - 3 Years',
        items: [
          'Diploma / BA in Hospitality & Hotel Management (with paid Swiss internships)',
          'Culinary Arts Diploma & Degree',
          'Global Business & MBA Programs'
        ]
      }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/ae.svg',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Fin Win Campus • Tax-Free Jobs & Tourism',
    capital: 'Abu Dhabi / Dubai',
    badge: 'Country Manager',
    intake: 'Next Available Intake (Fast Track Admissions)',
    processingTime: '3 - 7 Working Days',
    officialRole: 'Official Country Manager for Fin Win Campus (Dubai Knowledge Park)',
    universitiesCount: 18,
    highlight: 'Official Fin Win Campus Manager • Fast 5-Day Visa • Tax-Free Career Opportunities',
    visaTypes: ['Student Residence Visa', 'Tourist Visa (30/60 Days)', 'Employment Visa'],
    partnerUniversities: ['Fin Win Campus (Dubai Knowledge Park)'],
    entryRequirements: [
      'O/L, A/L, or Graduate Credentials',
      'No IELTS mandatory for direct diploma routes',
      'Fast-track documentation'
    ],
    keyBenefits: [
      'Study in Dubai Knowledge Park with campus transfer pathways to UK and Europe',
      'High-income tax-free employment market for part-time and graduate workers',
      'Express visa approvals within 3 to 7 working days'
    ],
    mandatoryDocuments: [
      'Passport Copy (color, minimum 6 months validity)',
      'Passport Size Photo (white background)',
      'Educational Certificates'
    ],
    programs: [
      {
        category: 'Fin Win Campus Direct Programs',
        duration: '1 - 3 Years',
        items: [
          'International Business & Logistics',
          'Information Technology & Cyber Systems',
          'Aviation & Tourism Operations',
          'Executive Management Diplomas'
        ]
      }
    ]
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/gb.svg',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Prestigious Russell Group & 2-Year Post Study Work',
    capital: 'London',
    badge: '2-Year PSW',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '3 - 5 Weeks',
    universitiesCount: 35,
    highlight: '2-Year Graduate Route (PSW) • Foundation, Bachelors & Masters • Fast-Track CAS',
    visaTypes: ['Student Route Visa', 'Standard Visitor Visa', 'Skilled Worker Visa'],
    entryRequirements: [
      'A/L with minimum C/S grades or recognized Foundation',
      'IELTS Academic / PTE or English medium waiver letter',
      '28-day maintenance funds in approved bank account'
    ],
    keyBenefits: [
      '2-Year Post-Study Work Visa (3 years for PhD graduates)',
      '20 hours per week part-time work rights during term time',
      'World-renowned degrees from top Russell Group and modern universities'
    ],
    mandatoryDocuments: [
      'Valid Passport',
      'Academic Transcripts and Degree Certificates',
      'English Language Test (IELTS/PTE/MOI)',
      '28-Day Bank Statement & Tuberculosis (TB) Test'
    ],
    programs: [
      {
        category: 'Undergraduate & Postgraduate Courses',
        duration: '1 - 3 Years',
        items: [
          'BSc & MSc Computer Science, AI & Cyber Security',
          'International Business, Finance & MBA',
          'Civil, Mechanical & Electronic Engineering',
          'Biomedical Sciences & Public Health'
        ]
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/ca.svg',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80',
    popularFor: 'PGWP Post-Study Work & Co-op Programs',
    capital: 'Ottawa',
    badge: 'Co-op & PGWP',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '6 - 10 Weeks',
    universitiesCount: 25,
    highlight: 'Up to 3-Year Post-Graduation Work Permit (PGWP) • Paid Co-op Internships',
    visaTypes: ['Study Permit', 'Visitor Visa', 'Super Visa'],
    entryRequirements: [
      'A/L or Bachelor Degree',
      'IELTS Academic 6.0 - 6.5 or PTE equivalent',
      'Proof of financial support / GIC'
    ],
    keyBenefits: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'Part-time off-campus work allowed during studies',
      'Clear pathway to Permanent Residency (PR)'
    ],
    mandatoryDocuments: [
      'Passport Copy',
      'Letter of Acceptance (LOA) from DLI Institution',
      'Financial Proof / GIC',
      'Upfront Medical & Police Clearance'
    ],
    programs: [
      {
        category: 'College Diplomas & University Degrees',
        duration: '2 - 4 Years',
        items: [
          'Data Analytics, Cloud Computing & IT',
          'Business Management, Accounting & Supply Chain',
          'Healthcare Administration & Practical Nursing',
          'Hospitality & Tourism Management'
        ]
      }
    ]
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/nz.svg',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Green List Careers & Post-Study Work',
    capital: 'Wellington',
    badge: 'Green List Careers',
    intake: 'Next Available Intake (Inquire on WhatsApp)',
    processingTime: '4 - 8 Weeks',
    universitiesCount: 14,
    highlight: 'Post-Study Work Rights • Green List In-Demand Roles • High Quality of Life',
    visaTypes: ['Student Visa', 'Visitor Visa', 'Post-Study Work Visa'],
    entryRequirements: [
      'A/L or Bachelor Degree completion',
      'IELTS Academic 6.0 (Undergraduate) / 6.5 (Postgraduate)',
      'Financial support and health check'
    ],
    keyBenefits: [
      'Green List pathways for fast-track residence in Engineering, IT & Healthcare',
      'Open work visa for spouses of Master degree students',
      'Safe, peaceful, and scenic environment'
    ],
    mandatoryDocuments: [
      'Passport',
      'Offer of Place from NZQA Institute',
      'Financial Funds / Bank Proof',
      'Full Medical & Chest X-Ray'
    ],
    programs: [
      {
        category: 'In-Demand Green List Programs',
        duration: '1 - 3 Years',
        items: [
          'Software Engineering & Cyber Security',
          'Construction Management & Civil Engineering',
          'Nursing & Public Health Sciences',
          'Agribusiness & Environmental Science'
        ]
      }
    ]
  },
  {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/mt.svg',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=600&q=80',
    popularFor: 'English-Speaking European Hub & Schengen Living',
    capital: 'Valletta',
    badge: 'Schengen EU',
    intake: 'Rolling Intakes Available',
    processingTime: '4 - 6 Weeks',
    universitiesCount: 6,
    highlight: '100% English Speaking EU Nation • Schengen Visa • Affordable European Education',
    visaTypes: ['Schengen Student Visa', 'Tourist Visa', 'Work Permit'],
    entryRequirements: [
      'O/L or A/L Certificate',
      'Basic English proficiency test or waiver',
      'Financial maintenance proof'
    ],
    keyBenefits: [
      'English is an official national language across Malta',
      'Part-time work permitted after 90 days of study',
      'Visa provides travel access across 27 Schengen nations'
    ],
    mandatoryDocuments: [
      'Passport (valid 1.5 years)',
      'School Certificates & Police Report',
      'Medical Insurance & Bank Statement'
    ],
    programs: [
      {
        category: 'Business & Technology Streams',
        duration: '1 - 3 Years',
        items: [
          'Hospitality & Tourism Management',
          'International Business & Management',
          'Information Technology & Software Development'
        ]
      }
    ]
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    flag: '🇲🇺',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/mu.svg',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    popularFor: 'Affordable UK & French Branch Campuses',
    capital: 'Port Louis',
    badge: 'Visa Friendly',
    intake: 'Multiple Rolling Intakes',
    processingTime: '2 - 4 Weeks',
    universitiesCount: 6,
    highlight: 'Hassle-Free Visa Processing • Affordable Living • UK/French Affiliated Degrees',
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa'],
    entryRequirements: [
      'O/L or A/L Pass',
      'Simple documentation',
      'No IELTS mandatory'
    ],
    keyBenefits: [
      'Fast, student-friendly visa process with zero complicated financial hurdles',
      'Branch campuses of top UK and European institutions',
      'Tropical island lifestyle with safe, modern infrastructure'
    ],
    mandatoryDocuments: [
      'Passport Copy',
      'Educational Certificates',
      'Medical Test Report',
      'Application Form'
    ],
    programs: [
      {
        category: 'Island Campus Programs',
        duration: '2 - 3 Years',
        items: [
          'Hospitality & Resort Management',
          'International Business & Finance',
          'Computer Science & Applied IT'
        ]
      }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/th.svg',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=85',
    popularFor: 'Fast E-Visas, Tourism & International Degrees',
    capital: 'Bangkok',
    badge: 'Express E-Visa',
    intake: 'Rolling Intakes Available',
    processingTime: '3 - 7 Working Days',
    universitiesCount: 8,
    highlight: 'Fast E-Visa Approvals • International Campuses • Affordable Cost of Living',
    visaTypes: ['Tourist E-Visa', 'Education (ED) Visa', 'Business Visa'],
    entryRequirements: ['Passport Copy (6+ months)', 'Flight & Accommodation details for tourists'],
    keyBenefits: ['Lightning-fast tourist e-visa turnaround', 'Great hospitality courses', 'Low expenses'],
    mandatoryDocuments: ['Passport', 'Photo', 'Bank Statement'],
    programs: [
      {
        category: 'International Education',
        duration: '1 - 4 Years',
        items: ['International Hotel & Tourism Management', 'Asian Business Studies', 'Language Bridging']
      }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    flagUrl: 'https://hatscripts.github.io/circle-flags/flags/vn.svg',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85',
    popularFor: 'Fast E-Visas, Emerging Business & Tourism',
    capital: 'Hanoi',
    badge: 'Express E-Visa',
    intake: 'Continuous Year-Round',
    processingTime: '3 - 5 Working Days',
    universitiesCount: 6,
    highlight: 'Fast Tourist & Business E-Visas • Emerging Study & Tech Hub • Budget Friendly',
    visaTypes: ['Tourist E-Visa', 'Business Visa', 'Student Visa'],
    entryRequirements: ['Passport (6+ months)', 'Photo and itinerary'],
    keyBenefits: ['Economical travel and rapid e-visa issuance', 'Emerging career opportunities'],
    mandatoryDocuments: ['Passport', 'Photo'],
    programs: [
      {
        category: 'Programs Offered',
        duration: '1 - 3 Years',
        items: ['International Business', 'English Language Teaching (TEFL)', 'Information Technology']
      }
    ]
  },
  {
    id: 'other-destination',
    name: "Other / Haven't Decided Yet",
    flag: '🌍',
    flagUrl: '',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    popularFor: 'Free 1-on-1 Profile Assessment & Matching',
    capital: 'Global Pathways',
    badge: 'Smart Matcher',
    intake: 'All Semester Intakes Open',
    processingTime: 'Instant 1-on-1 Matching',
    directPayment: false,
    officialRole: 'Free Personalized Education Counseling by Senior Advisors',
    universitiesCount: 120,
    highlight: "Haven't decided on a country yet? We evaluate your budget, O/Ls, A/Ls, and career goals to match you with top universities.",
    visaTypes: ['Student Visa', 'Tourist Visa', 'Business Visa', 'Internship Program'],
    partnerUniversities: [
      '50+ Partner Institutions in Europe, Asia, UK, Canada & Middle East',
      'Direct Country Manager Admissions & Representation'
    ],
    entryRequirements: [
      'O/L or A/L Transcripts (Any Academic Stream)',
      'Budget & career preference details',
      'No IELTS pathways available',
      'Direct university admissions support'
    ],
    keyBenefits: [
      'Custom academic matching tailored to your specific financial budget and grades',
      'Options with and without IELTS, and with zero or minimal show money',
      'Direct university fee payment options available for Russia, Malaysia, and Singapore',
      'Free 1-on-1 counseling with senior education advisors over WhatsApp or in Colombo & Battaramulla'
    ],
    mandatoryDocuments: [
      'O/L or A/L Results Sheets / Transcripts',
      'Valid Passport Copy (or National ID Card)',
      'Academic CV / Resume (for Masters, Transfer or Internship)'
    ],
    programs: [
      {
        category: 'Entry with O/Ls (Foundation & Diplomas)',
        duration: '1 - 3 Years',
        items: ['Fast-track UK & Australian Diplomas in Malaysia, Singapore & Dubai with direct degree progression']
      },
      {
        category: 'Without IELTS & Low Show Money',
        duration: '1 - 4 Years',
        items: ['Affordable European & Asian degrees in Russia, Belarus, Malaysia & Dubai with English-medium waiver letters']
      },
      {
        category: 'Medical & Healthcare Degrees (M.B.B.S)',
        duration: '5 - 6 Years',
        items: ['M.B.B.S, Dentistry & Nursing in Russia, Belarus & India with direct university admissions and pay-on-arrival']
      },
      {
        category: 'Post-Study Work Permits & PR Pathways',
        duration: '2 - 4 Years',
        items: ['UK (2-Yr PSW), Canada (3-Yr PGWP), New Zealand (Green List), and Latvia (Schengen Area)']
      },
      {
        category: 'Paid Hospitality Hotel Internships',
        duration: '12 Months',
        items: ['Earn USD 700 - USD 900 / month at 5★ & 6★ luxury hotels in Taiwan or CHF 2,200+ in Switzerland']
      }
    ]
  }
];

export const UNIVERSITY_PARTNERS: UniversityPartner[] = [
  {
    id: 'moscow-ling',
    name: 'Moscow Linguistic University',
    subtitle: 'Official Country Manager',
    campus: 'Leading State Linguistic & Pedagogical University',
    location: 'Moscow, Russia',
    logoText: 'MSLU',
    logoBadge: 'Country Manager',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqywag-pDnqezZLyF5yLmY6iy_aO_eirU6eOEAh7g5_W_rYtKUr8_7wU&s=10',
    type: 'State University',
    officialRole: 'Official Country Manager',
    country: 'Russia',
    intake: 'Fall & Spring Intakes',
    highlights: [
      'Official direct administrative representation by Noble Visa Centre',
      'Pay tuition directly to the university after arrival in Moscow',
      'Foreign Languages, Pedagogical Education, HR & Logistics Degrees'
    ],
    directPayment: true
  },
  {
    id: 'moscow-pushkin',
    name: 'Moscow Pushkin University',
    subtitle: 'Official Country Manager',
    campus: 'Premier Russian State Academic Institution',
    location: 'Moscow, Russia',
    logoText: 'PUSHKIN',
    logoBadge: 'Country Manager',
    logoUrl: 'https://www.pushkin.institute/wp-content/themes/neve/assets/img/pushkin_logo_hdr_en.svg',
    type: 'State University',
    officialRole: 'Official Country Manager',
    country: 'Russia',
    intake: 'Fall & Spring Intakes',
    highlights: [
      'Official Country Manager representation in Sri Lanka',
      '4-Year Bachelor degrees in Economics, Finance, Information Systems & Teaching',
      'Direct university fee payments with zero local middlemen charges'
    ],
    directPayment: true
  },
  {
    id: 'amrita',
    name: 'Chennai Amirta Campus',
    subtitle: 'Official Country Representative',
    campus: 'Leading Professional Academy for Hospitality & Aviation',
    location: 'Chennai, India',
    logoText: 'AMIRTA',
    logoBadge: 'Guaranteed Jobs',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcJ0NnQPfKI2Uibi7bvrSgrJJVaUtvwZKbmCfdC5dXg&s=10',
    type: 'Top Ranked Academy',
    officialRole: 'Official Country Representative',
    country: 'India',
    intake: 'Admissions Open',
    highlights: [
      'Official Country Representative in Sri Lanka',
      'Hospitality, Nursing and Aviation programs',
      'Affordable fees, built-in internships, and guaranteed after-program job placements'
    ]
  },
  {
    id: 'bhms',
    name: 'Swiss B.H.M.S.',
    subtitle: 'Business & Hotel Management School',
    campus: 'World-Renowned Swiss Hospitality & Culinary Academy',
    location: 'Lucerne, Switzerland',
    logoText: 'B.H.M.S.',
    logoBadge: 'Switzerland',
    logoUrl: 'https://images.seeklogo.com/logo-png/26/1/b-h-m-s-business-hotel-management-school-logo-png_seeklogo-267432.png',
    type: 'Swiss Hospitality Leader',
    officialRole: 'Official Country Representative',
    country: 'Switzerland',
    intake: 'Multiple Rolling Intakes',
    highlights: [
      'Official Country Representative for Sri Lanka',
      '6 Months Study + 6 Months Paid Swiss Industry Internship (Earn CHF 2,200+/mo)',
      'Dual Swiss and UK recognized degrees with global career placements'
    ]
  },
  {
    id: 'finwin',
    name: 'Fin Win Campus',
    subtitle: 'Dubai Knowledge Park',
    campus: 'Direct Pathway Higher Education Campus',
    location: 'Dubai Knowledge Park, UAE',
    logoText: 'FIN WIN',
    logoBadge: 'Country Manager',
    logoUrl: 'https://www.finwin.education/medias/contact_page/big/16/campus-logo-landscape.png',
    type: 'Direct Pathway Campus',
    officialRole: 'Official Country Manager',
    country: 'Dubai (UAE)',
    intake: 'Year-Round Admissions',
    highlights: [
      'Official Country Manager in Sri Lanka',
      'Direct bachelor & executive diploma pathways in Dubai Knowledge Park',
      'Fast 5-day visa issuance and direct access to Dubai tax-free job market'
    ]
  },
  {
    id: 'omnis',
    name: 'Omnis International University',
    subtitle: 'Partner University',
    campus: 'Comprehensive Higher Education & Medical Programs',
    location: 'Russia',
    logoText: 'OMNIS',
    logoBadge: 'Russia Partner',
    type: 'International University',
    officialRole: 'Official Partner',
    country: 'Russia',
    intake: 'Fall & Spring Intakes',
    highlights: [
      'Comprehensive M.B.B.S (Medical Degree) and Technology programs',
      'Direct tuition payment after arrival in Russia',
      'Processing time: 45 Days'
    ],
    directPayment: true
  },
  {
    id: 'bsu-languages',
    name: 'Belarusian State University of Foreign Languages',
    subtitle: 'Partner University',
    campus: 'Premier State Multilingual Academy',
    location: 'Minsk, Belarus',
    logoText: 'BSU-FL',
    logoBadge: 'Belarus State',
    type: 'State University',
    officialRole: 'Official Partner',
    country: 'Belarus',
    intake: 'Rolling Intakes',
    highlights: [
      'Admissions in 7–10 days, visa invitation in 30 days',
      'Foreign Language teaching, translation, and international communication',
      'Affordable European quality education'
    ]
  },
  {
    id: 'bsuir',
    name: 'Belarusian State University of Informatics and Radioelectronics',
    subtitle: 'BSUIR State University',
    campus: 'Leading IT, Electronics & Robotics Engineering University',
    location: 'Minsk, Belarus',
    logoText: 'BSUIR',
    logoBadge: 'Tech Leader',
    type: 'State Tech University',
    officialRole: 'Official Partner',
    country: 'Belarus',
    intake: 'Rolling Intakes',
    highlights: [
      'Top-ranked in Eastern Europe for software engineering, telecom & cybernetics',
      'Fast 7–10 day admission decision',
      'High global employability in IT and engineering sectors'
    ]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Rashmi Mendis',
    visaType: 'Student Visa Approved',
    country: 'Russia',
    countryCode: 'ru',
    flag: '🇷🇺',
    category: 'russia-belarus',
    badge: 'Official University Manager',
    university: 'Moscow Linguistic University',
    intake: 'Bachelor of International Education',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339668/WhatsApp_Image_2026-09-02_at_14.25.15_3.jpg',
    quote: 'Direct tuition payment in Moscow after arrival provided total peace of mind for our family.'
  },
  {
    id: '2',
    name: 'Dineth Perera',
    visaType: 'EMGS Student Pass Approved',
    country: 'Malaysia',
    countryCode: 'my',
    flag: '🇲🇾',
    category: 'malaysia-singapore',
    badge: 'EMGS Fast-Track',
    university: 'Kuala Lumpur Premier Campus',
    intake: 'Diploma in Logistics & Supply Chain',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339659/WhatsApp_Image_2026-09-02_at_14.25.16.jpg',
    quote: 'Fast EMGS student pass approval within 3 weeks with O/L entry qualification.'
  },
  {
    id: '3',
    name: 'Shanika Jayasinghe',
    visaType: 'Paid Hospitality Internship',
    country: 'Taiwan',
    countryCode: 'tw',
    flag: '🇹🇼',
    category: 'taiwan',
    badge: 'Earn USD 900+/Month',
    university: '5-Star Luxury Resort Placement',
    intake: '12-Month Hotel Training & Placement',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339648/WhatsApp_Image_2026-09-02_at_14.25.16_1.jpg',
    quote: '12-month paid hotel internship in Taiwan with duty meals and free accommodation.'
  },
  {
    id: '4',
    name: 'Charith Wickramasinghe',
    visaType: 'Tech Student Visa Approved',
    country: 'Belarus',
    countryCode: 'by',
    flag: '🇧🇾',
    category: 'russia-belarus',
    badge: '7-Day Fast Admission',
    university: 'BSUIR State Tech University, Minsk',
    intake: 'BSc Software Engineering & Cybernetics',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339639/WhatsApp_Image_2026-09-02_at_14.25.17.jpg',
    quote: 'State University admission invitation in 7 days without IELTS requirement.'
  },
  {
    id: '5',
    name: 'Sanduni Alwis',
    visaType: 'Tier 4 Student Visa (2-Yr PSW)',
    country: 'UK',
    countryCode: 'gb',
    flag: '🇬🇧',
    category: 'uk-europe',
    badge: '2-Yr Post-Study Work Rights',
    university: 'Russell Group Partner Campus (London)',
    intake: 'MSc International Business Management',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339625/WhatsApp_Image_2026-09-02_at_14.25.17_1.jpg',
    quote: 'Smooth CAS issuance and full visa documentation assistance for London study.'
  },
  {
    id: '6',
    name: 'Mohamed Fazeel',
    visaType: 'MBBS Medical Student Visa',
    country: 'Russia',
    countryCode: 'ru',
    flag: '🇷🇺',
    category: 'russia-belarus',
    badge: 'MBBS Medical Scholar',
    university: 'Pushkin & State Medical Partner',
    intake: '6-Year M.B.B.S. Medical Degree',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339616/WhatsApp_Image_2026-09-02_at_14.25.18.jpg',
    quote: 'Direct administrative representation and direct fee payment after arrival in Russia.'
  },
  {
    id: '7',
    name: 'Anjali Senanayake',
    visaType: 'Swiss Student & Internship Visa',
    country: 'Switzerland',
    countryCode: 'ch',
    flag: '🇨🇭',
    category: 'uk-europe',
    badge: 'CHF 2,200+/Month Paid Internship',
    university: 'Swiss B.H.M.S. (Lucerne)',
    intake: 'Hospitality & Business Degree',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339610/WhatsApp_Image_2026-09-02_at_14.25.18_1.jpg',
    quote: '6 months classroom study + 6 months guaranteed paid Swiss hotel internship.'
  },
  {
    id: '8',
    name: 'Medical & Tech Student Batch',
    visaType: 'Group Batch Visas Approved',
    country: 'Russia & Belarus',
    countryCode: 'ru',
    flag: '🌍',
    category: 'russia-belarus',
    badge: '100% Batch Approval',
    university: 'Group Admissions & University Transfers',
    intake: 'Medical, Tech & Language Batches',
    image: 'https://res.cloudinary.com/fivl3klo/image/upload/v1788339603/WhatsApp_Image_2026-09-02_at_14.25.18_2.jpg',
    quote: 'Complete pre-departure guidance and airport send-off for the entire student batch.'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Building2',
    title: 'Official Country Management',
    description: 'Official Country Manager for Moscow Linguistic & Pushkin Universities, Fin Win Dubai, Swiss B.H.M.S. & Chennai Amirta.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Direct University Fee Payment',
    description: 'No middlemen, no local payments in Sri Lanka required; pay tuition directly to universities in Russia, Malaysia & Singapore after arrival.'
  },
  {
    icon: 'Globe2',
    title: '17+ Global Destinations',
    description: 'Russia, Belarus, Malaysia, Singapore, Taiwan, Cyprus, Latvia, India, Switzerland, UK, Canada, New Zealand, Dubai & more.'
  },
  {
    icon: 'Award',
    title: 'Flexible & Open Entry Options',
    description: 'Programs without IELTS, O/L entry routes, without show money options, and 12-month paid luxury hotel internships in Taiwan.'
  },
  {
    icon: 'FileCheck',
    title: 'Fast & Transparent Processing',
    description: 'Clear documentation, express 7-10 day admissions in Belarus, 45-day processing in Russia, and fast e-visas.'
  },
  {
    icon: 'UserCheck',
    title: 'Proven Track Record Since 2009',
    description: 'Thousands of successful student visas and travellers. Rated 5.0★ on Google with 70+ authentic verified reviews.'
  }
];

