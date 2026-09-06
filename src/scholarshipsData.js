// Master Database of Verified Global Scholarships Across 7 Continents
// Complies with Uraan Educational Accuracy & Trust Standards

import cheveningImg from './assets/chevening.png'
import daadImg from './assets/daad.png'
import erasmusImg from './assets/erasmus.png'
import hungaricumImg from './assets/hungaricum.png'
import turkiyeImg from './assets/turkiye.png'
import commonwealthImg from './assets/commonwealth.png'
import countryJapan from './assets/country_japan.jpg'
import countryGermany from './assets/country_germany.jpg'
import countryUk from './assets/country_uk.jpg'
import countryFinland from './assets/country_finland.jpg'
import countryFrance from './assets/country_france.jpg'
import countryItaly from './assets/country_italy.jpg'
import countryAustralia from './assets/country_australia.jpg'
import countryCanada from './assets/country_canada.jpg'
import countryUsa from './assets/country_usa.jpg'
import countryTurkiye from './assets/country_turkiye.jpg'

export const CONTINENTS = [
  { id: 'all', name: 'All Continents', icon: '🌐', count: 35 },
  { id: 'asia', name: 'Asia', icon: '🌏', count: 8 },
  { id: 'europe', name: 'Europe', icon: '🌍', count: 11 },
  { id: 'north-america', name: 'North America', icon: '🌎', count: 3 },
  { id: 'south-america', name: 'South America', icon: '🌎', count: 4 },
  { id: 'africa', name: 'Africa', icon: '🌍', count: 5 },
  { id: 'oceania', name: 'Oceania', icon: '🌏', count: 2 },
  { id: 'antarctica', name: 'Antarctica', icon: '❄️', count: 0, special: true }
]

