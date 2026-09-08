export interface GlobalUniversityItem {
  name: string;
  country: string;
  alpha_two_code: string;
  web_pages: string[];
  domains: string[];
  'state-province'?: string | null;
  popularFields?: string[];
  city?: string;
  type?: 'Public / State' | 'Private / Autonomous' | 'Specialized Institute';
}

export const GLOBAL_UNIVERSITIES_DATA: GlobalUniversityItem[] = [
  // ═══ UNITED KINGDOM ═══
  {
    name: 'University of Oxford',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.ox.ac.uk/'],
    domains: ['ox.ac.uk'],
    'state-province': 'Oxfordshire',
    city: 'Oxford',
    type: 'Public / State',
    popularFields: ['Medicine', 'Law', 'Humanities', 'Science & Engineering']
  },
  {
    name: 'University of Cambridge',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.cam.ac.uk/'],
    domains: ['cam.ac.uk'],
    'state-province': 'Cambridgeshire',
    city: 'Cambridge',
    type: 'Public / State',
    popularFields: ['Computer Science', 'Natural Sciences', 'Engineering', 'Economics']
  },
  {
    name: 'Imperial College London',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.imperial.ac.uk/'],
    domains: ['imperial.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Engineering', 'Data Science & AI', 'Medicine', 'Business Analytics']
  },
  {
    name: 'University College London (UCL)',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.ucl.ac.uk/'],
    domains: ['ucl.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Architecture', 'Law', 'Life Sciences', 'Management']
  },
  {
    name: 'London School of Economics and Political Science (LSE)',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.lse.ac.uk/'],
    domains: ['lse.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Finance', 'Economics', 'International Relations', 'Politics']
  },
  {
    name: "King's College London",
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.kcl.ac.uk/'],
    domains: ['kcl.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Nursing & Healthcare', 'Law', 'Psychiatry', 'Business']
  },
  {
    name: 'University of Edinburgh',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.ed.ac.uk/'],
    domains: ['ed.ac.uk'],
    'state-province': 'Scotland',
    city: 'Edinburgh',
    type: 'Public / State',
    popularFields: ['Informatics & AI', 'Veterinary Medicine', 'Linguistics']
  },
  {
    name: 'University of Manchester',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.manchester.ac.uk/'],
    domains: ['manchester.ac.uk'],
    'state-province': 'Greater Manchester',
    city: 'Manchester',
    type: 'Public / State',
    popularFields: ['Material Science', 'Chemical Engineering', 'MBA & Business']
  },
  {
    name: 'University of Warwick',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://warwick.ac.uk/'],
    domains: ['warwick.ac.uk'],
    'state-province': 'West Midlands',
    city: 'Coventry',
    type: 'Public / State',
    popularFields: ['Warwick Business School (WBS)', 'Manufacturing', 'Cyber Security']
  },
  {
    name: 'Coventry University',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.coventry.ac.uk/'],
    domains: ['coventry.ac.uk'],
    'state-province': 'West Midlands & London',
    city: 'Coventry / London',
    type: 'Public / State',
    popularFields: ['Automotive Engineering', 'Business Management', 'Hospitality', 'IT']
  },
  {
    name: 'University of Birmingham',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.birmingham.ac.uk/'],
    domains: ['birmingham.ac.uk'],
    'state-province': 'West Midlands',
    city: 'Birmingham',
    type: 'Public / State',
    popularFields: ['Mechanical Engineering', 'Dentistry', 'Law', 'Finance']
  },
  {
    name: 'University of Bristol',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.bristol.ac.uk/'],
    domains: ['bristol.ac.uk'],
    'state-province': 'South West England',
    city: 'Bristol',
    type: 'Public / State',
    popularFields: ['Aerospace Engineering', 'Biomedical Science', 'Computer Systems']
  },
  {
    name: 'University of Leeds',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.leeds.ac.uk/'],
    domains: ['leeds.ac.uk'],
    'state-province': 'West Yorkshire',
    city: 'Leeds',
    type: 'Public / State',
    popularFields: ['Communication & Media', 'Business Analytics', 'Sustainability']
  },
  {
    name: 'University of Sheffield',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.sheffield.ac.uk/'],
    domains: ['sheffield.ac.uk'],
    'state-province': 'South Yorkshire',
    city: 'Sheffield',
    type: 'Public / State',
    popularFields: ['Robotics', 'Civil Engineering', 'Architecture', 'Urban Studies']
  },
  {
    name: 'University of Nottingham',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.nottingham.ac.uk/'],
    domains: ['nottingham.ac.uk'],
    'state-province': 'Nottinghamshire',
    city: 'Nottingham',
    type: 'Public / State',
    popularFields: ['Pharmacy', 'Veterinary Science', 'Agronomy', 'Business Management']
  },
  {
    name: 'Queen Mary University of London',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.qmul.ac.uk/'],
    domains: ['qmul.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Medicine & Dentistry', 'Commercial Law', 'Digital Marketing']
  },
  {
    name: 'University of Southampton',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.southampton.ac.uk/'],
    domains: ['southampton.ac.uk'],
    'state-province': 'Hampshire',
    city: 'Southampton',
    type: 'Public / State',
    popularFields: ['Maritime Science', 'Electronics & ECS', 'Oceanography']
  },
  {
    name: 'Cardiff University',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.cardiff.ac.uk/'],
    domains: ['cardiff.ac.uk'],
    'state-province': 'Wales',
    city: 'Cardiff',
    type: 'Public / State',
    popularFields: ['Journalism', 'Healthcare Sciences', 'Optometry', 'Business']
  },
  {
    name: 'University of Glasgow',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.gla.ac.uk/'],
    domains: ['gla.ac.uk'],
    'state-province': 'Scotland',
    city: 'Glasgow',
    type: 'Public / State',
    popularFields: ['Engineering', 'Medical Sciences', 'Law', 'Adam Smith Business School']
  },
  {
    name: 'University of Hertfordshire',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.herts.ac.uk/'],
    domains: ['herts.ac.uk'],
    'state-province': 'Hertfordshire',
    city: 'Hatfield',
    type: 'Public / State',
    popularFields: ['Aviation & Pilot Studies', 'Computer Animation', 'Business', 'Nursing']
  },
  {
    name: 'University of Greenwich',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.gre.ac.uk/'],
    domains: ['gre.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Logistics & Supply Chain', 'Computing & AI', 'Architecture', 'Finance']
  },
  {
    name: 'Middlesex University London',
    country: 'United Kingdom',
    alpha_two_code: 'GB',
    web_pages: ['https://www.mdx.ac.uk/'],
    domains: ['mdx.ac.uk'],
    'state-province': 'Greater London',
    city: 'London',
    type: 'Public / State',
    popularFields: ['Business Administration', 'Information Systems', 'Nursing']
  },

  // ═══ RUSSIAN FEDERATION ═══
  {
    name: 'Moscow State Linguistic University (MSLU)',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://linguanet.ru/'],
    domains: ['linguanet.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['MBBS & Medicine', 'Foreign Languages & Translation', 'International Relations', 'IT Systems']
  },
  {
    name: 'Pushkin State Russian Language Institute',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://www.pushkin.institute/'],
    domains: ['pushkin.institute'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['Applied Linguistics', 'Russian for Foreigners', 'International Pedagogy', 'Economics']
  },
  {
    name: 'Omnis International University Moscow',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://omnis.edu.ru/'],
    domains: ['omnis.edu.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Specialized Institute',
    popularFields: ['MBBS (General Medicine)', 'Dental Surgery', 'International Business']
  },
  {
    name: 'Lomonosov Moscow State University (MSU)',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://www.msu.ru/en/'],
    domains: ['msu.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['Physics & Mathematics', 'Fundamental Medicine', 'Chemistry', 'Geology']
  },
  {
    name: 'Saint Petersburg State University (SPbU)',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://english.spbu.ru/'],
    domains: ['spbu.ru'],
    'state-province': 'Saint Petersburg',
    city: 'Saint Petersburg',
    type: 'Public / State',
    popularFields: ['Software Engineering', 'Law', 'Oriental Studies', 'Management']
  },
  {
    name: 'Sechenov First Moscow State Medical University',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://www.sechenov.ru/eng/'],
    domains: ['sechenov.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['General Medicine (MBBS)', 'Dentistry', 'Pharmacy', 'Biotechnology']
  },
  {
    name: 'Pirogov Russian National Research Medical University (RNRMU)',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://rsmu.ru/'],
    domains: ['rsmu.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['Pediatrics', 'General Medicine', 'Clinical Psychology', 'Biophysics']
  },
  {
    name: 'Peoples’ Friendship University of Russia (RUDN)',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://eng.rudn.ru/'],
    domains: ['rudn.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['International Medicine', 'Engineering', 'Agronomy', 'Law']
  },
  {
    name: 'Bauman Moscow State Technical University',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://bmstu.ru/en/'],
    domains: ['bmstu.ru'],
    'state-province': 'Moscow',
    city: 'Moscow',
    type: 'Public / State',
    popularFields: ['Rocketry & Space Systems', 'Robotics & Mechatronics', 'Computer Systems', 'Nuclear Engineering']
  },
  {
    name: 'Kazan Federal University',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://kpfu.ru/eng/'],
    domains: ['kpfu.ru'],
    'state-province': 'Tatarstan',
    city: 'Kazan',
    type: 'Public / State',
    popularFields: ['Petroleum Engineering', 'General Medicine', 'IT & Computer Science']
  },
  {
    name: 'Novosibirsk State University',
    country: 'Russian Federation',
    alpha_two_code: 'RU',
    web_pages: ['https://english.nsu.ru/'],
    domains: ['nsu.ru'],
    'state-province': 'Novosibirsk',
    city: 'Novosibirsk',
    type: 'Public / State',
    popularFields: ['Theoretical Physics', 'Cybernetics', 'Data Science', 'Biochemistry']
  },

  // ═══ BELARUS ═══
  {
    name: 'Belarusian State University of Informatics and Radioelectronics (BSUIR)',
    country: 'Belarus',
    alpha_two_code: 'BY',
    web_pages: ['https://www.bsuir.by/en/'],
    domains: ['bsuir.by'],
    'state-province': 'Minsk',
    city: 'Minsk',
    type: 'Public / State',
    popularFields: ['Software Engineering & AI', 'Cyber Security', 'Telecom', 'Robotics']
  },
  {
    name: 'Minsk State Linguistic University (MSLU Belarus / BSU-FL)',
    country: 'Belarus',
    alpha_two_code: 'BY',
    web_pages: ['https://mslu.by/en/'],
    domains: ['mslu.by'],
    'state-province': 'Minsk',
    city: 'Minsk',
    type: 'Public / State',
    popularFields: ['Foreign Languages Teaching', 'Simultaneous Translation', 'Intercultural Communication']
  },
  {
    name: 'Belarusian State Medical University (BSMU)',
    country: 'Belarus',
    alpha_two_code: 'BY',
    web_pages: ['https://www.bsmu.by/'],
    domains: ['bsmu.by'],
    'state-province': 'Minsk',
    city: 'Minsk',
    type: 'Public / State',
    popularFields: ['General Medicine (MBBS)', 'Dentistry', 'Preventive Medicine']
  },
  {
    name: 'Belarusian State University (BSU)',
    country: 'Belarus',
    alpha_two_code: 'BY',
    web_pages: ['https://bsu.by/en/'],
    domains: ['bsu.by'],
    'state-province': 'Minsk',
    city: 'Minsk',
    type: 'Public / State',
    popularFields: ['International Law', 'Applied Mathematics', 'Economics', 'Journalism']
  },
  {
    name: 'Belarusian National Technical University (BNTU)',
    country: 'Belarus',
    alpha_two_code: 'BY',
    web_pages: ['https://bntu.by/en/'],
    domains: ['bntu.by'],
    'state-province': 'Minsk',
    city: 'Minsk',
    type: 'Public / State',
    popularFields: ['Civil Engineering', 'Automotive Transport', 'Power Engineering', 'Architecture']
  },

  // ═══ MALAYSIA ═══
  {
    name: 'City University Malaysia',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.city.edu.my/'],
    domains: ['city.edu.my'],
    'state-province': 'Selangor / Kuala Lumpur',
    city: 'Petaling Jaya',
    type: 'Private / Autonomous',
    popularFields: ['Logistics & Supply Chain', 'Computer Science & Cyber Security', 'Business Management', 'Graphic Design']
  },
  {
    name: 'Universiti Malaya (UM)',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.um.edu.my/'],
    domains: ['um.edu.my'],
    'state-province': 'Kuala Lumpur',
    city: 'Kuala Lumpur',
    type: 'Public / State',
    popularFields: ['Engineering', 'Medicine', 'Economics & Administration', 'Education']
  },
  {
    name: 'Universiti Teknologi Malaysia (UTM)',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.utm.my/'],
    domains: ['utm.my'],
    'state-province': 'Johor',
    city: 'Skudai',
    type: 'Public / State',
    popularFields: ['Mechanical Engineering', 'Petroleum Engineering', 'Software Architecture', 'Built Environment']
  },
  {
    name: 'Universiti Putra Malaysia (UPM)',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.upm.edu.my/'],
    domains: ['upm.edu.my'],
    'state-province': 'Selangor',
    city: 'Serdang',
    type: 'Public / State',
    popularFields: ['Agriculture & Forestry', 'Veterinary Medicine', 'Biotechnology', 'Food Studies']
  },
  {
    name: 'Taylor’s University',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://university.taylors.edu.my/'],
    domains: ['taylors.edu.my'],
    'state-province': 'Selangor',
    city: 'Subang Jaya',
    type: 'Private / Autonomous',
    popularFields: ['Hospitality & Leisure Management', 'Culinary Arts', 'Business & Law', 'Design']
  },
  {
    name: 'Sunway University',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://sunwayuniversity.edu.my/'],
    domains: ['sunway.edu.my'],
    'state-province': 'Selangor',
    city: 'Bandar Sunway',
    type: 'Private / Autonomous',
    popularFields: ['Accounting & Finance (Lancaster Dual Degree)', 'Actuarial Science', 'IT & Computer Science']
  },
  {
    name: 'Asia Pacific University of Technology & Innovation (APU)',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.apu.edu.my/'],
    domains: ['apu.edu.my'],
    'state-province': 'Kuala Lumpur',
    city: 'Kuala Lumpur',
    type: 'Private / Autonomous',
    popularFields: ['Cyber Security', 'AI & Machine Learning', 'Game Development', 'Fintech']
  },
  {
    name: 'UCSI University',
    country: 'Malaysia',
    alpha_two_code: 'MY',
    web_pages: ['https://www.ucsiuniversity.edu.my/'],
    domains: ['ucsiuniversity.edu.my'],
    'state-province': 'Kuala Lumpur',
    city: 'Cheras',
    type: 'Private / Autonomous',
    popularFields: ['Performing Arts & Music', 'Pharmacy', 'Petroleum Engineering', 'Architecture']
  },

  // ═══ SINGAPORE ═══
  {
    name: 'PSB Academy Singapore',
    country: 'Singapore',
    alpha_two_code: 'SG',
    web_pages: ['https://www.psb-academy.edu.sg/'],
    domains: ['psb-academy.edu.sg'],
    'state-province': 'Central Region',
    city: 'Singapore',
    type: 'Private / Autonomous',
    popularFields: ['Hospitality with Paid 6-Mo OJT', 'Coventry University UK Degrees', 'Computer Science', 'Business Analytics']
  },
  {
    name: 'National University of Singapore (NUS)',
    country: 'Singapore',
    alpha_two_code: 'SG',
    web_pages: ['https://www.nus.edu.sg/'],
    domains: ['nus.edu.sg'],
    'state-province': 'Central Region',
    city: 'Singapore',
    type: 'Public / State',
    popularFields: ['Computer Science', 'Civil Engineering', 'Business School', 'Yong Loo Lin School of Medicine']
  },
  {
    name: 'Nanyang Technological University (NTU)',
    country: 'Singapore',
    alpha_two_code: 'SG',
    web_pages: ['https://www.ntu.edu.sg/'],
    domains: ['ntu.edu.sg'],
    'state-province': 'Western Region',
    city: 'Singapore',
    type: 'Public / State',
    popularFields: ['Materials Science', 'Electrical & Electronic Engineering', 'Nanyang Business School']
  },
  {
    name: 'Singapore Management University (SMU)',
    country: 'Singapore',
    alpha_two_code: 'SG',
    web_pages: ['https://www.smu.edu.sg/'],
    domains: ['smu.edu.sg'],
    'state-province': 'Central Region',
    city: 'Singapore',
    type: 'Public / State',
    popularFields: ['Accounting & Finance', 'Business Management', 'Information Systems', 'Law']
  },
  {
    name: 'Kaplan Higher Education Academy Singapore',
    country: 'Singapore',
    alpha_two_code: 'SG',
    web_pages: ['https://www.kaplan.com.sg/'],
    domains: ['kaplan.com.sg'],
    'state-province': 'Central Region',
    city: 'Singapore',
    type: 'Private / Autonomous',
    popularFields: ['Murdoch University Pathways', 'Hospitality & Tourism', 'Accounting', 'Digital Media']
  },

  // ═══ SWITZERLAND ═══
  {
    name: 'B.H.M.S. Business & Hotel Management School Lucerne',
    country: 'Switzerland',
    alpha_two_code: 'CH',
    web_pages: ['https://www.bhms.ch/'],
    domains: ['bhms.ch'],
    'state-province': 'Lucerne',
    city: 'Lucerne',
    type: 'Specialized Institute',
    popularFields: ['6 Mo Study + 6 Mo Guaranteed Paid Swiss Internship (CHF 2,200+/mo)', 'Dual Swiss & UK Degrees', 'Culinary Arts']
  },
  {
    name: 'ETH Zurich (Swiss Federal Institute of Technology)',
    country: 'Switzerland',
    alpha_two_code: 'CH',
    web_pages: ['https://ethz.ch/en.html'],
    domains: ['ethz.ch'],
    'state-province': 'Zurich',
    city: 'Zurich',
    type: 'Public / State',
    popularFields: ['Mechanical Engineering', 'Architecture', 'Computer Science', 'Earth Sciences']
  },
  {
    name: 'EPFL (École Polytechnique Fédérale de Lausanne)',
    country: 'Switzerland',
    alpha_two_code: 'CH',
    web_pages: ['https://www.epfl.ch/en/'],
    domains: ['epfl.ch'],
    'state-province': 'Vaud',
    city: 'Lausanne',
    type: 'Public / State',
    popularFields: ['Microengineering', 'Life Sciences', 'Applied Mathematics', 'Civil Engineering']
  },
  {
    name: 'Glion Institute of Higher Education',
    country: 'Switzerland',
    alpha_two_code: 'CH',
    web_pages: ['https://www.glion.edu/'],
    domains: ['glion.edu'],
    'state-province': 'Vaud',
    city: 'Montreux',
    type: 'Specialized Institute',
    popularFields: ['Luxury Brand Strategy', 'International Hospitality Business', 'Event Management']
  },
  {
    name: 'Les Roches Global Hospitality Education',
    country: 'Switzerland',
    alpha_two_code: 'CH',
    web_pages: ['https://lesroches.edu/'],
    domains: ['lesroches.edu'],
    'state-province': 'Valais',
    city: 'Crans-Montana',
    type: 'Specialized Institute',
    popularFields: ['Hotel Management', 'Hospitality Entrepreneurship', 'Digital Transformation']
  },

  // ═══ TAIWAN ═══
  {
    name: 'Taiwan Luxury Hospitality Academy Network',
    country: 'Taiwan',
    alpha_two_code: 'TW',
    web_pages: ['https://www.taiwan.gov.tw/'],
    domains: ['taiwan.gov.tw'],
    'state-province': 'Taipei & Taichung',
    city: 'Taipei',
    type: 'Specialized Institute',
    popularFields: ['12-Month Paid 5★ Hotel Internship (USD 700 - USD 900/mo)', 'Free Accommodation & Duty Meals', 'Mandarin Language']
  },
  {
    name: 'National Taiwan University (NTU)',
    country: 'Taiwan',
    alpha_two_code: 'TW',
    web_pages: ['https://www.ntu.edu.tw/english/'],
    domains: ['ntu.edu.tw'],
    'state-province': 'Taipei',
    city: 'Taipei',
    type: 'Public / State',
    popularFields: ['Semiconductor Engineering', 'Electrical Engineering', 'Medicine', 'International Business']
  },
  {
    name: 'National Tsing Hua University (NTHU)',
    country: 'Taiwan',
    alpha_two_code: 'TW',
    web_pages: ['https://www.nthu.edu.tw/'],
    domains: ['nthu.edu.tw'],
    'state-province': 'Hsinchu',
    city: 'Hsinchu',
    type: 'Public / State',
    popularFields: ['Microelectronics', 'Nuclear Science', 'Computer Science', 'Materials Science']
  },
  {
    name: 'National Yang Ming Chiao Tung University (NYCU)',
    country: 'Taiwan',
    alpha_two_code: 'TW',
    web_pages: ['https://www.nycu.edu.tw/en/'],
    domains: ['nycu.edu.tw'],
    'state-province': 'Hsinchu / Taipei',
    city: 'Hsinchu',
    type: 'Public / State',
    popularFields: ['Information Science', 'Biomedical Engineering', 'Telecommunications', 'Management']
  },

  // ═══ CYPRUS ═══
  {
    name: 'European University Cyprus (EUC)',
    country: 'Cyprus',
    alpha_two_code: 'CY',
    web_pages: ['https://euc.ac.cy/'],
    domains: ['euc.ac.cy'],
    'state-province': 'Nicosia',
    city: 'Nicosia',
    type: 'Public / State',
    popularFields: ['EU-Registered Nursing (BSc)', 'General Medicine (MD)', 'Computer Science', 'Hotel Management']
  },
  {
    name: 'University of Nicosia (UNIC)',
    country: 'Cyprus',
    alpha_two_code: 'CY',
    web_pages: ['https://www.unic.ac.cy/'],
    domains: ['unic.ac.cy'],
    'state-province': 'Nicosia',
    city: 'Nicosia',
    type: 'Private / Autonomous',
    popularFields: ['Blockchain & Digital Currency', 'Medicine (St George’s UK curriculum)', 'Accounting', 'Law']
  },
  {
    name: 'Cyprus International University (CIU)',
    country: 'Cyprus',
    alpha_two_code: 'CY',
    web_pages: ['https://www.ciu.edu.tr/en/'],
    domains: ['ciu.edu.tr'],
    'state-province': 'Nicosia',
    city: 'Nicosia',
    type: 'Private / Autonomous',
    popularFields: ['Pharmacy', 'Civil & Environmental Engineering', 'Business', 'Tourism']
  },

  // ═══ LATVIA (SCHENGEN) ═══
  {
    name: 'ISMA University of Applied Sciences',
    country: 'Latvia',
    alpha_two_code: 'LV',
    web_pages: ['https://www.isma.lv/en/'],
    domains: ['isma.lv'],
    'state-province': 'Riga Region',
    city: 'Riga',
    type: 'Public / State',
    popularFields: ['Software Systems & Cyber Design', 'Business Administration', 'International Tourism', 'Schengen Residence TRP']
  },
  {
    name: 'Riga Technical University (RTU)',
    country: 'Latvia',
    alpha_two_code: 'LV',
    web_pages: ['https://www.rtu.lv/en/'],
    domains: ['rtu.lv'],
    'state-province': 'Riga Region',
    city: 'Riga',
    type: 'Public / State',
    popularFields: ['Aviation Transport', 'Computer Systems', 'Telecommunications', 'Mechanical Engineering']
  },
  {
    name: 'University of Latvia (UL)',
    country: 'Latvia',
    alpha_two_code: 'LV',
    web_pages: ['https://www.lu.lv/en/'],
    domains: ['lu.lv'],
    'state-province': 'Riga Region',
    city: 'Riga',
    type: 'Public / State',
    popularFields: ['General Medicine', 'Dentistry', 'International Business', 'Optometry']
  },
  {
    name: 'Turiba University',
    country: 'Latvia',
    alpha_two_code: 'LV',
    web_pages: ['https://www.turiba.lv/en/'],
    domains: ['turiba.lv'],
    'state-province': 'Riga Region',
    city: 'Riga',
    type: 'Private / Autonomous',
    popularFields: ['Tourism & Hospitality Management', 'International Law', 'Public Relations', 'Business Logistics']
  },

  // ═══ DUBAI (UAE) ═══
  {
    name: 'Fin Win Campus Dubai Knowledge Park',
    country: 'United Arab Emirates',
    alpha_two_code: 'AE',
    web_pages: ['https://finwincampus.com/'],
    domains: ['finwincampus.com'],
    'state-province': 'Dubai',
    city: 'Dubai',
    type: 'Specialized Institute',
    popularFields: ['HND in Business Management', 'Executive MBA', 'Fast 5-Day UAE Visa', 'Direct Corporate Placement']
  },
  {
    name: 'Heriot-Watt University Dubai',
    country: 'United Arab Emirates',
    alpha_two_code: 'AE',
    web_pages: ['https://www.hw.ac.uk/dubai/'],
    domains: ['hw.ac.uk'],
    'state-province': 'Dubai',
    city: 'Dubai Knowledge Park',
    type: 'Private / Autonomous',
    popularFields: ['Petroleum Engineering', 'Civil & Structural Engineering', 'Data Analytics', 'Finance']
  },
  {
    name: 'University of Wollongong in Dubai (UOWD)',
    country: 'United Arab Emirates',
    alpha_two_code: 'AE',
    web_pages: ['https://www.uowdubai.ac.ae/'],
    domains: ['uowdubai.ac.ae'],
    'state-province': 'Dubai',
    city: 'Dubai Knowledge Park',
    type: 'Private / Autonomous',
    popularFields: ['Australian Accredited Degrees', 'Computer Science', 'Business & Commerce', 'Human Resource Management']
  },
  {
    name: 'Middlesex University Dubai',
    country: 'United Arab Emirates',
    alpha_two_code: 'AE',
    web_pages: ['https://www.mdx.ac.ae/'],
    domains: ['mdx.ac.ae'],
    'state-province': 'Dubai',
    city: 'Dubai Knowledge Park',
    type: 'Private / Autonomous',
    popularFields: ['Law & Criminology', 'Digital Media & Marketing', 'Psychology', 'Accounting']
  },

  // ═══ INDIA ═══
  {
    name: 'Chennai Amirta International Institute of Hotel Management',
    country: 'India',
    alpha_two_code: 'IN',
    web_pages: ['https://chennaiamirta.com/'],
    domains: ['chennaiamirta.com'],
    'state-province': 'Tamil Nadu',
    city: 'Chennai',
    type: 'Specialized Institute',
    popularFields: ['B.Sc. Hotel Management & Catering', 'Diploma in Aviation & Cabin Crew', '100% Placement Guarantee']
  },
  {
    name: 'Indian Institute of Technology Madras (IIT Madras)',
    country: 'India',
    alpha_two_code: 'IN',
    web_pages: ['https://www.iitm.ac.in/'],
    domains: ['iitm.ac.in'],
    'state-province': 'Tamil Nadu',
    city: 'Chennai',
    type: 'Public / State',
    popularFields: ['Computer Science', 'Mechanical Engineering', 'Data Science', 'Aerospace Engineering']
  },
  {
    name: 'SRM Institute of Science and Technology',
    country: 'India',
    alpha_two_code: 'IN',
    web_pages: ['https://www.srmist.edu.in/'],
    domains: ['srmist.edu.in'],
    'state-province': 'Tamil Nadu',
    city: 'Kattankulathur, Chennai',
    type: 'Private / Autonomous',
    popularFields: ['B.Tech Computer Science', 'Biotechnology', 'Health Sciences', 'Management']
  },
  {
    name: 'Vellore Institute of Technology (VIT)',
    country: 'India',
    alpha_two_code: 'IN',
    web_pages: ['https://vit.ac.in/'],
    domains: ['vit.ac.in'],
    'state-province': 'Tamil Nadu',
    city: 'Vellore / Chennai',
    type: 'Private / Autonomous',
    popularFields: ['Software Engineering', 'Automotive Systems', 'Electronics & VLSI', 'Biomedical']
  },
  {
    name: 'Manipal Academy of Higher Education (MAHE)',
    country: 'India',
    alpha_two_code: 'IN',
    web_pages: ['https://manipal.edu/'],
    domains: ['manipal.edu'],
    'state-province': 'Karnataka',
    city: 'Manipal',
    type: 'Private / Autonomous',
    popularFields: ['Kasturba Medical College (MBBS)', 'Pharmacy', 'Architecture', 'Business']
  },

  // ═══ UNITED STATES ═══
  {
    name: 'Harvard University',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.harvard.edu/'],
    domains: ['harvard.edu'],
    'state-province': 'Massachusetts',
    city: 'Cambridge',
    type: 'Private / Autonomous',
    popularFields: ['Harvard Business School', 'Harvard Law', 'Biomedical Science', 'Computer Science']
  },
  {
    name: 'Massachusetts Institute of Technology (MIT)',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.mit.edu/'],
    domains: ['mit.edu'],
    'state-province': 'Massachusetts',
    city: 'Cambridge',
    type: 'Private / Autonomous',
    popularFields: ['Artificial Intelligence', 'Robotics & EECS', 'Aerospace', 'Physics & Economics']
  },
  {
    name: 'Stanford University',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.stanford.edu/'],
    domains: ['stanford.edu'],
    'state-province': 'California',
    city: 'Stanford / Silicon Valley',
    type: 'Private / Autonomous',
    popularFields: ['Silicon Valley Entrepreneurship', 'Computer Science', 'Bioengineering', 'MBA']
  },
  {
    name: 'University of California, Berkeley (UC Berkeley)',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.berkeley.edu/'],
    domains: ['berkeley.edu'],
    'state-province': 'California',
    city: 'Berkeley',
    type: 'Public / State',
    popularFields: ['EECS & Data Science', 'Chemistry', 'Haas School of Business', 'Environmental Science']
  },
  {
    name: 'Columbia University',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.columbia.edu/'],
    domains: ['columbia.edu'],
    'state-province': 'New York',
    city: 'New York City',
    type: 'Private / Autonomous',
    popularFields: ['Journalism', 'Financial Engineering', 'Law', 'International Affairs (SIPA)']
  },
  {
    name: 'New York University (NYU)',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.nyu.edu/'],
    domains: ['nyu.edu'],
    'state-province': 'New York',
    city: 'New York City',
    type: 'Private / Autonomous',
    popularFields: ['Stern School of Business', 'Tisch School of the Arts', 'Courant Mathematics', 'Global Studies']
  },
  {
    name: 'University of Texas at Austin',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.utexas.edu/'],
    domains: ['utexas.edu'],
    'state-province': 'Texas',
    city: 'Austin',
    type: 'Public / State',
    popularFields: ['Cockrell Engineering', 'McCombs School of Business', 'Computer Science', 'Petroleum']
  },
  {
    name: 'University of Washington',
    country: 'United States',
    alpha_two_code: 'US',
    web_pages: ['https://www.washington.edu/'],
    domains: ['washington.edu'],
    'state-province': 'Washington',
    city: 'Seattle',
    type: 'Public / State',
    popularFields: ['Paul G. Allen School of CSE', 'Medicine', 'Nursing', 'Information School']
  },

  // ═══ CANADA ═══
  {
    name: 'University of Toronto',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.utoronto.ca/'],
    domains: ['utoronto.ca'],
    'state-province': 'Ontario',
    city: 'Toronto',
    type: 'Public / State',
    popularFields: ['Rotman Management', 'Computer Science & Machine Learning', 'Medicine', 'Engineering']
  },
  {
    name: 'University of British Columbia (UBC)',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.ubc.ca/'],
    domains: ['ubc.ca'],
    'state-province': 'British Columbia',
    city: 'Vancouver',
    type: 'Public / State',
    popularFields: ['Sauder School of Business', 'Forestry & Environmental Studies', 'Psychology', 'Mining']
  },
  {
    name: 'McGill University',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.mcgill.ca/'],
    domains: ['mcgill.ca'],
    'state-province': 'Quebec',
    city: 'Montreal',
    type: 'Public / State',
    popularFields: ['Faculty of Medicine and Health Sciences', 'Law', 'Desautels Faculty of Management', 'Neuroscience']
  },
  {
    name: 'University of Waterloo',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://uwaterloo.ca/'],
    domains: ['uwaterloo.ca'],
    'state-province': 'Ontario',
    city: 'Waterloo',
    type: 'Public / State',
    popularFields: ['Co-op Tech Programs', 'Software Engineering', 'Quantum Computing', 'Actuarial Science']
  },
  {
    name: 'York University',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.yorku.ca/'],
    domains: ['yorku.ca'],
    'state-province': 'Ontario',
    city: 'Toronto',
    type: 'Public / State',
    popularFields: ['Schulich School of Business', 'Osgoode Hall Law School', 'Liberal Arts', 'Digital Media']
  },
  {
    name: 'Conestoga College',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.conestogac.on.ca/'],
    domains: ['conestogac.on.ca'],
    'state-province': 'Ontario',
    city: 'Kitchener / Waterloo',
    type: 'Public / State',
    popularFields: ['Post-Graduate Diplomas (PGWP)', 'Applied IT', 'Culinary & Hospitality', 'Early Childhood Education']
  },
  {
    name: 'Seneca Polytechnic',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://www.senecapolytechnic.ca/'],
    domains: ['senecapolytechnic.ca', 'senecacollege.ca'],
    'state-province': 'Ontario',
    city: 'Toronto',
    type: 'Public / State',
    popularFields: ['Aviation & Flight Training', 'Business Analytics', 'Creative Arts & Animation', 'Nursing']
  },
  {
    name: 'Humber College',
    country: 'Canada',
    alpha_two_code: 'CA',
    web_pages: ['https://humber.ca/'],
    domains: ['humber.ca'],
    'state-province': 'Ontario',
    city: 'Toronto',
    type: 'Public / State',
    popularFields: ['Global Business Management', 'Supply Chain Management', 'Media & Public Relations']
  },

  // ═══ AUSTRALIA ═══
  {
    name: 'University of Melbourne',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.unimelb.edu.au/'],
    domains: ['unimelb.edu.au'],
    'state-province': 'Victoria',
    city: 'Melbourne',
    type: 'Public / State',
    popularFields: ['Melbourne Business School', 'Medicine', 'Law', 'Architecture & Building']
  },
  {
    name: 'University of Sydney',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.sydney.edu.au/'],
    domains: ['sydney.edu.au'],
    'state-province': 'New South Wales',
    city: 'Sydney',
    type: 'Public / State',
    popularFields: ['Veterinary Science', 'Nursing', 'Finance & Commerce', 'Computer Systems']
  },
  {
    name: 'University of New South Wales (UNSW Sydney)',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.unsw.edu.au/'],
    domains: ['unsw.edu.au'],
    'state-province': 'New South Wales',
    city: 'Sydney',
    type: 'Public / State',
    popularFields: ['UNSW Engineering', 'Photovoltaic & Solar Energy', 'AGSM MBA', 'Law']
  },
  {
    name: 'Monash University',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.monash.edu/'],
    domains: ['monash.edu'],
    'state-province': 'Victoria',
    city: 'Melbourne',
    type: 'Public / State',
    popularFields: ['Pharmacy & Pharmacology', 'Education', 'Nursing & Midwifery', 'Engineering']
  },
  {
    name: 'University of Queensland (UQ)',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.uq.edu.au/'],
    domains: ['uq.edu.au'],
    'state-province': 'Queensland',
    city: 'Brisbane',
    type: 'Public / State',
    popularFields: ['Environmental Science', 'Mining & Mineral Engineering', 'Agriculture', 'Biotechnology']
  },
  {
    name: 'Deakin University',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.deakin.edu.au/'],
    domains: ['deakin.edu.au'],
    'state-province': 'Victoria',
    city: 'Melbourne / Geelong',
    type: 'Public / State',
    popularFields: ['Sport Science', 'Nursing', 'Cyber Security', 'Business Analytics']
  },
  {
    name: 'RMIT University (Royal Melbourne Institute of Technology)',
    country: 'Australia',
    alpha_two_code: 'AU',
    web_pages: ['https://www.rmit.edu.au/'],
    domains: ['rmit.edu.au'],
    'state-province': 'Victoria',
    city: 'Melbourne',
    type: 'Public / State',
    popularFields: ['Art & Design', 'Architecture', 'Civil Engineering', 'Fashion & Textiles']
  },

  // ═══ GERMANY ═══
  {
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    alpha_two_code: 'DE',
    web_pages: ['https://www.tum.de/en/'],
    domains: ['tum.de'],
    'state-province': 'Bavaria',
    city: 'Munich',
    type: 'Public / State',
    popularFields: ['Automotive & Mechanical Engineering', 'Informatics & AI', 'Physics', 'Management']
  },
  {
    name: 'Ludwig Maximilian University of Munich (LMU Munich)',
    country: 'Germany',
    alpha_two_code: 'DE',
    web_pages: ['https://www.lmu.de/en/'],
    domains: ['lmu.de'],
    'state-province': 'Bavaria',
    city: 'Munich',
    type: 'Public / State',
    popularFields: ['Medicine', 'Veterinary Sciences', 'Physics', 'Law & Philosophy']
  },
  {
    name: 'Heidelberg University',
    country: 'Germany',
    alpha_two_code: 'DE',
    web_pages: ['https://www.uni-heidelberg.de/en'],
    domains: ['uni-heidelberg.de'],
    'state-province': 'Baden-Württemberg',
    city: 'Heidelberg',
    type: 'Public / State',
    popularFields: ['Medical Research', 'Life Sciences', 'Law', 'Astronomy']
  },
  {
    name: 'RWTH Aachen University',
    country: 'Germany',
    alpha_two_code: 'DE',
    web_pages: ['https://www.rwth-aachen.de/'],
    domains: ['rwth-aachen.de'],
    'state-province': 'North Rhine-Westphalia',
    city: 'Aachen',
    type: 'Public / State',
    popularFields: ['Mechanical & Production Engineering', 'Materials Science', 'Electrical Engineering']
  },
  {
    name: 'Technical University of Berlin (TU Berlin)',
    country: 'Germany',
    alpha_two_code: 'DE',
    web_pages: ['https://www.tu.berlin/en/'],
    domains: ['tu.berlin'],
    'state-province': 'Berlin',
    city: 'Berlin',
    type: 'Public / State',
    popularFields: ['Urban Planning', 'Computer Science', 'Environmental Engineering', 'Industrial Engineering']
  },

  // ═══ FRANCE ═══
  {
    name: 'Sorbonne University',
    country: 'France',
    alpha_two_code: 'FR',
    web_pages: ['https://www.sorbonne-universite.fr/en'],
    domains: ['sorbonne-universite.fr'],
    'state-province': 'Île-de-France',
    city: 'Paris',
    type: 'Public / State',
    popularFields: ['Humanities & Arts', 'Science & Engineering', 'Medicine']
  },
  {
    name: 'HEC Paris',
    country: 'France',
    alpha_two_code: 'FR',
    web_pages: ['https://www.hec.edu/en'],
    domains: ['hec.edu'],
    'state-province': 'Île-de-France',
    city: 'Jouy-en-Josas / Paris',
    type: 'Specialized Institute',
    popularFields: ['Master in Management (MiM)', 'Executive MBA', 'Strategic Finance', 'Luxury Marketing']
  },
  {
    name: 'INSEAD',
    country: 'France',
    alpha_two_code: 'FR',
    web_pages: ['https://www.insead.edu/'],
    domains: ['insead.edu'],
    'state-province': 'Île-de-France',
    city: 'Fontainebleau',
    type: 'Specialized Institute',
    popularFields: ['Global Executive MBA', 'Finance', 'International Leadership']
  },

  // ═══ JAPAN & NEW ZEALAND ═══
  {
    name: 'University of Tokyo',
    country: 'Japan',
    alpha_two_code: 'JP',
    web_pages: ['https://www.u-tokyo.ac.jp/en/'],
    domains: ['u-tokyo.ac.jp'],
    'state-province': 'Tokyo',
    city: 'Tokyo',
    type: 'Public / State',
    popularFields: ['Engineering', 'Science', 'Medicine', 'Economics']
  },
  {
    name: 'Kyoto University',
    country: 'Japan',
    alpha_two_code: 'JP',
    web_pages: ['https://www.kyoto-u.ac.jp/en'],
    domains: ['kyoto-u.ac.jp'],
    'state-province': 'Kyoto',
    city: 'Kyoto',
    type: 'Public / State',
    popularFields: ['Chemistry', 'Renewable Energy', 'Biomedical Informatics']
  },
  {
    name: 'University of Auckland',
    country: 'New Zealand',
    alpha_two_code: 'NZ',
    web_pages: ['https://www.auckland.ac.nz/en.html'],
    domains: ['auckland.ac.nz'],
    'state-province': 'Auckland',
    city: 'Auckland',
    type: 'Public / State',
    popularFields: ['Civil Engineering', 'Pharmacy', 'Accounting & Finance', 'Archaeology']
  }
];