export const SCHOLARSHIPS_DATA = [
  // ==========================================
  // 🌏 ASIA
  // ==========================================
  {
    id: 'mext-japan',
    name: 'MEXT Japanese Government Scholarship',
    shortName: 'MEXT',
    country: 'Japan',
    countryCode: 'JP',
    continent: 'asia',
    flag: '🇯🇵',
    image: countryJapan,
    degree: 'Undergraduate, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '¥143,000 – ¥145,000 / month (approx. 115,000 BDT)',
    deadline: 'May 2026 (Embassy) / Dec 2026 (Uni)',
    status: 'Open',
    officialSource: 'mext.go.jp',
    officialUrl: 'https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm',
    badge: '✓ Official Source',
    popular: true,
    subject: 'All Major Fields (STEM, Humanities, Medicine)',
    ieltsRequired: false,
    ieltsNote: 'No IELTS mandatory if English Medium of Instruction (MOI) is certified; Japanese language training provided for 6–12 months.',
    eligibility: 'Age under 35 for postgraduates, min CGPA 3.2/4.0 (approx 75%+). Bangladesh nationals can apply through Embassy of Japan in Dhaka (Baridhara).',
    description: 'Japan’s premier scholarship established by the Ministry of Education, Culture, Sports, Science and Technology (MEXT). Offers full tuition exemption, monthly allowance, free preparatory Japanese language school, and round-trip airfare.',
    perks: ['100% Tuition Exemption', '¥143,000–¥145,000/mo stipend', 'Return flight tickets', 'Free 6-month Japanese language program'],
    bdSpecifics: {
      embassy: 'Embassy of Japan in Dhaka, Plot No. 5 & 7, Dutabash Road, Baridhara',
      cgpaTarget: '3.20 out of 4.00 (National / Public / Private Universities accepted)',
      attestation: 'Attestation by Education Board + MOFA required for shortlisted candidates',
      timeline: 'Embassy circular published around mid-April in Dhaka newspapers'
    }
  },
  {
    id: 'gks-korea',
    name: 'Global Korea Scholarship (GKS / KGSP)',
    shortName: 'GKS',
    country: 'South Korea',
    countryCode: 'KR',
    continent: 'asia',
    flag: '🇰🇷',
    image: countryJapan,
    degree: 'Bachelor, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '₩1,000,000 – ₩1,500,000 / month (approx. 90,000–135,000 BDT)',
    deadline: 'March 2026 (Grad) / Sept 2026 (Undergrad)',
    status: 'Open',
    officialSource: 'studyinkorea.go.kr',
    officialUrl: 'https://www.studyinkorea.go.kr/en/scholarship/gks_info.do',
    badge: '✓ Official Source',
    popular: true,
    subject: 'All Disciplines at Accredited Korean Universities',
    ieltsRequired: false,
    ieltsNote: 'IELTS not strictly mandatory; TOPIK or IELTS provides bonus points in selection.',
    eligibility: 'Cumulative GPA above 80% or top 20% of class. Under 25 for Bachelor, under 40 for Master/PhD.',
    description: 'Administered by the National Institute for International Education (NIIED) under the Korean Ministry of Education to provide international students with comprehensive higher education opportunities.',
    perks: ['Full university tuition fee', 'Monthly living stipend', 'Settlement allowance ₩200,000', '1-year Korean Language Institute training', 'Full Medical Insurance'],
    bdSpecifics: {
      embassy: 'Embassy of the Republic of Korea, 4 Madani Avenue, Baridhara, Dhaka',
      cgpaTarget: '3.40+ or 80%+ marks',
      attestation: 'Apostille / Consular notarization of certificates at Korean Embassy Dhaka',
      timeline: 'Graduate track applications open every February; Undergraduate in September'
    }
  },
  {
    id: 'turkiye-scholarships',
    name: 'Türkiye Scholarships (Türkiye Bursları)',
    shortName: 'Türkiye Scholarships',
    country: 'Türkiye',
    countryCode: 'TR',
    continent: 'asia',
    flag: '🇹🇷',
    image: turkiyeImg,
    degree: 'Bachelor, Master, PhD & Research',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '₺3,500 – ₺6,000 / month + Free State Dormitory & Meals',
    deadline: '20 Feb 2027 (Annual Jan–Feb Window)',
    status: 'Upcoming',
    officialSource: 'turkiyeburslari.gov.tr',
    officialUrl: 'https://www.turkiyeburslari.gov.tr/',
    badge: '✓ Verified Scholarship',
    popular: true,
    subject: 'Engineering, Medicine, Social Sciences, Islamic Studies, IT',
    ieltsRequired: false,
    ieltsNote: 'No IELTS required for Turkish-taught programs; required only if applying for select English-taught universities (METU, Bogazici).',
    eligibility: 'Min 70% for Bachelor, 75% for Master/PhD, 90% for Health Sciences (Medicine/Pharmacy/Dentistry).',
    description: 'Government-funded higher education scholarship program run by YTB. Highly popular in Bangladesh because it covers university placement, full tuition, free accommodation, monthly cash allowance, health insurance, and 1-year Turkish course.',
    perks: ['University & Program Placement', '100% Tuition Waiver', 'Free Student Dormitory Accommodation', '1-Year Turkish Language Course', 'Round-trip Flight Ticket'],
    bdSpecifics: {
      embassy: 'Turkish Embassy in Dhaka, Madani Avenue, Baridhara',
      cgpaTarget: 'Min 70% in SSC/HSC for Bachelor; min 3.0/4.0 for Masters',
      attestation: 'Scan original certificates for online application; physical attestation before visa',
      timeline: 'Applications run every year from 10 January to 20 February'
    }
  },
  {
    id: 'csc-china',
    name: 'Chinese Government Scholarship (CSC / Silk Road)',
    shortName: 'CSC Scholarship',
    country: 'China',
    countryCode: 'CN',
    continent: 'asia',
    flag: '🇨🇳',
    image: countryJapan,
    degree: 'Bachelor, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: '¥2,500 – ¥3,500 / month (approx. 42,000–60,000 BDT)',
    deadline: '31 March 2026',
    status: 'Open',
    officialSource: 'campuschina.org',
    officialUrl: 'https://www.campuschina.org/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Engineering, AI, Medicine, Economics, Agriculture',
    ieltsRequired: false,
    ieltsNote: 'English Proficiency Certificate (MOI) from university is widely accepted for English-taught degrees.',
    eligibility: 'Under 35 for Master, under 40 for PhD. Strong academic records and acceptance letter from Chinese professor (recommended).',
    description: 'Funded by the Ministry of Education of the People’s Republic of China through the China Scholarship Council (CSC). Type A (Embassy) and Type B (University) tracks offer full tuition, campus housing, and comprehensive medical insurance.',
    perks: ['Full Tuition Coverage', 'Free On-Campus Accommodation', '¥2,500–¥3,500 Monthly Living Allowance', 'Comprehensive Medical Insurance'],
    bdSpecifics: {
      embassy: 'Embassy of China in Bangladesh, Plot 2 & 4, Embassy Road, Baridhara, Dhaka',
      cgpaTarget: '3.00 out of 4.00 (Higher chances with Professor Pre-Acceptance)',
      attestation: 'Notary Public + MOFA attestation of degree certificates and transcripts',
      timeline: 'Type B (University direct) deadline is usually December to March'
    }
  },
  {
    id: 'taiwan-moe',
    name: 'Taiwan MOE Government Scholarship',
    shortName: 'Taiwan MOE',
    country: 'Taiwan',
    countryCode: 'TW',
    continent: 'asia',
    flag: '🇹🇼',
    image: countryJapan,
    degree: 'Bachelor, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'NT$15,000 – NT$20,000 / month (approx. 56,000–75,000 BDT)',
    deadline: '31 March 2026',
    status: 'Open',
    officialSource: 'edu.tw',
    officialUrl: 'https://english.moe.gov.tw/cp-24-16833-23C09-1.html',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Semiconductors, Computer Science, Biotechnology, Business',
    ieltsRequired: false,
    ieltsNote: 'IELTS or TOEFL accepted; English MOI accepted for designated English-taught master programs.',
    eligibility: 'Outstanding academic record, good moral character, not holding ROC nationality.',
    description: 'Sponsored by Taiwan’s Ministry of Education to encourage outstanding international students to undertake degree studies in Taiwan. Provides tuition subsidy up to NT$40,000 per semester plus generous monthly living allowance.',
    perks: ['Up to NT$40,000 tuition per semester', 'NT$15,000/mo (Bachelor) or NT$20,000/mo (Master/PhD)', 'National Health Insurance support'],
    bdSpecifics: {
      embassy: 'Taipei Economic and Cultural Center (TECC) in New Delhi (covers Bangladesh)',
      cgpaTarget: '3.30+ out of 4.00',
      attestation: 'Attestation by MOFA Bangladesh + TECC New Delhi',
      timeline: 'Application window: 1 February to 31 March each year'
    }
  },
  {
    id: 'saudi-arabia-gov',
    name: 'King Fahd (KFUPM) & KAUST Fellowship',
    shortName: 'KAUST / KFUPM',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    continent: 'asia',
    flag: '🇸🇦',
    image: countryJapan,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '$20,000 – $30,000 / year (approx. 200,000–300,000 BDT/month)',
    deadline: 'Dec 2026 (KAUST) / Feb 2027 (KFUPM)',
    status: 'Upcoming',
    officialSource: 'kaust.edu.sa',
    officialUrl: 'https://www.kaust.edu.sa/en/study/fellowship',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Applied Mathematics, Computer Science, Energy, Materials, Bioscience',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5 or TOEFL 79 minimum for KAUST admission.',
    eligibility: 'BSc or MSc degree in STEM disciplines with strong research potential and high GPA (3.4+).',
    description: 'Among the highest-funded graduate fellowships in the world. KAUST and KFUPM cover 100% tuition, private on-campus housing, annual round-trip flight tickets, comprehensive medical care, and a tax-free living stipend.',
    perks: ['100% Free Tuition', '$20,000–$30,000 annual living stipend', 'Private housing/apartments', 'Full medical and dental coverage', 'Annual return flight tickets to home country'],
    bdSpecifics: {
      embassy: 'Royal Embassy of Saudi Arabia, Gulshan-2, Dhaka',
      cgpaTarget: '3.50+ out of 4.00 with research publications',
      attestation: 'Police Clearance + MOFA attestation + Saudi Culture Attaché Dhaka',
      timeline: 'Round 1 closes in December; Round 2 in February/March'
    }
  },
  {
    id: 'brunei-bdgs',
    name: 'Brunei Darussalam Government Scholarship (BDGS)',
    shortName: 'BDGS Brunei',
    country: 'Brunei',
    countryCode: 'BN',
    continent: 'asia',
    flag: '🇧🇳',
    image: countryJapan,
    degree: 'Diploma, Undergraduate & Postgraduate',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'BND $500 / month + Free Dormitory + Meal Allowances',
    deadline: '15 Feb 2027 (Annual)',
    status: 'Upcoming',
    officialSource: 'mfa.gov.bn',
    officialUrl: 'https://www.mfa.gov.bn/pages/bdgs.aspx',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Islamic Studies, Sciences, Engineering, Arts (UBD, UTB, UNISSA)',
    ieltsRequired: false,
    ieltsNote: 'English proficiency certificate from school/university usually accepted.',
    eligibility: 'Applicants must be nominated by their Government (Ministry of Foreign Affairs / Ministry of Education in Bangladesh). Age 18–25 for undergrad, under 35 for postgrad.',
    description: 'Awarded annually by the Ministry of Foreign Affairs of Brunei Darussalam at Universiti Brunei Darussalam (UBD), Universiti Teknologi Brunei (UTB), and Sultan Sharif Ali Islamic University (UNISSA).',
    perks: ['Exemption from tuition and examination fees', 'Economy class air-ticket', 'BND $500 monthly personal allowance', 'BND $150 book allowance', 'Free residential accommodation'],
    bdSpecifics: {
      embassy: 'Brunei High Commission, Baridhara, Dhaka',
      cgpaTarget: 'Min 75% marks / CGPA 3.3+',
      attestation: 'Endorsement by Ministry of Foreign Affairs (MOFA) Dhaka is mandatory for application submission',
      timeline: 'Application cycle begins in December and concludes mid-February'
    }
  },
  {
    id: 'malaysia-mis',
    name: 'Malaysian International Scholarship (MIS)',
    shortName: 'MIS Malaysia',
    country: 'Malaysia',
    countryCode: 'MY',
    continent: 'asia',
    flag: '🇲🇾',
    image: countryJapan,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: false
    },
    stipendAmount: 'RM 1,500 / month living allowance (approx. 40,000 BDT)',
    deadline: '30 June 2026',
    status: 'Open',
    officialSource: 'mohe.gov.my',
    officialUrl: 'https://biasiswa.mohe.gov.my/INTER/',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Science & Engineering, Agriculture, Economics, Social Sciences',
    ieltsRequired: true,
    ieltsNote: 'IELTS min 6.0 or TOEFL 550 or certified proof of English medium degree.',
    eligibility: 'Min Second Class Upper (CGPA 3.0/4.0). Max age 40 for Master, 45 for PhD.',
    description: 'An initiative by the Malaysian Government to attract top academic talents worldwide to pursue advanced academic studies at public and selected private universities in Malaysia (UM, UKM, UTM, USM, UPM).',
    perks: ['Full tuition fee payment directly to university', 'Monthly living allowance of RM 1,500', 'Tenure up to 24 months for Master, 36 months for PhD'],
    bdSpecifics: {
      embassy: 'Malaysian High Commission, Baridhara, Dhaka',
      cgpaTarget: '3.00+ out of 4.00',
      attestation: 'Education Board & MOFA attestation of degree certificates',
      timeline: 'Typically opens in May/June each calendar year'
    }
  },

  // ==========================================
  // 🌍 EUROPE
  // ==========================================
  {
    id: 'daad-germany',
    name: 'DAAD Scholarships (EPOS & Helmut-Schmidt)',
    shortName: 'DAAD',
    country: 'Germany',
    countryCode: 'DE',
    continent: 'europe',
    flag: '🇩🇪',
    image: daadImg,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '€934 / month (Master) & €1,300 / month (PhD)',
    deadline: '15 Oct 2026 (varies by university course)',
    status: 'Open',
    officialSource: 'daad.de',
    officialUrl: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Development Studies, Engineering, Public Policy, Environment',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.0–6.5 generally required depending on specific study program.',
    eligibility: 'Bachelor completed within the last 6 years, min 2 years of verifiable professional work experience. Highly suitable for Bangladeshi working professionals.',
    description: 'Germany’s flagship scholarship funding development-related postgraduate courses (EPOS) and public policy governance (Helmut-Schmidt). Offers full tuition waiver, monthly stipend, health insurance, and roundtrip flight costs.',
    perks: ['€934–€1,300 monthly allowance', 'Health, accident and personal liability insurance', 'Travel subsidy for flights to Germany', 'Monthly rent subsidy and allowance for accompanying family members'],
    bdSpecifics: {
      embassy: 'Embassy of the Federal Republic of Germany, Madani Avenue, Baridhara, Dhaka',
      cgpaTarget: '3.00+ with 2 years of relevant professional experience post-graduation',
      attestation: 'Notarization of academic transcripts; blocked account requirement is fully waived with DAAD award letter',
      timeline: 'EPOS applications close August–October depending on the German host university'
    }
  },
  {
    id: 'chevening-uk',
    name: 'Chevening Scholarships',
    shortName: 'Chevening',
    country: 'United Kingdom',
    countryCode: 'GB',
    continent: 'europe',
    flag: '🇬🇧',
    image: cheveningImg,
    degree: "1-Year Taught Master's",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '£1,483 / month (London) & £1,192 / month (Outside London)',
    deadline: '05 Nov 2026 (Opens Sept 2026)',
    status: 'Open',
    officialSource: 'chevening.org',
    officialUrl: 'https://www.chevening.org/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Public Policy, International Relations, Law, STEM, Business',
    ieltsRequired: false,
    ieltsNote: 'No Chevening English requirement; only university unconditional offer requirements apply.',
    eligibility: 'Undergraduate degree (2:1 equivalent / CGPA 3.0+), min 2 years (2,800 hours) work experience, return to home country for 2 years post-award.',
    description: 'The UK Government’s global scholarship programme funded by the Foreign, Commonwealth and Development Office (FCDO). Fully funds a one-year master’s degree at any UK university for future leaders and decision-makers.',
    perks: ['Full university tuition fees', 'A monthly living allowance', 'Economy class return airfare to the UK', 'Arrival and departure allowances', 'Visa application fee reimbursement'],
    bdSpecifics: {
      embassy: 'British High Commission Dhaka, United Nations Road, Baridhara',
      cgpaTarget: '3.00 out of 4.00 + strong demonstrated leadership track record',
      attestation: 'Scan original documents online; interviews held at British High Commission Dhaka',
      timeline: 'Portal opens first Tuesday of August; deadline first Tuesday of November'
    }
  },
  {
    id: 'commonwealth-uk',
    name: 'Commonwealth Master’s & PhD Scholarships',
    shortName: 'Commonwealth',
    country: 'United Kingdom',
    countryCode: 'GB',
    continent: 'europe',
    flag: '🇬🇧',
    image: commonwealthImg,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '£1,347 / month (or £1,652 / month in London)',
    deadline: '17 Oct 2026 (Nominations close Dec)',
    status: 'Open',
    officialSource: 'cscuk.fcdo.gov.uk',
    officialUrl: 'https://cscuk.fcdo.gov.uk/apply/masters-scholarships/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Science & Technology, Strengthening Health, Promoting Global Prosperity',
    ieltsRequired: true,
    ieltsNote: 'IELTS typically required (6.5 overall) for UK university admission.',
    eligibility: 'Citizen or permanent resident of a Commonwealth country (Bangladesh included). Strong upper second-class honours degree. Nomination required from University Grants Commission (UGC) Bangladesh.',
    description: 'Funded by the UK Foreign, Commonwealth & Development Office (FCDO) for talented individuals from developing Commonwealth countries who could not otherwise afford to study in the UK.',
    perks: ['Approved tuition fees covered in full', 'Return airfare to the UK', 'Monthly living stipend', 'Warm clothing allowance where applicable', 'Study travel grants'],
    bdSpecifics: {
      embassy: 'Nominated through University Grants Commission (UGC) of Bangladesh, Agargaon, Dhaka',
      cgpaTarget: 'First class or 3.50+ out of 4.00',
      attestation: 'All academic transcripts attested by UGC Bangladesh before international submission',
      timeline: 'UGC circular published September; CSCUK deadline mid-October'
    }
  },
  {
    id: 'finland-scholarship',
    name: 'Finland Scholarship & EDUFI Fellowships',
    shortName: 'Finland Scholarship',
    country: 'Finland',
    countryCode: 'FI',
    continent: 'europe',
    flag: '🇫🇮',
    image: countryFinland,
    degree: "Master's & Doctoral",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: false
    },
    stipendAmount: '100% Tuition Waiver + €5,000 Relocation Grant (EDUFI: €1,900/mo)',
    deadline: '18 Jan 2027 (Joint Application Cycle)',
    status: 'Upcoming',
    officialSource: 'studyinfinland.fi',
    officialUrl: 'https://www.studyinfinland.fi/scholarships/finland-scholarships',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Computer Science, Sustainability, Engineering, Education, Business',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5 minimum (min 6.0 in writing) or TOEFL 92.',
    eligibility: 'Open to non-EU/EEA fee-paying students with outstanding academic records applying to Finnish research universities (Helsinki, Aalto, Oulu, Tampere).',
    description: 'Funded by the Finnish Ministry of Education and Culture. Covers 100% of the tuition fee for the two-year master’s degree and provides a €5,000 one-off relocation grant directly to the student’s Finnish bank account upon arrival.',
    perks: ['100% Tuition Fee Exemption for 2 years', '€5,000 First-Year Relocation Grant', 'Doctoral EDUFI grants (€1,900/month)', 'Post-study 2-year job seeker residence permit in Finland'],
    bdSpecifics: {
      embassy: 'Finland visa residence permit biometric appointment at VFS Global Dhaka',
      cgpaTarget: '3.30+ out of 4.00',
      attestation: 'Board + Ministry + MOFA attestation of degree certificates',
      timeline: 'Finland Joint Application period runs annually from 3 to 17 January'
    }
  },
  {
    id: 'swedish-institute-si',
    name: 'Swedish Institute Scholarship for Global Professionals (SISGP)',
    shortName: 'SI Scholarship',
    country: 'Sweden',
    countryCode: 'SE',
    continent: 'europe',
    flag: '🇸🇪',
    image: countryGermany,
    degree: "1 or 2-Year Master's",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'SEK 12,000 / month (approx. 130,000 BDT) + SEK 15,000 travel grant',
    deadline: '26 Feb 2027 (Opens 10 Feb)',
    status: 'Upcoming',
    officialSource: 'si.se',
    officialUrl: 'https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Sustainability, Innovation, Technology, Human Rights, Public Health',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5 (min 5.5 in each section) required for Swedish University Admissions.',
    eligibility: 'Citizens of eligible countries (Bangladesh is eligible). Minimum 3,000 hours of demonstrated work & leadership experience.',
    description: 'Funded by the Swedish Ministry for Foreign Affairs. Fully covers Swedish university tuition fees, monthly living expenses of SEK 12,000, a travel grant of SEK 15,000, and membership in the SI Network for Future Global Leaders.',
    perks: ['100% Tuition Fees paid to Swedish university', 'SEK 12,000 monthly living stipend', 'SEK 15,000 one-time travel grant', 'Insurance against illness and accident', 'Access to SI Alumni Network'],
    bdSpecifics: {
      embassy: 'Embassy of Sweden, Bay’s Edgewater, Gulshan-2, Dhaka',
      cgpaTarget: '3.00+ with 3,000 documented hours of work/leadership experience',
      attestation: 'Proof of work experience on official SI templates with employer signatures',
      timeline: 'University Admissions Sweden closes mid-January; SI scholarship portal open February'
    }
  },
  {
    id: 'eiffel-france',
    name: 'Eiffel Excellence Scholarship Programme',
    shortName: 'Eiffel Scholarship',
    country: 'France',
    countryCode: 'FR',
    continent: 'europe',
    flag: '🇫🇷',
    image: countryFrance,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: false,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '€1,181 / month (Master) & €1,800 / month (PhD)',
    deadline: '10 Jan 2027 (Host institutions submit applications)',
    status: 'Upcoming',
    officialSource: 'campusfrance.org',
    officialUrl: 'https://www.campusfrance.org/en/the-eiffel-scholarship-program-of-excellence',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Biology, Health, Ecological Transition, Math, Digital, Engineering, Law',
    ieltsRequired: false,
    ieltsNote: 'No French needed for English-taught master programs; English MOI or IELTS 6.5 accepted.',
    eligibility: 'Non-French nationality. Max 25 years old for Master level, max 30 years old for PhD level. Candidates must be nominated by a French higher education institution.',
    description: 'Developed by the Ministry for Europe and Foreign Affairs to enable French higher education institutions to attract top foreign students. Provides monthly living stipend, international return transportation, national healthcare, and cultural activities.',
    perks: ['€1,181/mo (Master) or €1,800/mo (PhD) allowance', 'Return international airfare ticket', 'Campus France cultural and local housing assistance', 'Exemption from French national student healthcare fees'],
    bdSpecifics: {
      embassy: 'Campus France Bangladesh & Embassy of France, Madani Avenue, Baridhara, Dhaka',
      cgpaTarget: '3.50+ out of 4.00 with academic distinction',
      attestation: 'Student must be accepted by a French university first, which submits the dossier to Campus France Paris',
      timeline: 'Internal French university deadlines run October to December each year'
    }
  },
  {
    id: 'italy-dsu-maeci',
    name: 'Italy Regional (DSU) & MAECI Scholarships',
    shortName: 'Italy DSU / MAECI',
    country: 'Italy',
    countryCode: 'IT',
    continent: 'europe',
    flag: '🇮🇹',
    image: countryItaly,
    degree: 'Bachelor, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: '€7,000 – €8,500 / year + Free University Canteen Meals',
    deadline: 'Aug 2026 (Regional DSU) / June 2026 (MAECI)',
    status: 'Open',
    officialSource: 'studyinitaly.esteri.it',
    officialUrl: 'https://studyinitaly.esteri.it/en/Scholarships',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Architecture, Design, Engineering, Economics, Data Science, Humanities',
    ieltsRequired: false,
    ieltsNote: 'Most public universities accept English Medium of Instruction (MOI) certificate in place of IELTS.',
    eligibility: 'DSU is income/need-based: Family income calculation (ISEE Parificato below €23,000/yr). Highly accessible to Bangladeshi middle-class and working-class families.',
    description: 'Italy provides two stellar scholarship paths: Italian Ministry of Foreign Affairs (MAECI) merit grants and regional DSU scholarships (Lombardy, Lazio, Tuscany, Emilia-Romagna) that cover 100% tuition, free university residence housing, free canteen meals, and cash stipends.',
    perks: ['100% University Tuition Waiver', 'Free Student Residence Accommodation', 'Daily Free Meals at University Canteen (Mensa)', '€7,000+ Annual Direct Bank Cash Transfer', 'Student public transit discounts'],
    bdSpecifics: {
      embassy: 'Embassy of Italy in Dhaka, Road 74/79, Plot 2/3, Gulshan-2',
      cgpaTarget: 'Min CGPA 2.80+ (income documentation is the primary ranking factor for DSU)',
      attestation: 'Family income certificate & property documents attested by DC Office + Foreign Ministry (MOFA) + Italian Embassy translation',
      timeline: 'Universitaly pre-enrollment opens March; DSU regional portals open July–August'
    }
  },
  {
    id: 'hungary-stipendium',
    name: 'Stipendium Hungaricum Scholarship',
    shortName: 'Stipendium Hungaricum',
    country: 'Hungary',
    countryCode: 'HU',
    continent: 'europe',
    flag: '🇭🇺',
    image: hungaricumImg,
    degree: 'Bachelor, Master, One-Tier Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'HUF 43,700 / mo (Master) & HUF 140,000 / mo (PhD) + Free Dormitory',
    deadline: '15 Jan 2027 (Opens mid-Nov)',
    status: 'Upcoming',
    officialSource: 'stipendiumhungaricum.hu',
    officialUrl: 'https://stipendiumhungaricum.hu/',
    badge: '✓ Verified Scholarship',
    popular: true,
    subject: 'Computer Science, Medicine, Agriculture, Engineering, Economics',
    ieltsRequired: false,
    ieltsNote: 'Many Hungarian universities accept English Medium of Instruction (MOI) certificates.',
    eligibility: 'Citizens of partner countries with bilateral educational agreements (Bangladesh Ministry of Education nominates 140+ students annually).',
    description: 'Based on bilateral education agreements between Hungary and Bangladesh. Covers tuition-free education at top Hungarian universities, monthly stipend contribution, free dormitory accommodation or HUF 40,000/month housing allowance, and national medical insurance.',
    perks: ['100% Exemption from Tuition Fees', 'Monthly Living Allowance for 12 months/year', 'Free Dormitory Placement or Housing Allowance', 'Comprehensive Health Insurance up to HUF 65,000/year'],
    bdSpecifics: {
      embassy: 'Ministry of Education Bangladesh (Secondary & Higher Education Division) nominates students; Hungarian Embassy in New Delhi / Dhaka Consular Office issues visa',
      cgpaTarget: '3.00 out of 4.00 for Bachelor/Master',
      attestation: 'Submit via Tempus Public Foundation portal + Ministry of Education Bangladesh circular portal',
      timeline: 'Applications run mid-November to 15 January annually'
    }
  },
  {
    id: 'czech-gov-scholarship',
    name: 'Czech Republic Government Scholarships',
    shortName: 'Czech Gov Scholarship',
    country: 'Czech Republic',
    countryCode: 'CZ',
    continent: 'europe',
    flag: '🇨🇿',
    image: countryGermany,
    degree: "Master's & PhD",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'CZK 14,000 / month (Master) & CZK 15,000 / month (PhD)',
    deadline: '30 Sept 2026',
    status: 'Open',
    officialSource: 'msmt.cz',
    officialUrl: 'https://www.msmt.cz/eu-and-international-affairs/government-scholarships-developing-countries',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Economics, Agriculture, Informatics, Environment, Energy',
    ieltsRequired: false,
    ieltsNote: 'Online English proficiency test conducted during scholarship shortlisting.',
    eligibility: 'Graduates from developing countries. No Czech language required for English-taught master programs.',
    description: 'Funded under Foreign Development Assistance of the Czech Republic. Supports master and doctoral study programs at public higher education institutions across the Czech Republic.',
    perks: ['Full tuition coverage', 'Monthly maintenance allowance CZK 14,000–15,000', 'Medical travel insurance during studies', 'Subsidized student cafeteria and accommodation'],
    bdSpecifics: {
      embassy: 'Embassy of the Czech Republic in New Delhi (Honorary Consulate in Dhaka)',
      cgpaTarget: '3.00+ out of 4.00',
      attestation: 'Nostrification of previous academic qualifications required in Czechia',
      timeline: 'Online portal open July to 30 September each year'
    }
  },
  {
    id: 'netherlands-nl-scholarship',
    name: 'NL Scholarship (Holland Scholarship)',
    shortName: 'NL Scholarship',
    country: 'Netherlands',
    countryCode: 'NL',
    continent: 'europe',
    flag: '🇳🇱',
    image: countryGermany,
    degree: "Bachelor's & Master's",
    degreeLevel: 'Bachelor & Master',
    fundingType: 'Tuition Waiver',
    coverage: {
      tuition: true,
      stipend: false,
      accommodation: false,
      airfare: false,
      healthInsurance: false
    },
    stipendAmount: '€5,000 one-off grant towards first year tuition fees',
    deadline: '01 May 2026 (or 01 Feb depending on university)',
    status: 'Open',
    officialSource: 'studyinnl.org',
    officialUrl: 'https://www.studyinnl.org/finances/nl-scholarship',
    badge: '✓ Official Source',
    popular: false,
    subject: 'All Disciplines at Participating Dutch Research Universities',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5 (no band below 6.0) required by Dutch institutions.',
    eligibility: 'Non-EEA nationality, applying to a full-time bachelor’s or master’s program at a participating Dutch research university or university of applied sciences.',
    description: 'Financed by the Dutch Ministry of Education, Culture and Science together with Dutch universities. Awarded to international students as a substantial contribution towards study costs in the first year.',
    perks: ['€5,000 grant paid during the first year of studies', 'Access to top-tier Dutch research institutions', '1-year post-study Orientation Year (Zoekjaar) work permit'],
    bdSpecifics: {
      embassy: 'Embassy of the Kingdom of the Netherlands, Road 90, Gulshan-2, Dhaka',
      cgpaTarget: '3.30+ out of 4.00',
      attestation: 'Application submitted directly through the Dutch host university admission portal',
      timeline: 'University admission and scholarship deadline: 1 February or 1 May'
    }
  },
  {
    id: 'erasmus-mundus',
    name: 'Erasmus Mundus Joint Masters (EMJM)',
    shortName: 'Erasmus Mundus',
    country: 'European Union',
    countryCode: 'EU',
    continent: 'europe',
    flag: '🇪🇺',
    image: erasmusImg,
    degree: "Joint Master's Degree Across 2–3 EU Nations",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '€1,400 / month tax-free living allowance (approx. 182,000 BDT)',
    deadline: '15 Jan 2027 (Consortium deadlines: Oct–Feb)',
    status: 'Upcoming',
    officialSource: 'eacea.ec.europa.eu',
    officialUrl: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Over 150+ Joint Programs in AI, Nanotechnology, Marine, Public Policy, Robotics',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5+ required by most European university consortia.',
    eligibility: 'Completed bachelor’s degree with strong academic record. Bangladesh consistently ranks in the TOP 3 recipient nations worldwide for Erasmus Mundus scholarships!',
    description: 'Prestigious, integrated master’s study programmes jointly delivered by an international consortium of higher education institutions across at least two European countries. Awardees study in multiple countries and receive joint/multiple degrees.',
    perks: ['100% Full Tuition Coverage across all 2–3 EU universities', '€1,400 per month tax-free living allowance', 'Full travel and installation allowance grants', 'Comprehensive worldwide healthcare insurance', 'Joint or multiple degrees recognized across all EU countries'],
    bdSpecifics: {
      embassy: 'Delegation of the European Union to Bangladesh, Plot 7, Embassy Road, Baridhara',
      cgpaTarget: '3.30+ out of 4.00 (Research papers or project experience boost chances significantly)',
      attestation: 'Online upload of scanned original degree certificates and transcripts; no physical attestation needed initially',
      timeline: 'Each program opens between October and December and closes between January and February'
    }
  },

  // ==========================================
  // 🌎 NORTH AMERICA
  // ==========================================
  {
    id: 'vanier-cgs-canada',
    name: 'Vanier Canada Graduate Scholarships (Vanier CGS)',
    shortName: 'Vanier Canada',
    country: 'Canada',
    countryCode: 'CA',
    continent: 'north-america',
    flag: '🇨🇦',
    image: countryCanada,
    degree: 'Doctoral / PhD Studies',
    degreeLevel: 'PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'CAD $50,000 / year for up to 3 years (approx. CAD $4,166/month)',
    deadline: '01 Nov 2026 (Institutional nomination deadline)',
    status: 'Open',
    officialSource: 'vanier.gc.ca',
    officialUrl: 'https://vanier.gc.ca/en/home-accueil.html',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Health Research, Natural Sciences & Engineering, Social Sciences & Humanities',
    ieltsRequired: true,
    ieltsNote: 'IELTS 7.0 or university minimum standard.',
    eligibility: 'Nominations submitted by a Canadian institution holding a Vanier quota. Demonstrates world-class academic excellence, research potential, and verified leadership ability.',
    description: 'Canada’s flagship graduate award program launched by the Government of Canada to attract and retain world-class doctoral students. Evaluated on three equal criteria: Academic Excellence, Research Potential, and Leadership.',
    perks: ['CAD $50,000 annually for 3 full years', 'Full research autonomy and lab funding', 'Path to Canadian Permanent Residency through provincial streams'],
    bdSpecifics: {
      embassy: 'High Commission of Canada in Bangladesh, Madani Avenue, Baridhara, Dhaka',
      cgpaTarget: 'First-class academic record (CGPA 3.7+ / 4.0) with peer-reviewed publications',
      attestation: 'WES (World Education Services) credential evaluation usually required by Canadian universities',
      timeline: 'University internal deadlines run August to September; national deadline in November'
    }
  },
  {
    id: 'fulbright-foreign-student-usa',
    name: 'Fulbright Foreign Student Program',
    shortName: 'Fulbright USA',
    country: 'United States',
    countryCode: 'US',
    continent: 'north-america',
    flag: '🇺🇸',
    image: countryUsa,
    degree: "Master's Degree (1–2 Years)",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'Full Tuition + $1,800 – $2,500 / month living stipend + J-1 Visa',
    deadline: '31 May 2026 (Annual application cycle in Dhaka)',
    status: 'Open',
    officialSource: 'foreign.fulbrightonline.org',
    officialUrl: 'https://bd.usembassy.gov/education-culture/fulbright-program/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'All Fields of Study (except clinical medical research)',
    ieltsRequired: true,
    ieltsNote: 'TOEFL iBT (min 80) or IELTS (min 6.5) required; GRE/GMAT fee vouchers provided for shortlisted candidates.',
    eligibility: 'Bangladeshi citizen residing in Bangladesh at the time of application, completed 4-year bachelor’s degree, minimum 2 years of professional work experience.',
    description: 'The premier international educational exchange program sponsored by the U.S. Department of State. In Bangladesh, administered directly by the Public Affairs Section of the U.S. Embassy in Dhaka. Covers all tuition, living allowance, airfare, books, and medical insurance.',
    perks: ['Full university tuition and mandatory fees in USA', 'Monthly living stipend tailored to host city cost of living', 'Round-trip economy international airfare', 'Accident and sickness health benefits plan (ASPE)', 'J-1 Exchange Visitor visa sponsorship'],
    bdSpecifics: {
      embassy: 'Public Affairs Section, U.S. Embassy Dhaka, Madani Avenue, Baridhara',
      cgpaTarget: '3.20+ out of 4.00 with demonstrated commitment to Bangladesh development',
      attestation: 'Transcripts, letters of recommendation, and personal statements submitted via official portal',
      timeline: 'Application announced February/March; deadline late May at U.S. Embassy Dhaka'
    }
  },
  {
    id: 'amexcid-mexico',
    name: 'AMEXCID Mexican Government Excellence Scholarship',
    shortName: 'AMEXCID Mexico',
    country: 'Mexico',
    countryCode: 'MX',
    continent: 'north-america',
    flag: '🇲🇽',
    image: countryCanada,
    degree: 'Specialization, Master & Doctorate',
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: '4 to 5 times monthly UMA value (approx. $750–$950 USD/month)',
    deadline: '28 June 2026',
    status: 'Open',
    officialSource: 'gob.mx/amexcid',
    officialUrl: 'https://www.gob.mx/amexcid/acciones-y-programas/becas-para-extranjeros-29785',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Engineering, Biotechnology, Latin American Studies, Physics, Architecture',
    ieltsRequired: false,
    ieltsNote: 'Spanish language proficiency (DELE B2) typically required for instruction in Mexico.',
    eligibility: 'Min GPA equivalent to 85 on a 100-point scale (CGPA 3.3+). More than 70 Mexican public universities participate (UNAM, IPN, Cinvestav).',
    description: 'Offered through the Mexican Agency for International Development Cooperation (AMEXCID) of the Ministry of Foreign Affairs to promote educational cooperation with over 180 countries.',
    perks: ['Full enrollment and tuition registration waiver', 'Monthly stipend equivalent to 4x or 5x UMA value', 'National healthcare insurance coverage (IMSS)', 'International roundtrip airfare for long-term programs'],
    bdSpecifics: {
      embassy: 'Embassy of Mexico in New Delhi (concurrent to Bangladesh)',
      cgpaTarget: '3.30+ out of 4.00 with Spanish capability or English research thesis program',
      attestation: 'Apostille / legalization of degree certificates through MOFA Dhaka',
      timeline: 'Annual call published May; closing end of June'
    }
  },

  // ==========================================
  // 🌎 SOUTH AMERICA
  // ==========================================
  {
    id: 'gcub-mob-brazil',
    name: 'GCUB-Mob International Mobility Program Brazil',
    shortName: 'GCUB-Mob Brazil',
    country: 'Brazil',
    countryCode: 'BR',
    continent: 'south-america',
    flag: '🇧🇷',
    image: countryItaly,
    degree: "Master's & PhD Studies",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: false
    },
    stipendAmount: 'R$ 2,100 / mo (Master) & R$ 3,100 / mo (PhD) (approx. 45,000–68,000 BDT)',
    deadline: '17 June 2026',
    status: 'Open',
    officialSource: 'gcub.org.br',
    officialUrl: 'https://www.gcub.org.br/bsp/',
    badge: '✓ Verified Scholarship',
    popular: false,
    subject: 'Agriculture, Tropical Medicine, Computer Science, Engineering, Ecology',
    ieltsRequired: false,
    ieltsNote: 'No language proficiency certificate required at application stage; Portuguese learned upon arrival.',
    eligibility: 'Citizens of countries maintaining diplomatic relations with Brazil. Open to students who completed a recognized bachelor’s or master’s degree.',
    description: 'Organized by the International Cooperation Group of Brazilian Universities (GCUB) in partnership with the OAS and AUF. Offers over 1,200 master’s and doctoral scholarships at more than 55 top Brazilian federal and state universities (USP, Unicamp, UFRJ).',
    perks: ['100% Tuition Fee Exemption throughout the degree program', 'Monthly research stipend throughout tenure (24 mos Master, 48 mos PhD)', 'Free access to university dining halls and laboratories', 'No application fee required by GCUB'],
    bdSpecifics: {
      embassy: 'Embassy of Brazil in Dhaka, Symphony Tower, Gulshan Avenue, Dhaka',
      cgpaTarget: '3.00+ out of 4.00',
      attestation: 'Certified translation of academic documents into Portuguese/English + MOFA attestation',
      timeline: 'Applications open May; closes mid-June annually'
    }
  },
  {
    id: 'clacso-argentina',
    name: 'Becas Internacionales Argentina / CLACSO Fellowships',
    shortName: 'CLACSO Argentina',
    country: 'Argentina',
    countryCode: 'AR',
    continent: 'south-america',
    flag: '🇦🇷',
    image: countryItaly,
    degree: "Master's & Research Fellowships",
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'Full Tuition Exemption + Monthly Living Subsidy',
    deadline: '15 Aug 2026',
    status: 'Open',
    officialSource: 'clacso.org',
    officialUrl: 'https://www.clacso.org/en/scholarships/',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Social Sciences, Public Policy, Economics, Climate Justice, Human Rights',
    ieltsRequired: false,
    ieltsNote: 'Working knowledge of Spanish or English depending on research mentor.',
    eligibility: 'Graduate researchers enrolled or admitted in accredited Argentine national university programs (UBA, UNLP).',
    description: 'Promoted by the Latin American Council of Social Sciences (CLACSO) and Argentine Ministry of Education to support international graduate students undertaking cutting-edge research in Argentina.',
    perks: ['Full tuition waiver at top public Argentine universities', 'Monthly research grant allowance', 'Health coverage assistance', 'Participation in Latin American academic congresses'],
    bdSpecifics: {
      embassy: 'Embassy of the Argentine Republic in Dhaka (reopened in Banani, Dhaka)',
      cgpaTarget: '3.20+ with an approved research project proposal',
      attestation: 'Transcripts certified by MOFA Dhaka and apostilled/legalized by Argentine consular section',
      timeline: 'Calls published periodically between May and August'
    }
  },
  {
    id: 'agcid-chile',
    name: 'AGCID Republic of Chile Nelson Mandela Scholarships',
    shortName: 'AGCID Chile',
    country: 'Chile',
    countryCode: 'CL',
    continent: 'south-america',
    flag: '🇨🇱',
    image: countryItaly,
    degree: "Master's Degrees",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'CLP $560,000 / month living stipend + Return Airfare',
    deadline: '02 Dec 2026',
    status: 'Upcoming',
    officialSource: 'agcid.cl',
    officialUrl: 'https://www.agci.cl/index.php/becas/becas-para-extranjeros',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Astronomy, Mining, Seismology, Public Administration, Environmental Sciences',
    ieltsRequired: false,
    ieltsNote: 'Spanish proficiency certificate required for Spanish-taught programs.',
    eligibility: 'Civil servants, academics, and researchers holding an undergraduate degree from an eligible country admitted to a Chilean university master’s program.',
    description: 'Offered by the Chilean Agency for International Development Cooperation (AGCID) to finance master’s degrees at universities recognized for accredited excellence across Chile (Universidad de Chile, UC Chile).',
    perks: ['100% University Tuition and registration fees', 'Monthly living stipend of CLP $560,000', 'Life and health insurance coverage', 'Round-trip air travel ticket between home country and Santiago, Chile'],
    bdSpecifics: {
      embassy: 'Embassy of Chile in New Delhi (concurrent to Bangladesh)',
      cgpaTarget: '3.20+ out of 4.00',
      attestation: 'Apostille of certificates through MOFA Dhaka',
      timeline: 'Annual call opens in August and concludes in early December'
    }
  },
  {
    id: 'icetex-colombia',
    name: 'Beca Colombia ICETEX for Foreigners',
    shortName: 'Beca Colombia',
    country: 'Colombia',
    countryCode: 'CO',
    continent: 'south-america',
    flag: '🇨🇴',
    image: countryItaly,
    degree: 'Specialization, Master & PhD',
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: '3 times national monthly minimum wage (approx. $800 USD/month)',
    deadline: '09 June 2026',
    status: 'Open',
    officialSource: 'icetex.gov.co',
    officialUrl: 'https://web.icetex.gov.co/becas/beca-colombia-extranjeros',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Biodiversity, Peace Studies, Engineering, Public Health, Agriculture',
    ieltsRequired: false,
    ieltsNote: 'DELE B2 Spanish certification required as courses are taught in Spanish.',
    eligibility: 'Foreign citizens under 50 years old holding an undergraduate degree, minimum CGPA 4.0/5.0 (equivalent to 3.2/4.0), admitted to an accredited Colombian university.',
    description: 'The Colombian Institute of Educational Credit and Technical Studies Abroad (ICETEX) offers reciprocal scholarships to foreign citizens pursuing postgraduate specializations, master’s, and doctorates in Colombia.',
    perks: ['100% Tuition Waiver at participating Colombian universities', 'Monthly living allowance of 3 monthly legal minimum wages', 'Health and medical emergency insurance coverage', 'Courtesy visa grant and installation subsidy'],
    bdSpecifics: {
      embassy: 'Embassy of Colombia in New Delhi (concurrent to Bangladesh)',
      cgpaTarget: '3.20+ out of 4.00',
      attestation: 'Online dossier submission; consular legalization prior to arrival',
      timeline: 'Annual application window runs from April to early June'
    }
  },

  // ==========================================
  // 🌍 AFRICA
  // ==========================================
  {
    id: 'al-azhar-egypt',
    name: 'Al-Azhar & Egyptian Higher Education Scholarships',
    shortName: 'Al-Azhar / Egypt Gov',
    country: 'Egypt',
    countryCode: 'EG',
    continent: 'africa',
    flag: '🇪🇬',
    image: countryTurkiye,
    degree: 'Bachelor, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'Monthly stipend + Free Student Islamic City Dormitory & Meals',
    deadline: '15 July 2026 (Annual)',
    status: 'Open',
    officialSource: 'study-in-egypt.gov.eg',
    officialUrl: 'https://admission.study-in-egypt.gov.eg/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Islamic Jurisprudence, Arabic Literature, Medicine, Engineering, Pharmacy',
    ieltsRequired: false,
    ieltsNote: 'Arabic language preparatory center provided for non-native speakers; English accepted for specific medicine/engineering degrees.',
    eligibility: 'High school graduation (Alim / HSC) with good marks. Nomination via Bangladesh Ministry of Religious Affairs or direct application via Study in Egypt portal.',
    description: 'Funded by the Grand Institute of Al-Azhar Al-Sharif and the Egyptian Ministry of Higher Education. Welcomes thousands of international scholars annually to historical Cairo, providing free tuition, dormitory lodging, monthly stipend, and medical care.',
    perks: ['100% Free Tuition at Al-Azhar University or public Egyptian universities', 'Free boarding in the International Islamic City campus', 'Monthly living stipend and book allowance', 'Free medical treatment in university hospitals'],
    bdSpecifics: {
      embassy: 'Embassy of the Arab Republic of Egypt, House 9, Road 90, Gulshan-2, Dhaka',
      cgpaTarget: 'Min 65% marks in Dakhil/Alim or SSC/HSC',
      attestation: 'Madrasah Board / General Education Board + MOFA attestation + Egyptian Embassy Dhaka',
      timeline: 'Admissions announced annually between May and July'
    }
  },
  {
    id: 'amci-morocco',
    name: 'Moroccan Agency for International Cooperation (AMCI)',
    shortName: 'AMCI Morocco',
    country: 'Morocco',
    countryCode: 'MA',
    continent: 'africa',
    flag: '🇲🇦',
    image: countryTurkiye,
    degree: 'Undergraduate, Master & PhD',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: '750 MAD / month + Subsidized University Residences (Cités Universitaires)',
    deadline: '31 Aug 2026',
    status: 'Open',
    officialSource: 'amci.ma',
    officialUrl: 'https://www.amci.ma/en/scholarships',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Medicine, Agronomy, Architecture, Islamic Studies, Renewable Energy',
    ieltsRequired: false,
    ieltsNote: 'French or Arabic depending on the faculty; 1-year language orientation given.',
    eligibility: 'Nomination through official diplomatic channels (Ministry of Foreign Affairs Bangladesh). Age under 23 for undergraduate.',
    description: 'The Kingdom of Morocco’s primary south-south educational cooperation scheme. Every year AMCI welcomes thousands of foreign students from partner nations to study across Morocco’s renowned universities (Mohammed V, Hassan II, Cadi Ayyad).',
    perks: ['Exemption from university tuition fees', 'Bi-monthly scholarship stipend (750 MAD/mo)', 'Subsidized accommodation in public university dormitories', 'National student medical and hospitalization insurance'],
    bdSpecifics: {
      embassy: 'Embassy of the Kingdom of Morocco, House 44, Road 11, Block H, Banani, Dhaka',
      cgpaTarget: 'First class or 70%+ marks in HSC',
      attestation: 'Ministry of Education + MOFA nomination dossier required',
      timeline: 'Quotas announced through MOFA Dhaka during June–August'
    }
  },
  {
    id: 'mandela-rhodes-sa',
    name: 'Mandela Rhodes Scholarships & NRF South Africa',
    shortName: 'Mandela Rhodes',
    country: 'South Africa',
    countryCode: 'ZA',
    continent: 'africa',
    flag: '🇿🇦',
    image: countryUk,
    degree: "Honours & Master's Degrees",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'Full Tuition + Generous Living Allowance + Leadership Workshops',
    deadline: '21 April 2026',
    status: 'Open',
    officialSource: 'mandelarhodes.org',
    officialUrl: 'https://www.mandelarhodes.org/scholarship/apply/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'All Postgraduate Disciplines at Recognized South African Universities',
    ieltsRequired: false,
    ieltsNote: 'English medium of instruction accepted (South African universities teach in English: UCT, Wits, Stellenbosch).',
    eligibility: 'Citizens of African nations and international candidates demonstrating exceptional leadership, reconciliation, and academic excellence. Age 19–29.',
    description: 'Founded by Nelson Mandela to cultivate exceptional leadership capacity across the continent and beyond. Provides a fully funded master’s or honours degree at top-ranked universities in South Africa alongside a world-class leadership development programme.',
    perks: ['Full tuition and registration fees paid to South African university', 'Generous living allowance covering accommodation and food', 'Return economy airfare from home country', 'Book allowance and medical aid coverage', 'Exclusive Mandela Rhodes Leadership workshops'],
    bdSpecifics: {
      embassy: 'South African High Commission, Baridhara, Dhaka',
      cgpaTarget: 'Upper second-class honours or CGPA 3.4+ out of 4.00',
      attestation: 'SAQA (South African Qualifications Authority) evaluation of degree certificates',
      timeline: 'Applications open in March and close in April each year'
    }
  },
  {
    id: 'algeria-gov-scholarship',
    name: 'Algerian Government International Student Scholarships',
    shortName: 'Algeria Gov',
    country: 'Algeria',
    countryCode: 'DZ',
    continent: 'africa',
    flag: '🇩🇿',
    image: countryTurkiye,
    degree: 'Bachelor, Master & Doctorate',
    degreeLevel: 'All Degrees',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: true,
      airfare: false,
      healthInsurance: true
    },
    stipendAmount: 'Full Tuition + Free University Residence Housing & Meals',
    deadline: '30 July 2026',
    status: 'Open',
    officialSource: 'mesrs.dz',
    officialUrl: 'https://www.mesrs.dz/',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Petroleum Engineering, Mathematics, Arabic Linguistics, Geosciences',
    ieltsRequired: false,
    ieltsNote: 'Arabic or French medium depending on discipline.',
    eligibility: 'Bilateral government nominations between the Government of Bangladesh and the People’s Democratic Republic of Algeria.',
    description: 'Sponsored by the Algerian Ministry of Higher Education and Scientific Research (MESRS) under bilateral cultural agreements. Fully waives university tuition and provides residential student housing across Algeria’s public university network.',
    perks: ['100% Free Tuition at public Algerian institutions', 'Free accommodation in university student villages', 'Subsidized dining hall services', 'Full state healthcare access'],
    bdSpecifics: {
      embassy: 'Embassy of the People’s Democratic Republic of Algeria, Gulshan-2, Dhaka',
      cgpaTarget: 'HSC GPA 4.0+ or Bachelor CGPA 3.0+',
      attestation: 'MOFA Bangladesh and Embassy consular attestation',
      timeline: 'Processed between June and August annually'
    }
  },
  {
    id: 'tunisia-higher-ed',
    name: 'Tunisian Ministry of Higher Education International Grants',
    shortName: 'Tunisia Higher Ed',
    country: 'Tunisia',
    countryCode: 'TN',
    continent: 'africa',
    flag: '🇹🇳',
    image: countryTurkiye,
    degree: 'Undergraduate & Master Programs',
    degreeLevel: 'Bachelor & Master',
    fundingType: 'Tuition Waiver',
    coverage: {
      tuition: true,
      stipend: false,
      accommodation: true,
      airfare: false,
      healthInsurance: false
    },
    stipendAmount: 'Full Tuition Exemption + Subsidized University Student Housing',
    deadline: '15 Aug 2026',
    status: 'Open',
    officialSource: 'mes.tn',
    officialUrl: 'http://www.mes.tn/',
    badge: '✓ Official Source',
    popular: false,
    subject: 'Mediterranean Studies, Computer Engineering, Arabic Literature, Agronomy',
    ieltsRequired: false,
    ieltsNote: 'French or Arabic instruction.',
    eligibility: 'Bilateral educational exchange framework applicants with accredited high school or undergraduate diplomas.',
    description: 'Offered by the Ministry of Higher Education and Scientific Research of the Republic of Tunisia to welcome international scholars to universities in Tunis, Sousse, and Sfax.',
    perks: ['Complete tuition fee exemption', 'Priority placement in student housing residences', 'Access to subsidized state student restaurants'],
    bdSpecifics: {
      embassy: 'Tunisian diplomatic mission accredited to Bangladesh via New Delhi',
      cgpaTarget: '3.00+ out of 4.00',
      attestation: 'Certified translation and MOFA attestation',
      timeline: 'Submissions accepted July through August'
    }
  },

  // ==========================================
  // 🌏 OCEANIA
  // ==========================================
  {
    id: 'australia-awards',
    name: 'Australia Awards Scholarships',
    shortName: 'Australia Awards',
    country: 'Australia',
    countryCode: 'AU',
    continent: 'oceania',
    flag: '🇦🇺',
    image: countryAustralia,
    degree: "Master's Degrees (by Coursework or Research)",
    degreeLevel: 'Master',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'AUD $30,000+ / year living allowance + Return Flights + OSHC',
    deadline: '30 April 2026 (Annual window 1 Feb – 30 April)',
    status: 'Open',
    officialSource: 'dfat.gov.au',
    officialUrl: 'https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Climate Change, Agriculture, Public Policy, Health, Blue Economy, Education',
    ieltsRequired: true,
    ieltsNote: 'IELTS overall 6.5 with at least 6.0 in each band, or TOEFL iBT 84.',
    eligibility: 'Bangladeshi citizen residing in Bangladesh, minimum 2 years of work experience, min CGPA 3.0/4.0. Strong focus on public servants, private sector, women, and persons with disabilities.',
    description: 'Prestigious international scholarships administered by the Department of Foreign Affairs and Trade (DFAT). Equips emerging leaders from developing countries, especially in the Indo-Pacific region, with world-class postgraduate degrees from top Australian universities.',
    perks: ['Full tuition fees paid directly to host Australian university', 'Return economy class air travel to and from Australia', 'Establishment allowance of AUD $5,000 on arrival', 'Contribution to Living Expenses (CLE) paid fortnightly', 'Full Overseas Student Health Cover (OSHC)'],
    bdSpecifics: {
      embassy: 'Australian High Commission, 184 Gulshan Avenue, Gulshan-2, Dhaka',
      cgpaTarget: '3.00+ out of 4.00 + 2 years of professional experience in priority development fields',
      attestation: 'Online OASIS portal submission; verification of documents and employment letters',
      timeline: 'Opens 1 February; strictly closes 30 April every year'
    }
  },
  {
    id: 'manaaki-new-zealand',
    name: 'Manaaki New Zealand Scholarships',
    shortName: 'Manaaki New Zealand',
    country: 'New Zealand',
    countryCode: 'NZ',
    continent: 'oceania',
    flag: '🇳🇿',
    image: countryAustralia,
    degree: 'Postgraduate Certificate, Diploma, Master & PhD',
    degreeLevel: 'Master & PhD',
    fundingType: 'Fully Funded',
    coverage: {
      tuition: true,
      stipend: true,
      accommodation: false,
      airfare: true,
      healthInsurance: true
    },
    stipendAmount: 'NZD $531 / week living allowance (approx. 140,000 BDT/month)',
    deadline: '28 Feb 2027 (Opens 01 Feb)',
    status: 'Upcoming',
    officialSource: 'nzscholarships.govt.nz',
    officialUrl: 'https://www.nzscholarships.govt.nz/',
    badge: '✓ Official Source',
    popular: true,
    subject: 'Climate Change, Renewable Energy, Food Security, Disaster Management, Governance',
    ieltsRequired: true,
    ieltsNote: 'IELTS 6.5 (no band below 6.0) or TOEFL 90 required for New Zealand university admission.',
    eligibility: 'Citizens of eligible countries (including Bangladesh). At least 18 years old, minimum 1 year of full-time work experience (or 2 years part-time), committed to returning home for at least 2 years.',
    description: 'Funded by the New Zealand Ministry of Foreign Affairs and Trade (MFAT). Offers high-achieving scholars the chance to study at top New Zealand universities (University of Auckland, Otago, Victoria Wellington, Canterbury) with full financial coverage.',
    perks: ['Full university tuition fees', 'Living allowance of NZD $531 per week', 'Establishment allowance of NZD $3,000 upon arrival', 'Medical and travel insurance policy', 'Return international airfare between home country and New Zealand'],
    bdSpecifics: {
      embassy: 'New Zealand High Commission accredited via New Delhi (VFS Global Dhaka handles visa processing)',
      cgpaTarget: '3.00+ out of 4.00 with relevant work experience aligned with NZ development priorities',
      attestation: 'Online psychometric eligibility test and application via MFAT portal',
      timeline: 'Applications open 1 February and close end of February each year'
    }
  }
]

// Educational note and scientific context for Antarctica
export const ANTARCTICA_SPECIAL_NOTE = {
  continent: 'Antarctica',
  flag: '❄️',
  headline: 'Scientific Expedition & Polar Research Region',
  disclaimer: 'No conventional international university scholarship destination — Antarctica is primarily a research and scientific expedition region.',
  details: [
    {
      title: 'Scientific Research Stations Only',
      desc: 'Antarctica has no permanent human population, sovereign government, or commercial degree-granting universities. Operations are governed by the Antarctic Treaty System (1959).'
    },
    {
      title: 'Polar Fellowship Opportunities',
      desc: 'Postgraduate and postdoctoral researchers can access scientific expedition grants through the Scientific Committee on Antarctic Research (SCAR Fellowships) and the Council of Managers of National Antarctic Programs (COMNAP).'
    },
    {
      title: 'University Polar Science Programs',
      desc: 'Students aspiring to conduct Antarctic field research can pursue degree programs through associated universities in New Zealand (University of Canterbury - Gateway Antarctica), Australia (University of Tasmania - IMAS), or the UK (British Antarctic Survey & Cambridge).'
    }
  ],
  scarFellowshipUrl: 'https://scar.org/awards/fellowships/'
}

// 10 Featured Popular Scholarships for the dedicated highlight section
export const POPULAR_SCHOLARSHIPS_IDS = [
  'mext-japan',
  'gks-korea',
  'turkiye-scholarships',
  'daad-germany',
  'chevening-uk',
  'erasmus-mundus',
  'australia-awards',
  'manaaki-new-zealand',
  'fulbright-foreign-student-usa',
  'hungary-stipendium'
]

// Study Abroad Destinations (with rich student data)
export const STUDY_ABROAD_COUNTRIES = [
  {
    name: 'Germany',
    flag: '🇩🇪',
    image: countryGermany,
    universities: '400+ Public Universities',
    scholarshipsCount: '45+ Verified Programs',
    popularPrograms: 'Automotive, Mechanical, Computer Science, Renewable Energy',
    tuitionRange: '€0 (100% Tuition-Free in 15 of 16 federal states)',
    semesterFee: '€150 – €350 / semester (includes free regional train travel pass)',
    livingCost: '€850 – €1,050 / month (approx. 110,000–135,000 BDT)',
    blockedAccount: '€11,904 / year (€992 / month) — Exempt if awarded DAAD scholarship',
    visaInfo: 'German National Visa (Type D) — Appointment at German Embassy Baridhara, Dhaka',
    workRights: '140 full days (or 280 half days) per calendar year; unrestricted on-campus student jobs',
    postStudyVisa: '18-month Job Seeker Residence Permit post-graduation',
    officialPortal: 'https://www.daad.de/en/',
    scholarshipAvailability: 'Extremely High (DAAD, Deutschlandstipendium, University Waivers)'
  },
  {
    name: 'Finland',
    flag: '🇫🇮',
    image: countryFinland,
    universities: '35 Universities & UAS',
    scholarshipsCount: '28+ Verified Programs',
    popularPrograms: 'Software Engineering, AI, Clean Tech, Educational Sciences, Business',
    tuitionRange: '€8,000 – €14,000 / year (Waived up to 100% with Finland Scholarships)',
    semesterFee: '€80 – €100 / year student union membership',
    livingCost: '€700 – €950 / month (approx. 90,000–125,000 BDT)',
    blockedAccount: '€6,720 / year (€560 / month proof of funds for 1 year)',
    visaInfo: 'Finnish Residence Permit for Studies — Processed online via Enter Finland + VFS Dhaka',
    workRights: '30 hours per week during term time (unlimited during summer vacations)',
    postStudyVisa: '2-Year Post-Study Job Search Residence Permit',
    officialPortal: 'https://www.studyinfinland.fi/',
    scholarshipAvailability: 'High (Finland Scholarship: 100% Tuition + €5,000 grant)'
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: countryUk,
    universities: '160+ Recognized Universities',
    scholarshipsCount: '40+ Verified Programs',
    popularPrograms: 'Data Science, Finance, International Law, Public Health, Management',
    tuitionRange: '£13,000 – £28,000 / year (100% funded with Chevening / Commonwealth)',
    semesterFee: 'Included in institutional tuition fee',
    livingCost: '£1,000 – £1,450 / month (approx. 150,000–220,000 BDT)',
    blockedAccount: '28-day consecutive bank holding statement covering 9 months of maintenance',
    visaInfo: 'UK Student Route Visa (Points-Based System CAS) — VFS Global Delta Life Tower, Gulshan-2',
    workRights: '20 hours per week during university term; 40 hours/week during breaks',
    postStudyVisa: '2-Year Graduate Route Work Visa (3 Years for PhD graduates)',
    officialPortal: 'https://study-uk.britishcouncil.org/',
    scholarshipAvailability: 'High (Chevening, Commonwealth, GREAT, University Chancellor Awards)'
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    image: countryJapan,
    universities: '780+ Universities',
    scholarshipsCount: '32+ Verified Programs',
    popularPrograms: 'Robotics, Material Science, Civil Engineering, Asian Studies, Economics',
    tuitionRange: '¥535,800 / year at National Universities (100% covered by MEXT)',
    semesterFee: '¥282,000 one-off matriculation admission fee (waived for MEXT scholars)',
    livingCost: '¥80,000 – ¥120,000 / month (approx. 65,000–96,000 BDT)',
    blockedAccount: 'Bank solvency proof of approx. ¥1,500,000 for private applicants',
    visaInfo: 'Certificate of Eligibility (COE) + Student Visa at Embassy of Japan Baridhara, Dhaka',
    workRights: '28 hours per week with Shikakugaikatsudo (work permit stamp) on landing',
    postStudyVisa: 'Designated Activities Visa (6 months to 1 year renewable job hunting)',
    officialPortal: 'https://www.studyinjapan.go.jp/en/',
    scholarshipAvailability: 'Very High (MEXT Government, JASSO Honors, University Direct Waivers)'
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    image: countryJapan,
    universities: '200+ Accredited Universities',
    scholarshipsCount: '25+ Verified Programs',
    popularPrograms: 'Information Technology, Semiconductors, Media, Korean Studies, Biomedical',
    tuitionRange: '$3,000 – $7,000 / semester ($0 with GKS / Professor Lab Funding)',
    semesterFee: '$200 – $400 entrance admission fee',
    livingCost: '₩700,000 – ₩1,100,000 / month (approx. 63,000–100,000 BDT)',
    blockedAccount: '$20,000 USD bank solvency certificate (waived for GKS scholarship recipients)',
    visaInfo: 'D-2 Student Visa — Embassy of the Republic of Korea, Madani Avenue, Dhaka',
    workRights: '20–25 hours per week during term time depending on TOPIK level',
    postStudyVisa: 'D-10 Job Seeker Visa for up to 2 years',
    officialPortal: 'https://www.studyinkorea.go.kr/',
    scholarshipAvailability: 'Very High (Global Korea Scholarship GKS, University Merit Waivers)'
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    image: countryItaly,
    universities: '90+ Public & Private Universities',
    scholarshipsCount: '22+ Verified Programs',
    popularPrograms: 'Architecture, Fashion, Automotive Design, Economics, Data Analytics',
    tuitionRange: '€156 – €3,000 / year (Waived 100% with Regional DSU Scholarships)',
    semesterFee: '€156 regional administrative tax',
    livingCost: '€600 – €900 / month (approx. 78,000–117,000 BDT)',
    blockedAccount: '€6,079 / year proof of funds (€467/month) — Waived with DSU scholarship award letter',
    visaInfo: 'National Type D Student Visa via Universitaly portal + Embassy of Italy Gulshan-2, Dhaka',
    workRights: '20 hours per week (up to 1,040 hours per calendar year)',
    postStudyVisa: '12-month Permesso di Soggiorno per Ricerca Lavoro (Job Search Permit)',
    officialPortal: 'https://www.universitaly.it/',
    scholarshipAvailability: 'Extremely High (DSU Regional Need-Based: 100% Tuition + €7,500/yr + Meals)'
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    image: countryCanada,
    universities: '100+ DLI Universities & Colleges',
    scholarshipsCount: '30+ Verified Programs',
    popularPrograms: 'Artificial Intelligence, Cybersecurity, Civil Engineering, Business Analytics',
    tuitionRange: 'CAD $16,000 – $36,000 / year ($0 with Graduate Research Assistantships)',
    semesterFee: 'CAD $500 – $1,000 incidental and health plan fees',
    livingCost: 'CAD $1,400 – $1,900 / month (approx. 125,000–170,000 BDT)',
    blockedAccount: 'CAD $20,635 / year living expenses proof + 1st year paid tuition receipt',
    visaInfo: 'Canadian Study Permit (IRCC) with biometrics at VFS Global Delta Life, Gulshan-2, Dhaka',
    workRights: '20–24 hours per week off-campus during academic terms; 40 hrs/wk during breaks',
    postStudyVisa: 'Up to 3-Year Post-Graduation Work Permit (PGWP) leading to Express Entry PR',
    officialPortal: 'https://www.educanada.ca/',
    scholarshipAvailability: 'High (Vanier CGS, Banting, University Entrance & Research Assistantships)'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    image: countryAustralia,
    universities: '43 World-Class Universities',
    scholarshipsCount: '35+ Verified Programs',
    popularPrograms: 'Mining Engineering, Biotechnology, Business, Nursing, Computer Science',
    tuitionRange: 'AUD $25,000 – $45,000 / year (100% covered with Australia Awards or RTP)',
    semesterFee: 'Included in tuition schedule',
    livingCost: 'AUD $1,800 – $2,400 / month (approx. 145,000–190,000 BDT)',
    blockedAccount: 'AUD $29,710 / year official financial capacity requirement',
    visaInfo: 'Subclass 500 Student Visa — Applied online via ImmiAccount with biometrics in Dhaka',
    workRights: '48 hours per fortnight during study terms; unrestricted during course holidays',
    postStudyVisa: 'Subclass 485 Temporary Graduate Visa (2 to 4 years work rights)',
    officialPortal: 'https://www.studyaustralia.gov.au/',
    scholarshipAvailability: 'High (Australia Awards, Research Training Program RTP, University Chancellor Awards)'
  }
]

// 10 Essential Student Tools for Study Abroad Success
export const STUDENT_TOOLS = [
  {
    id: 'scholarship-finder',
    title: 'Scholarship Finder',
    icon: '🎓',
    desc: 'Filter 120+ verified fully funded international scholarships by country, GPA, and subject.',
    actionText: 'Search Scholarships',
    badge: 'Popular'
  },
  {
    id: 'university-finder',
    title: 'University Finder',
    icon: '🏫',
    desc: 'Explore tuition-free and low-cost world-ranked universities across 40+ countries.',
    actionText: 'Explore Universities',
    badge: 'Verified'
  },
  {
    id: 'cv-builder',
    title: 'Academic CV Builder',
    icon: '📄',
    desc: 'Generate Europass and Harvard format scholarship CVs customized with your given name.',
    actionText: 'Create Custom CV',
    badge: 'Word & Text'
  },
  {
    id: 'sop-generator',
    title: 'SOP & Motivation Letter',
    icon: '✍️',
    desc: 'Download winning Statement of Purpose and motivation letter templates with proven acceptance.',
    actionText: 'Generate SOP',
    badge: 'High Acceptance'
  },
  {
    id: 'deadline-tracker',
    title: 'Scholarship Deadline Tracker',
    icon: '📅',
    desc: 'Never miss an intake deadline with real-time countdowns and Bangladesh Time (BST) notifications.',
    actionText: 'Track Deadlines',
    badge: 'Live Dates'
  },
  {
    id: 'cost-calculator',
    title: 'BDT Cost & Solvency Calculator',
    icon: '💰',
    desc: 'Convert blocked accounts, tuition fees, and living expenses directly into Bangladesh Taka (BDT).',
    actionText: 'Calculate Expenses',
    badge: 'Live BDT'
  },
  {
    id: 'visa-requirements',
    title: 'Visa & VFS Dhaka Guide',
    icon: '🛂',
    desc: 'Complete embassy checklists for German, Finland, Italian, UK, and USA student visas in Dhaka.',
    actionText: 'View Visa Steps',
    badge: 'Dhaka Center'
  },
  {
    id: 'document-attestation',
    title: 'Document Attestation Guide',
    icon: '📋',
    desc: 'Step-by-step roadmap for Education Board, MOE, MOFA, and Notary Public attestation in Bangladesh.',
    actionText: 'View Checklist',
    badge: 'Bangladesh'
  },
  {
    id: 'ielts-moi-guide',
    title: 'IELTS / MOI Requirements',
    icon: '📚',
    desc: 'List of countries and top universities where you can study without IELTS using English Medium certificates.',
    actionText: 'Check Waivers',
    badge: 'No IELTS List'
  },
  {
    id: 'country-comparison',
    title: 'Country Comparison Tool',
    icon: '🌍',
    desc: 'Side-by-side comparison of post-study work permits, blocked accounts, and permanent residency pathways.',
    actionText: 'Compare Destinations',
    badge: 'PR Pathways'
  }
]

// Bangladesh Student Specific Resources & Dhaka Embassies
export const BANGLADESH_RESOURCES = {
  currencyRates: {
    EUR: 130.5,
    USD: 121.2,
    GBP: 153.8,
    CAD: 89.4,
    AUD: 79.8,
    JPY: 0.81,
    KRW: 0.091,
    SEK: 11.5
  },
  embassies: [
    {
      country: 'Germany 🇩🇪',
      center: 'Embassy of the Federal Republic of Germany',
      location: 'Madani Avenue, Baridhara Diplomatic Zone, Dhaka-1212',
      visaType: 'National Visa Type D (CSP/VFS appointment slot required)',
      blockedAccountEuro: '€11,904 / year (approx. 1,553,000 BDT) — Fully exempt with DAAD letter'
    },
    {
      country: 'Italy 🇮🇹',
      center: 'Embassy of Italy & VFS Global Italy',
      location: 'Road 74/79, Plot 2/3, Gulshan-2, Dhaka (VFS at Nafi Tower, Gulshan-1)',
      visaType: 'National Type D Visa (Universitaly Summary & Pre-enrollment)',
      blockedAccountEuro: '€6,079 / year (approx. 793,000 BDT) — Fully waived with DSU award'
    },
    {
      country: 'United Kingdom 🇬🇧',
      center: 'VFS Global UK Visa Application Centre',
      location: 'Delta Life Tower, Plot 37, Road 90, Gulshan-2, Dhaka',
      visaType: 'Student Route (CAS from university + TB Test from IOM Dhaka)',
      blockedAccountEuro: '£1,023–£1,334 / month for 9 months in 28-day mature bank account'
    },
    {
      country: 'United States 🇺🇸',
      center: 'Consular Section, U.S. Embassy Dhaka',
      location: 'Madani Avenue, Baridhara, Dhaka-1212',
      visaType: 'F-1 Student Visa (Form I-20 + DS-160 + SEVIS I-901 Fee)',
      blockedAccountEuro: 'Bank solvency certificate matching estimated 1st-year cost on Form I-20'
    },
    {
      country: 'Finland 🇫🇮',
      center: 'VFS Global Finland Application Centre',
      location: 'Delta Life Tower, Gulshan-2, Dhaka (Biometrics for Residence Permit)',
      visaType: 'First Residence Permit for Studies (Enter Finland online portal)',
      blockedAccountEuro: '€6,720 / year (approx. 876,000 BDT) in student’s personal bank account'
    }
  ],
  attestationSteps: [
    {
      step: '01',
      title: 'Original Academic Transcripts & Certificates',
      desc: 'Gather your original SSC, HSC, Bachelor’s Marksheets, and Degree Certificates from school/college/university.'
    },
    {
      step: '02',
      title: 'Education Board Attestation',
      desc: 'Get SSC & HSC attested by your respective Education Board (Dhaka, Chittagong, Rajshahi, etc.) or National University / Private University Registrar.'
    },
    {
      step: '03',
      title: 'Ministry of Education (MOE)',
      desc: 'Submit board-attested documents to the Ministry of Education (Shikkha Bhaban, Abdul Gani Road, Dhaka) for official signature and seal.'
    },
    {
      step: '04',
      title: 'Ministry of Foreign Affairs (MOFA)',
      desc: 'Submit to Consular Section of MOFA (Segunbagicha, Dhaka). Same-day or next-day QR-coded sticker verification is provided.'
    },
    {
      step: '05',
      title: 'Notary Public & Embassy Legalization',
      desc: 'Have copies notarized by a certified First Class Notary Public in Dhaka. For Germany, Italy, and Hungary, complete consular legalization if requested.'
    }
  ]
}

// ============================================================================
// URAAN APPLICATION PLANS & PRICING DATA (7 Countries & Multi-Packages)
// ============================================================================

export const COUNTRY_PRICING_PLANS = [
  {
    id: 'uk-plan',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Application Support',
    price: 3000,
    priceFormatted: '৳3,000',
    popular: false,
    badge: null,
    features: [
      'University & course selection',
      'Eligibility checking',
      'Application guidance',
      'CV review',
      'Personal Statement guidance',
      'Document checklist',
      'Application tracking'
    ],
    ctaText: 'Apply to UK →'
  },
  {
    id: 'germany-plan',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'Germany Application Support',
    price: 3000,
    priceFormatted: '৳3,000',
    popular: false,
    badge: null,
    features: [
      'University & program selection',
      'Eligibility assessment',
      'Application portal guidance',
      'CV review',
      'Motivation Letter guidance',
      'Document checklist',
      'Application tracking'
    ],
    ctaText: 'Apply to Germany →'
  },
  {
    id: 'italy-plan',
    country: 'Italy',
    flag: '🇮🇹',
    title: 'Italy Application Support',
    price: 3500,
    priceFormatted: '৳3,500',
    popular: true,
    badge: 'POPULAR',
    features: [
      'University & program selection',
      'Eligibility assessment',
      'Application guidance',
      'CV review',
      'Motivation Letter guidance',
      'Scholarship guidance',
      'Document checklist',
      'Pre-enrollment guidance'
    ],
    ctaText: 'Apply to Italy →'
  },
  {
    id: 'finland-plan',
    country: 'Finland',
    flag: '🇫🇮',
    title: 'Finland Application Support',
    price: 2500,
    priceFormatted: '৳2,500',
    popular: false,
    badge: null,
    features: [
      'University & program selection',
      'Eligibility checking',
      'Application guidance',
      'CV review',
      'Motivation Letter guidance',
      'Document checklist',
      'Application tracking'
    ],
    ctaText: 'Apply to Finland →'
  },
  {
    id: 'czech-plan',
    country: 'Czech Republic',
    flag: '🇨🇿',
    title: 'Czech Republic Application Support',
    price: 2500,
    priceFormatted: '৳2,500',
    popular: false,
    badge: null,
    features: [
      'University selection',
      'Program matching',
      'Eligibility assessment',
      'Application guidance',
      'CV review',
      'Motivation Letter guidance',
      'Document checklist'
    ],
    ctaText: 'Apply to Czech Republic →'
  },
  {
    id: 'japan-plan',
    country: 'Japan',
    flag: '🇯🇵',
    title: 'Japan Application Support',
    price: 4000,
    priceFormatted: '৳4,000',
    popular: false,
    badge: 'SCHOLARSHIP FOCUS',
    features: [
      'University & program selection',
      'Scholarship guidance',
      'Eligibility assessment',
      'CV review',
      'Study Plan guidance',
      'Motivation Letter guidance',
      'Document checklist',
      'Application support'
    ],
    ctaText: 'Apply to Japan →'
  },
  {
    id: 'korea-plan',
    country: 'South Korea',
    flag: '🇰🇷',
    title: 'South Korea Application Support',
    price: 4000,
    priceFormatted: '৳4,000',
    popular: false,
    badge: null,
    features: [
      'University & program selection',
      'Scholarship guidance',
      'GKS pathway guidance',
      'Eligibility assessment',
      'CV review',
      'Study Plan/Motivation Letter',
      'Document checklist',
      'Application tracking'
    ],
    ctaText: 'Apply to South Korea →'
  }
]

export const MULTI_COUNTRY_PACKAGES = [
  {
    id: '2-country-pkg',
    title: '2-Country Plan',
    countriesCount: 2,
    price: 5000,
    priceFormatted: '৳5,000',
    originalPriceFormatted: '৳6,000',
    savingsText: 'Save ৳1,000',
    badge: null,
    features: [
      'Support for 2 countries',
      'University selection',
      'Eligibility checking',
      'CV review',
      'Motivation Letter guidance',
      'Document checklist',
      'Application support'
    ],
    ctaText: 'Choose 2 Countries →'
  },
  {
    id: '4-country-pkg',
    title: '4-Country Plan',
    countriesCount: 4,
    price: 9000,
    priceFormatted: '৳9,000',
    originalPriceFormatted: '৳12,000',
    savingsText: 'Save ৳3,000',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'Support for 4 countries',
      'University & program selection',
      'Eligibility assessment',
      'CV optimization',
      'Motivation Letter/SOP guidance',
      'Scholarship search assistance',
      'Document checklist',
      'Application tracking',
      'Priority support'
    ],
    ctaText: 'Choose 4 Countries →'
  },
  {
    id: '7-country-pkg',
    title: '7-Country Plan',
    countriesCount: 7,
    price: 15000,
    priceFormatted: '৳15,000',
    originalPriceFormatted: '৳22,500',
    savingsText: 'Save up to ৳7,500',
    badge: 'BEST VALUE',
    hero: true,
    features: [
      'Support for all 7 countries',
      'University & program selection',
      'Eligibility assessment',
      'Scholarship opportunity search',
      'CV optimization',
      'SOP/Motivation Letter guidance',
      'Document checklist',
      'Application assistance',
      'Application tracking',
      'Priority consultation'
    ],
    ctaText: 'Apply to All 7 Countries →'
  }
]

export const ADDON_SERVICES = [
  {
    id: 'cv-optimization',
    title: 'Academic CV & Resume Optimization',
    category: 'review',
    categoryLabel: 'Document Review',
    price: 500,
    priceFormatted: '৳500',
    icon: '📄',
    turnaround: '24-48 Hours',
    desc: 'Harvard & Europass formatting review with academic ATS compliance and faculty-focused layout.',
    deliverables: [
      'Line-by-line grammar & tone polish',
      'ATS score & formatting check',
      'Research & publication layout',
      'Final editable .docx & print-ready .pdf'
    ]
  },
  {
    id: 'sop-writing',
    title: 'Statement of Purpose (SOP) Guidance',
    category: 'writing',
    categoryLabel: 'Academic Writing',
    price: 1000,
    priceFormatted: '৳1,000',
    icon: '✍️',
    turnaround: '48-72 Hours',
    desc: 'Comprehensive Statement of Purpose draft tailored to your academic profile and target university.',
    deliverables: [
      'Personal story & research alignment',
      'University professor/lab matching',
      'Two rounds of iterative revisions',
      'Plagiarism & AI audit report'
    ]
  },
  {
    id: 'motivation-letter',
    title: 'Scholarship Motivation Letter',
    category: 'writing',
    categoryLabel: 'Academic Writing',
    price: 800,
    priceFormatted: '৳800',
    icon: '💌',
    turnaround: '48 Hours',
    desc: 'Persuasive country and scholarship-specific motivation letter (DAAD, Chevening, Stipendium Hungaricum).',
    deliverables: [
      'Bilateral development impact angle',
      'Leadership & community story framing',
      'Scholarship committee tone check',
      'One-on-one counselor feedback'
    ]
  },
  {
    id: 'professor-cold-email',
    title: 'Professor Cold Email & Outreach Pack',
    category: 'writing',
    categoryLabel: 'Academic Writing',
    price: 600,
    priceFormatted: '৳600',
    icon: '📧',
    turnaround: '24 Hours',
    desc: 'Custom outreach template and review for contacting prospective supervisors for MSc thesis & PhD funding.',
    deliverables: [
      'Subject line high-open rate formulas',
      'Concise 3-paragraph research pitch',
      'Follow-up email sequence',
      'CV attachment presentation guide'
    ]
  },
  {
    id: 'one-to-one-consultation',
    title: '1-on-1 Profile Strategy Session',
    category: 'strategy',
    categoryLabel: 'Advisory & Strategy',
    price: 500,
    priceFormatted: '৳500',
    icon: '💬',
    turnaround: 'Same Day / Scheduled',
    desc: '30-minute private 1-on-1 strategy video call with an international education counselor.',
    deliverables: [
      'CGPA & IELTS profile evaluation',
      'Safe, target & reach university list',
      'Scholarship roadmap for 2026/27',
      'Written action plan summary via WhatsApp'
    ]
  },
  {
    id: 'mock-visa-interview',
    title: 'Embassy Mock Visa Interview & Prep',
    category: 'visa',
    categoryLabel: 'Visa & Embassies',
    price: 800,
    priceFormatted: '৳800',
    icon: '🎙️',
    turnaround: 'Scheduled 45-Min Call',
    desc: 'Realistic mock interview simulation tailored to German, USA, UK, or Italian student visa questions.',
    deliverables: [
      'Simulated embassy interview scenario',
      'Financial solvency & sponsor Q&A prep',
      'Post-study intent answers coaching',
      'Instant confidence feedback scorecard'
    ]
  },
  {
    id: 'visa-checklist',
    title: 'Visa Document Audit & Blocked Account Guide',
    category: 'visa',
    categoryLabel: 'Visa & Embassies',
    price: 500,
    priceFormatted: '৳500',
    icon: '🛂',
    turnaround: '24-48 Hours',
    desc: 'Embassy-specific document audit, Dhaka VFS/embassy submission checks, and blocked account setup guidance.',
    deliverables: [
      'Official embassy checklist verification',
      'Sponsor affidavit & bank solvency check',
      'Police clearance & attestation steps',
      'Dhaka appointment booking walkthrough'
    ]
  },
  {
    id: 'linkedin-profile',
    title: 'Academic LinkedIn & Scholar Profile Setup',
    category: 'strategy',
    categoryLabel: 'Advisory & Strategy',
    price: 500,
    priceFormatted: '৳500',
    icon: '💼',
    turnaround: '48 Hours',
    desc: 'Professional headline, bio, and research showcase optimized to connect with professors and labs.',
    deliverables: [
      'Faculty-optimized headline & bio',
      'Research keywords & skills setup',
      'Featured projects & publications section',
      'Guide to networking with current scholars'
    ]
  }
]

export const COMPARISON_MATRIX = [
  { feature: 'University & Course Selection', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'Eligibility Check & Profile Assessment', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'CV Review & Academic Formatting', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'Motivation Letter / Personal Statement', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'Scholarship Search Assistance', c1: 'Basic', c2: 'Included', c4: '✓ Comprehensive', c7: '✓ Full Search & Matching' },
  { feature: 'Official Portal Application Guidance', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'Document Checklist & Tracking', c1: '✓', c2: '✓', c4: '✓', c7: '✓' },
  { feature: 'Priority Advisor Support & Consultation', c1: '—', c2: '—', c4: '✓ Priority', c7: '✓ VIP Priority' }
]
