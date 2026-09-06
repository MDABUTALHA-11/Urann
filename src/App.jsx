import { useState, useMemo, useRef } from 'react'
import uraanLogo from './assets/uraan_logo.png'
import heroVideo from './assets/student_journey.mp4'

// Icons
import {
  Search,
  ShieldCheck,
  Globe,
  GraduationCap,
  Landmark,
  FileText,
  Plane,
  Users,
  ArrowRight,
  Clock,
  Check,
  Send,
  UserPlus,
  Menu,
  X,
  ExternalLink,
  MoonStar,
  SunMedium,
  Download,
  Copy,
  CheckCheck,
  Printer,
  Sparkles,
  FileDown,
  Star,
  MessageCircle,
  Compass,
  BookOpen,
  DollarSign,
  CheckCircle2,
  MapPin,
  Award,
  Tag,
  BadgePercent,
  Layers,
  Lock,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react'

// Demo Template Generator Helpers
import {
  generateTemplates,
  downloadDocFile,
  downloadTxtFile
} from './demoTemplates.js'

// Master Scholarship & Country Datasets
import {
  SCHOLARSHIPS_DATA,
  POPULAR_SCHOLARSHIPS_IDS,
  STUDY_ABROAD_COUNTRIES,
  STUDENT_TOOLS,
  BANGLADESH_RESOURCES,
  COUNTRY_PRICING_PLANS,
  MULTI_COUNTRY_PACKAGES,
  ADDON_SERVICES,
  COMPARISON_MATRIX
} from './scholarshipsData.js'

import ContinentsScholarships from './components/ContinentsScholarships'
import './App.css'

// Official WhatsApp Community Group URL
const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/IIEuJnY77PK0xOIweN57rJ?s=cl&p=a&mlu=4&ilr=4'

function App() {
  // Navigation & Display State
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('all')

  const filteredAddonServices = useMemo(() => {
    if (selectedServiceCategory === 'all') return ADDON_SERVICES
    return ADDON_SERVICES.filter((item) => item.category === selectedServiceCategory)
  }, [selectedServiceCategory])

  // Hero Background Video State & Controls
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // 7 Continents Navigation State
  const [selectedContinent, setSelectedContinent] = useState('all')

  // Search & Smart Filters State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDegree, setSelectedDegree] = useState('all')
  const [selectedFunding, setSelectedFunding] = useState('all')
  const [_selectedIelts, setSelectedIelts] = useState('all')
  const [_selectedStatus, setSelectedStatus] = useState('all')
  const [_quickFilterChip, setQuickFilterChip] = useState('All')

  // Modals State
  const [selectedScholarshipModal, setSelectedScholarshipModal] = useState(null)
  const [selectedCountryModal, setSelectedCountryModal] = useState(null)
  const [showCommunityModal, setShowCommunityModal] = useState(false)
  const [showTemplateDownloaderModal, setShowTemplateDownloaderModal] = useState(false)
  const [previewModalTemplate, setPreviewModalTemplate] = useState(null)
  const [showVisaDhakaModal, setShowVisaDhakaModal] = useState(false)
  const [showIeltsWaiverModal, setShowIeltsWaiverModal] = useState(false)
  const [selectedPlanBookingModal, setSelectedPlanBookingModal] = useState(null)
  const [planBookingForm, setPlanBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    degree: 'Master',
    cgpa: '',
    notes: ''
  })
  const [planBookingSubmitted, setPlanBookingSubmitted] = useState(false)

  // Demo Templates Given-Name Generator State
  const [givenName, setGivenName] = useState('Ayesha Rahman')
  const [customField, setCustomField] = useState('Computer Science & Engineering')
  const [customDegree, setCustomDegree] = useState("Master's")
  const [customCountry, setCustomCountry] = useState('Germany')
  const [copied, setCopied] = useState(false)

  // Bangladesh Calculator State
  const [calcCurrency, setCalcCurrency] = useState('EUR')
  const [calcAmount, setCalcAmount] = useState(934)

  // Community Form State
  const [communityForm, setCommunityForm] = useState({
    name: '',
    email: '',
    targetCountry: 'Germany',
    degree: 'Master'
  })
  const [communitySubmitted, setCommunitySubmitted] = useState(false)

  // Floating WhatsApp State
  const [whatsappCardOpen, setWhatsappCardOpen] = useState(false)
  const [whatsappHovered, setWhatsappHovered] = useState(false)

  // Generate dynamic templates based on given name and fields
  const demoTemplates = useMemo(() => {
    return generateTemplates(givenName, customField, customDegree, customCountry)
  }, [givenName, customField, customDegree, customCountry])

  // Top 10 Popular Scholarships
  const popularScholarships = useMemo(() => {
    return POPULAR_SCHOLARSHIPS_IDS.map((id) =>
      SCHOLARSHIPS_DATA.find((item) => item.id === id)
    ).filter(Boolean)
  }, [])

  // Navigation Helper
  const navigateTo = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll to explorer section
  const scrollToExplorer = (continent = 'all') => {
    setSelectedContinent(continent)
    const el = document.getElementById('scholarship-explorer')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle Community Submit
  const handleCommunitySubmit = (e) => {
    e.preventDefault()
    setCommunitySubmitted(true)
  }

  // Handle Copy Full Text
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  // Interactive Student Tools Trigger
  const handleToolClick = (toolId) => {
    if (toolId === 'cv-builder' || toolId === 'sop-generator') {
      setShowTemplateDownloaderModal(true)
    } else if (toolId === 'scholarship-finder') {
      scrollToExplorer('all')
    } else if (toolId === 'cost-calculator') {
      const el = document.getElementById('bangladesh-hub')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (toolId === 'visa-requirements' || toolId === 'document-attestation') {
      setShowVisaDhakaModal(true)
    } else if (toolId === 'ielts-moi-guide') {
      setShowIeltsWaiverModal(true)
    } else if (toolId === 'university-finder' || toolId === 'country-comparison') {
      const el = document.getElementById('study-destinations')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (toolId === 'deadline-tracker') {
      setSelectedStatus('Open')
      setQuickFilterChip('Open Now')
      scrollToExplorer('all')
    }
  }

  // Calculate live BDT value
  const bdtCalculatedValue = useMemo(() => {
    const rate = BANGLADESH_RESOURCES.currencyRates[calcCurrency] || 130.5
    return Math.round(calcAmount * rate).toLocaleString('en-IN')
  }, [calcCurrency, calcAmount])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* ====================================================================
          TOP NAVBAR: Modern SaaS Style with Royal Blue Ribbon
         ==================================================================== */}
      <header className="site-header">
        <div className="container nav-container">
          {/* Brand Logo */}
          <div className="brand-logo" onClick={() => navigateTo('home')}>
            <div className="brand-cap-wrap">
              <img src={uraanLogo} alt="Uraan Logo" className="brand-cap-img" />
            </div>
            <span className="brand-name">Ur<span>aan</span></span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-menu" aria-label="Main Navigation">
            <button
              type="button"
              className={`nav-item-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              Home
            </button>
            <button
              type="button"
              className={`nav-item-link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => navigateTo('services')}
              style={{ color: currentPage === 'services' ? '#dc2626' : '#92400e', fontWeight: 700 }}
            >
              🛠️ Standalone Services
            </button>
            <button
              type="button"
              className={`nav-item-link ${currentPage === 'pricing' ? 'active' : ''}`}
              onClick={() => navigateTo('pricing')}
              style={{ color: currentPage === 'pricing' ? '#dc2626' : '#dc2626', fontWeight: 700 }}
            >
              🏷️ Plans & Pricing
            </button>
            <button
              type="button"
              className="nav-item-link"
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home')
                setTimeout(() => scrollToExplorer('all'), 80)
              }}
            >
              Scholarships
            </button>
            <button
              type="button"
              className="nav-item-link"
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home')
                setTimeout(() => {
                  const el = document.getElementById('popular-scholarships')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 80)
              }}
            >
              Popular Awards
            </button>
            <button
              type="button"
              className="nav-item-link"
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home')
                setTimeout(() => {
                  const el = document.getElementById('study-destinations')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 80)
              }}
            >
              Countries
            </button>
            <button
              type="button"
              className="nav-item-link"
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home')
                setTimeout(() => {
                  const el = document.getElementById('student-tools')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 80)
              }}
            >
              Student Tools
            </button>
            <button
              type="button"
              className="nav-item-link"
              onClick={() => {
                if (currentPage !== 'home') navigateTo('home')
                setTimeout(() => {
                  const el = document.getElementById('bangladesh-hub')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 80)
              }}
              style={{ color: '#059669', fontWeight: 700 }}
            >
              🇧🇩 Made for BD
            </button>
          </nav>

          {/* Right Actions */}
          <div className="nav-actions-group">
            <button
              className="nav-icon-btn"
              aria-label="Toggle Dark Mode"
              onClick={() => setDarkMode((prev) => !prev)}
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {darkMode ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>

            <button
              className="btn-download-templates-nav"
              onClick={() => setShowTemplateDownloaderModal(true)}
              title="Download Demo CV, Motivation Letter & SOP with Given Name"
            >
              <Download size={14} />
              <span>Free CV & SOP</span>
            </button>

            <button
              className="btn-join-community"
              onClick={() => setShowCommunityModal(true)}
              title="Join Uraan Community & WhatsApp Group"
            >
              <UserPlus size={15} />
              <span>Join Community</span>
            </button>

            <button
              className="mobile-nav-toggle"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <button className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>🏠 Home</button>
            <button className={`mobile-nav-link ${currentPage === 'services' ? 'active' : ''}`} onClick={() => navigateTo('services')}>🛠️ Standalone Services (Dedicated Page)</button>
            <button className={`mobile-nav-link ${currentPage === 'pricing' ? 'active' : ''}`} onClick={() => navigateTo('pricing')}>🏷️ Application Plans & Pricing (Dedicated Page)</button>
            <button className="mobile-nav-link" onClick={() => { if (currentPage !== 'home') navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => scrollToExplorer('all'), 80); }}>🎓 Scholarships (7 Continents)</button>
            <button className="mobile-nav-link" onClick={() => { setMobileMenuOpen(false); setShowTemplateDownloaderModal(true); }}>📄 Free CV, Motivation & SOP Builder</button>
            <button className="mobile-nav-link" onClick={() => { if (currentPage !== 'home') navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => { const el = document.getElementById('bangladesh-hub'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 80); }}>💰 BDT Cost & Solvency Calculator</button>
            <button className="mobile-nav-link" onClick={() => { setMobileMenuOpen(false); setShowVisaDhakaModal(true); }}>🛂 Dhaka Visa & Attestation Guide</button>
            <button className="mobile-nav-link" onClick={() => { setMobileMenuOpen(false); setShowCommunityModal(true); }}>💬 Join Official WhatsApp Community</button>
          </div>
        )}
      </header>

      <main>
        {/* ====================================================================
            PAGE 1: HOME PAGE
           ==================================================================== */}
        {currentPage === 'home' && (
          <>
            {/* ====================================================================
                HERO VIDEO BANNER: Student Journey Video with Cinematic Text Overlay
                Positioned directly after the Navbar
               ==================================================================== */}
        <section className="hero-video-banner-section" aria-label="Student Journey Video Banner">
          <div className="hero-video-wrapper">
            <video
              ref={videoRef}
              className="hero-video-player"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
            >
              <source src={heroVideo} type="video/mp4" />
              <source src={`${import.meta.env.BASE_URL}vid/student_journey.mp4`} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Dark & Frosted Vignette Overlay for Readability */}
            <div className="hero-video-overlay" />

            {/* Text & Action Layer Overlaid on Top of the Video */}
            <div className="hero-video-content-container">
              <div className="hero-video-badge">
                <Sparkles size={15} />
                <span>Student Journey &bull; Global Education & Scholarships 2026/27</span>
              </div>

              <h1 className="hero-video-title">
                Your Global Education<br />
                <span>Journey Starts Here</span>
              </h1>

              <p className="hero-video-description">
                Discover real fully funded scholarships, world-class universities, and proven admission pathways — tailored for students from Bangladesh to 40+ countries worldwide.
              </p>

              {/* Action Buttons on the Video */}
              <div className="hero-video-cta-group">
                <button
                  type="button"
                  className="btn-hero-video-primary"
                  onClick={() => {
                    const el = document.getElementById('scholarship-finder-card') || document.getElementById('scholarship-explorer')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Search size={16} />
                  <span>Explore Scholarships Now</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  className="btn-hero-video-secondary"
                  onClick={() => setShowTemplateDownloaderModal(true)}
                >
                  <Download size={16} />
                  <span>Free CV, Motivation & SOP Builder</span>
                </button>

                <button
                  type="button"
                  className="btn-hero-video-glass"
                  onClick={() => {
                    const el = document.getElementById('pricing-plans')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Tag size={15} />
                  <span>Application Plans (৳2k-৳4k)</span>
                </button>
              </div>

              {/* Stats Highlights Overlaid on Video */}
              <div className="hero-video-stats-strip">
                <div className="hero-video-stat-item">
                  <span className="stat-val">120+</span>
                  <span className="stat-lbl">Verified Scholarships</span>
                </div>
                <div className="hero-video-stat-divider" />
                <div className="hero-video-stat-item">
                  <span className="stat-val">40+</span>
                  <span className="stat-lbl">Destination Countries</span>
                </div>
                <div className="hero-video-stat-divider" />
                <div className="hero-video-stat-item">
                  <span className="stat-val">100%</span>
                  <span className="stat-lbl">Official Portal Links</span>
                </div>
                <div className="hero-video-stat-divider" />
                <div className="hero-video-stat-item">
                  <span className="stat-val">🇧🇩 Bangladesh Hub</span>
                  <span className="stat-lbl">BDT Solvency & Visa Guide</span>
                </div>
              </div>

              {/* Interactive Video Playback & Sound Controls */}
              <div className="hero-video-controls-bar">
                <button
                  type="button"
                  className="hero-video-ctrl-btn"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
                  title={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  type="button"
                  className="hero-video-ctrl-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SMART SCHOLARSHIP FINDER CARD & TRUST INDICATORS
           ==================================================================== */}
        <section id="scholarship-finder-card" className="hero-saas-section" style={{ paddingTop: '32px' }}>
          <div className="container hero-content-center">
            {/* Google Flights-style Smart Scholarship Finder Card */}
            <div className="hero-finder-card">
              <div className="finder-fields-grid">
                {/* Search Term / Keyword Input */}
                <div className="finder-input-box">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Country, scholarship, or field (e.g. Germany, MEXT, AI)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      style={{ color: '#94a3b8', padding: '2px 6px', fontSize: '0.8rem' }}
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Degree Level Filter */}
                <div className="finder-input-box">
                  <GraduationCap size={18} />
                  <select
                    value={selectedDegree}
                    onChange={(e) => setSelectedDegree(e.target.value)}
                    aria-label="Filter by Degree Level"
                  >
                    <option value="all">All Degrees</option>
                    <option value="Master">Master’s Degree</option>
                    <option value="Bachelor">Bachelor’s Degree</option>
                    <option value="PhD">PhD / Doctoral</option>
                  </select>
                </div>

                {/* Funding Type Filter */}
                <div className="finder-input-box">
                  <Award size={18} />
                  <select
                    value={selectedFunding}
                    onChange={(e) => setSelectedFunding(e.target.value)}
                    aria-label="Filter by Funding Type"
                  >
                    <option value="all">All Funding Types</option>
                    <option value="Fully Funded">Fully Funded (100%)</option>
                    <option value="Tuition Waiver">Tuition Waiver</option>
                  </select>
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  className="finder-cta-btn"
                  onClick={() => scrollToExplorer(selectedContinent)}
                >
                  <span>Find Scholarships</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Quick Hero Actions */}
            <div className="hero-quick-actions">
              <button
                className="btn-hero-primary"
                onClick={() => scrollToExplorer('all')}
              >
                <Search size={16} />
                <span>Find Scholarships</span>
              </button>
              <button
                className="btn-hero-secondary"
                onClick={() => {
                  const el = document.getElementById('study-destinations')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Compass size={16} />
                <span>Explore Countries</span>
              </button>
              <button
                className="btn-hero-secondary"
                onClick={() => setShowTemplateDownloaderModal(true)}
                style={{ borderColor: '#facc15', color: '#854d0e', background: '#fefce8' }}
              >
                <FileText size={16} />
                <span>Download CV & SOP (Given Name)</span>
              </button>
            </div>

            {/* Trust Indicators: 4 Clean Badges */}
            <div className="hero-trust-indicators">
              <div className="trust-card">
                <div className="trust-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>Verified Information</strong>
                  <span>100% vetted criteria</span>
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon-box">
                  <Landmark size={18} />
                </div>
                <div>
                  <strong>Official Sources</strong>
                  <span>Government & university portals</span>
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon-box">
                  <Globe size={18} />
                </div>
                <div>
                  <strong>Global Universities</strong>
                  <span>40+ destination countries</span>
                </div>
              </div>

              <div className="trust-card">
                <div className="trust-icon-box">
                  <Star size={18} />
                </div>
                <div>
                  <strong>Free Scholarship Search</strong>
                  <span>Zero agency fees for students</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            GLOBAL STATISTICS BAR
           ==================================================================== */}
        <section className="stats-banner-strip">
          <div className="container stats-grid-row">
            <div className="stat-item-block">
              <div className="stat-num-val">120+</div>
              <div className="stat-label-text">Verified Scholarships</div>
            </div>
            <div className="stat-item-block">
              <div className="stat-num-val">40+</div>
              <div className="stat-label-text">Host Countries</div>
            </div>
            <div className="stat-item-block">
              <div className="stat-num-val">7 Continents</div>
              <div className="stat-label-text">Global Coverage</div>
            </div>
            <div className="stat-item-block">
              <div className="stat-num-val">100%</div>
              <div className="stat-label-text">Official Sources</div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SCHOLARSHIP EXPLORER — 7 CONTINENTS DATABASE
           ==================================================================== */}
        <ContinentsScholarships
          initialContinent={selectedContinent}
          onSelectScholarship={(sch) => {
            const matched = SCHOLARSHIPS_DATA.find(
              (s) =>
                s.country.toLowerCase() === sch.country.toLowerCase() ||
                s.name.toLowerCase().includes(sch.title.toLowerCase()) ||
                sch.title.toLowerCase().includes(s.shortName?.toLowerCase() || '')
            ) || {
              id: sch.title.toLowerCase().replace(/\s+/g, '-'),
              name: sch.title,
              country: sch.country,
              flag: sch.flag,
              degree: sch.degree,
              degreeLevel: sch.degree,
              fundingType: sch.funding,
              coverage: {
                tuition: true,
                stipend: true,
                accommodation: true,
                airfare: true,
                healthInsurance: true
              },
              stipendAmount: sch.stipend || 'Generous monthly living stipend & tuition coverage',
              deadline: sch.deadline,
              status: 'Open',
              officialSource: `${sch.country} Official Portal`,
              officialUrl: sch.officialUrl || 'https://google.com',
              badge: '✓ Verified Scholarship',
              description: `Official ${sch.title} offering verified higher education opportunities in ${sch.country}.`,
              bangladeshiTips: {
                cgpa: 'Minimum 3.20 / 4.00 recommended for high acceptance probability',
                ielts: 'IELTS 6.5 or institutional English Medium of Instruction (MOI)',
                embassy: `${sch.country} Embassy & Visa Application Center in Dhaka`,
                attestation: 'MOFA Dhaka and Education Ministry attestation required'
              }
            }
            setSelectedScholarshipModal(matched)
          }}
        />

        {/* ====================================================================
            POPULAR FULLY FUNDED SCHOLARSHIPS SECTION
           ==================================================================== */}
        <section id="popular-scholarships" className="section-popular-scholarships">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="section-tag-pill">
                  <Star size={13} /> Premier Opportunities
                </span>
                <h2 className="section-title">Popular Fully Funded Scholarships</h2>
                <p className="section-subtitle">
                  The most sought-after national and international scholarship programs with guaranteed full tuition, generous living stipends, and visa sponsorship.
                </p>
              </div>

              <button
                className="btn-card-official-apply"
                onClick={() => {
                  setQuickFilterChip('Fully Funded')
                  scrollToExplorer('all')
                }}
              >
                <span>View All Fully Funded ({SCHOLARSHIPS_DATA.filter(s => s.fundingType === 'Fully Funded').length})</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="popular-sch-grid">
              {popularScholarships.map((pop) => (
                <div key={pop.id} className="popular-sch-card">
                  <div className="pop-badge-top">
                    <span className="pop-country-flag">{pop.flag}</span>
                    <span className="pop-funded-tag">Fully Funded</span>
                  </div>

                  <h3>{pop.shortName}</h3>
                  <div className="pop-sub-info">
                    {pop.country} &bull; {pop.degreeLevel}
                  </div>

                  <p className="pop-desc">{pop.description}</p>

                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    <Clock size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    Deadline: <strong>{pop.deadline}</strong>
                  </div>

                  <button
                    className="btn-pop-view"
                    onClick={() => setSelectedScholarshipModal(pop)}
                  >
                    <span>View Scholarship →</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            EXPLORE STUDY DESTINATIONS (Country Cards)
           ==================================================================== */}
        <section id="study-destinations" className="section-destinations">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="section-tag-pill">
                  <Plane size={13} /> Global Study Hubs
                </span>
                <h2 className="section-title">Explore Study Destinations</h2>
                <p className="section-subtitle">
                  Discover tuition-free and high-opportunity destinations offering post-study work permits, affordable living, and verified scholarship pathways.
                </p>
              </div>

              <div className="results-counter-text">
                8 Premier Destination Guides Available
              </div>
            </div>

            <div className="destinations-grid-row">
              {STUDY_ABROAD_COUNTRIES.map((dest) => (
                <div
                  key={dest.name}
                  className="destination-card-pro"
                  onClick={() => setSelectedCountryModal(dest)}
                >
                  <div className="dest-photo-box-pro">
                    <img src={dest.image} alt={dest.name} loading="lazy" />
                    <span className="dest-flag-overlay">{dest.flag}</span>
                    <span className="dest-sch-count-tag">{dest.scholarshipsCount}</span>
                  </div>

                  <div className="dest-card-content-pro">
                    <h3>{dest.name}</h3>

                    <div className="dest-specs-list">
                      <div className="dest-spec-row">
                        <span>Universities:</span>
                        <strong>{dest.universities}</strong>
                      </div>
                      <div className="dest-spec-row">
                        <span>Tuition:</span>
                        <strong style={{ color: dest.tuitionRange.includes('€0') ? '#15803d' : 'inherit' }}>
                          {dest.tuitionRange}
                        </strong>
                      </div>
                      <div className="dest-spec-row">
                        <span>Living Cost:</span>
                        <strong>{dest.livingCost}</strong>
                      </div>
                      <div className="dest-spec-row">
                        <span>Post-Study Visa:</span>
                        <strong>{dest.postStudyVisa}</strong>
                      </div>
                    </div>

                    <button className="btn-explore-country">
                      <span>Explore {dest.name}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            HOW URAAN WORKS: 4-STEP JOURNEY
           ==================================================================== */}
        <section className="section-how-works">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
              <span className="section-tag-pill">
                <Compass size={13} /> Step-by-Step Roadmap
              </span>
              <h2 className="section-title">How Uraan Works</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                A transparent 4-step framework engineered to take international applicants from zero to accepted with full scholarship funding.
              </p>
            </div>

            <div className="steps-four-grid">
              <div className="step-card-item">
                <div className="step-num-pill">01 — Explore</div>
                <h3>Find Opportunities</h3>
                <p>
                  Discover verified scholarships, top universities and study destinations matching your GPA and budget.
                </p>
              </div>

              <div className="step-card-item">
                <div className="step-num-pill">02 — Check Eligibility</div>
                <h3>Compare Requirements</h3>
                <p>
                  Review GPA equivalence, language test rules, blocked account requirements, and funding benefits.
                </p>
              </div>

              <div className="step-card-item">
                <div className="step-num-pill">03 — Prepare</div>
                <h3>Generate Documents</h3>
                <p>
                  Build custom academic CVs, winning Statements of Purpose (SOP), and professor cold emails customized with your given name.
                </p>
              </div>

              <div className="step-card-item">
                <div className="step-num-pill">04 — Apply & Track</div>
                <h3>Submit & Secure Visa</h3>
                <p>
                  Submit your application directly on official government/university portals and follow our Dhaka embassy visa roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            STUDENT TOOLS: Everything You Need to Study Abroad
           ==================================================================== */}
        <section id="student-tools" className="section-student-tools">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="section-tag-pill">
                  <Sparkles size={13} /> Student Productivity Suite
                </span>
                <h2 className="section-title">Everything You Need to Study Abroad</h2>
                <p className="section-subtitle">
                  Free interactive tools, calculators, document builders, and checklists to streamline your study abroad preparation.
                </p>
              </div>

              <button
                className="btn-card-view-details"
                onClick={() => setShowTemplateDownloaderModal(true)}
              >
                <Download size={14} />
                <span>Open CV & SOP Generator</span>
              </button>
            </div>

            <div className="tools-cards-grid">
              {STUDENT_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="tool-card-box"
                  onClick={() => handleToolClick(tool.id)}
                >
                  <div className="tool-icon-bubble">{tool.icon}</div>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                  <div className="tool-badge-pill">
                    <span>{tool.actionText}</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            MADE FOR BANGLADESHI STUDENTS SECTION
           ==================================================================== */}
        <section id="bangladesh-hub" className="section-bangladesh-hub">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
              <span className="section-tag-pill" style={{ background: '#dcfce7', color: '#15803d' }}>
                🇧🇩 Bangladesh Focus
              </span>
              <h2 className="section-title">Made for Bangladeshi Students</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Tailored solutions for Bangladeshi applicants: BDT cost calculations, Dhaka Embassy locations, Education Board to MOFA attestation guidelines, and CGPA equivalencies.
              </p>
            </div>

            <div className="bd-hub-layout">
              {/* Left: Live BDT Expense & Solvency Calculator */}
              <div className="bd-calculator-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '2px' }}>Live BDT Cost & Solvency Calculator</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Updated exchange rates (1 EUR ≈ 130.5 BDT | 1 USD ≈ 121.2 BDT)
                    </span>
                  </div>
                </div>

                <div className="bd-calc-inputs-row">
                  <div className="form-field-group">
                    <label>Select Currency</label>
                    <select
                      value={calcCurrency}
                      onChange={(e) => setCalcCurrency(e.target.value)}
                    >
                      <option value="EUR">Euro (€ - Germany, Italy, Finland)</option>
                      <option value="USD">US Dollar ($ - USA, KAUST)</option>
                      <option value="GBP">British Pound (£ - UK)</option>
                      <option value="CAD">Canadian Dollar (CAD - Canada)</option>
                      <option value="AUD">Australian Dollar (AUD - Australia)</option>
                      <option value="JPY">Japanese Yen (¥ - Japan)</option>
                      <option value="KRW">Korean Won (₩ - Korea)</option>
                      <option value="SEK">Swedish Krona (SEK - Sweden)</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label>Amount in Foreign Currency</label>
                    <input
                      type="number"
                      value={calcAmount}
                      onChange={(e) => setCalcAmount(Number(e.target.value) || 0)}
                      placeholder="e.g. 934"
                    />
                  </div>
                </div>

                {/* Live Output */}
                <div className="bd-calc-results-box">
                  <div className="bd-calc-stat-row">
                    <span>Equivalent in Bangladeshi Taka:</span>
                    <span className="bd-calc-bdt-val">≈ {bdtCalculatedValue} BDT</span>
                  </div>
                  <div className="bd-calc-stat-row">
                    <span>Standard Blocked Account (Germany €11,904):</span>
                    <strong>≈ 1,553,472 BDT</strong>
                  </div>
                  <div className="bd-calc-stat-row">
                    <span>Standard Blocked Account (Italy €6,079):</span>
                    <strong>≈ 793,310 BDT (Waived with DSU)</strong>
                  </div>
                  <div className="bd-calc-stat-row">
                    <span>Standard Blocked Account (Finland €6,720):</span>
                    <strong>≈ 876,960 BDT</strong>
                  </div>
                </div>

                <button
                  className="btn-card-view-details"
                  style={{ width: '100%' }}
                  onClick={() => setShowVisaDhakaModal(true)}
                >
                  <span>View Dhaka Embassy & VFS Appointment Guide</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Right: 5-Step Attestation Roadmap */}
              <div className="bd-roadmap-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '2px' }}>Document Attestation Roadmap</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Mandatory 5-tier verification for European & Asian student visas
                    </span>
                  </div>
                </div>

                <div className="attestation-steps-list">
                  {BANGLADESH_RESOURCES.attestationSteps.map((s) => (
                    <div key={s.step} className="attestation-step-item">
                      <div className="attestation-num-bubble">{s.step}</div>
                      <div className="attestation-step-info">
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            FINAL CTA: Your Dream University
           ==================================================================== */}
        <section className="section-final-cta">
          <div className="container final-cta-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.15)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.85rem', marginBottom: '16px' }}>
              <Sparkles size={14} /> Start Your Global Career
            </div>
            <h2>Your Dream University Could Be One Application Away.</h2>
            <p>
              Find scholarships, choose your destination and start your journey today. Access verified government scholarship links, customized templates, and peer support.
            </p>

            <div className="final-cta-buttons-row">
              <button
                className="btn-cta-white"
                onClick={() => scrollToExplorer('all')}
              >
                <span>Find Scholarships</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn-cta-ghost"
                onClick={() => {
                  const el = document.getElementById('study-destinations')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Explore Countries</span>
                <Compass size={16} />
              </button>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-cta-ghost"
                style={{ background: '#25d366', borderColor: '#22c55e', color: '#ffffff' }}
              >
                <MessageCircle size={17} />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>
          </div>
        </section>
        </>
        )}

        {/* ====================================================================
            PAGE 2: DEDICATED APPLICATION PLANS & PRICING
           ==================================================================== */}
        {currentPage === 'pricing' && (
          <section id="pricing-plans" className="section-pricing-plans" style={{ paddingTop: '48px', minHeight: '80vh' }}>
            <div className="container">
              {/* Breadcrumbs */}
              <div className="services-breadcrumb">
                <button type="button" onClick={() => navigateTo('home')}>Home</button>
                <span>/</span>
                <span>Application Plans & Pricing</span>
              </div>

              {/* Section Header */}
              <div className="pricing-header-center">
                <span className="section-tag-pill" style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}>
                  <Tag size={13} /> Affordable & Professional Application Support
                </span>
                <h1 className="section-title" style={{ fontSize: '2.4rem' }}>Uraan Application Plans & Pricing</h1>
                <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
                  Professional, transparent, and student-first study abroad guidance. High-touch mentorship priced affordably for Bangladeshi applicants targeting global scholarships and admissions.
                </p>
              </div>

              {/* Prominent Service Fee & Third-Party Disclaimer Banner */}
              <div className="pricing-service-fee-banner">
                <div className="pricing-fee-badge">
                  <ShieldCheck size={16} />
                  <span>Uraan Service Fee</span>
                </div>
                <p className="pricing-fee-disclaimer-text">
                  <strong>Notice:</strong> University application fees, visa fees, embassy fees and other official third-party charges are not included.
                </p>
              </div>

              {/* 🌍 1. COUNTRY APPLICATION PLANS (7 Cards) */}
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                      🌍 Country Application Plans
                    </h3>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      Complete end-to-end guidance for single destination countries starting from ৳2,500 to ৳4,000
                    </span>
                  </div>
                </div>

                <div className="pricing-country-grid">
                  {COUNTRY_PRICING_PLANS.map((plan) => (
                    <div
                      key={plan.id}
                      className={`pricing-country-card ${plan.popular ? 'popular-card' : ''} ${plan.badge === 'SCHOLARSHIP FOCUS' ? 'scholarship-focus-card' : ''}`}
                    >
                      {plan.badge && (
                        <span className={`pricing-card-badge ${plan.popular ? 'popular' : 'focus'}`}>
                          {plan.badge}
                        </span>
                      )}

                      <div className="pricing-country-header">
                        <div className="pricing-flag-circle">{plan.flag}</div>
                        <div>
                          <h3>{plan.title}</h3>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                            {plan.country}
                          </span>
                        </div>
                      </div>

                      <div className="pricing-price-box">
                        <div className="pricing-amount-val">
                          {plan.priceFormatted}
                          <span className="pricing-amount-sub">/ Uraan Service Fee</span>
                        </div>
                      </div>

                      <ul className="pricing-features-list">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="pricing-feature-item">
                            <Check size={15} className="pricing-feature-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className="btn-pricing-cta"
                        onClick={() => {
                          setSelectedPlanBookingModal({ type: 'country', item: plan })
                          setPlanBookingSubmitted(false)
                        }}
                      >
                        <span>{plan.ctaText}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 📦 2. MULTI-COUNTRY APPLICATION PACKAGES (2, 4, 7-Country Plans) */}
              <div className="multi-country-section">
                <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                  <span className="package-savings-pill green" style={{ margin: '0 auto 10px' }}>
                    <BadgePercent size={13} /> Multi-Country Bundle & Save
                  </span>
                  <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    Multi-Country Application Packages
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0 }}>
                    Diversify your applications across multiple nations to maximize admission and scholarship chances while saving substantially on advisor support.
                  </p>
                </div>

                <div className="multi-packages-grid">
                  {MULTI_COUNTRY_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`package-card ${pkg.hero ? 'hero-pkg' : ''} ${pkg.popular ? 'popular-pkg' : ''}`}
                    >
                      {pkg.hero && (
                        <span className="package-hero-badge">
                          ⭐ {pkg.badge}
                        </span>
                      )}
                      {pkg.popular && (
                        <span className="package-popular-badge">
                          🔥 {pkg.badge}
                        </span>
                      )}

                      <span className={`package-savings-pill ${pkg.hero ? 'purple' : pkg.popular ? 'blue' : 'green'}`}>
                        <BadgePercent size={13} /> {pkg.savingsText}
                      </span>

                      <div className="package-title-row">
                        <h3>{pkg.title}</h3>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          Up to {pkg.countriesCount} target destination countries
                        </span>
                      </div>

                      <div className="package-pricing-row">
                        <div className="pkg-strikethrough-price">{pkg.originalPriceFormatted}</div>
                        <div className="pkg-current-price">{pkg.priceFormatted}</div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Uraan Service Fee (All {pkg.countriesCount} countries)</span>
                      </div>

                      <ul className="pricing-features-list">
                        {pkg.features.map((f, idx) => (
                          <li key={idx} className="pricing-feature-item">
                            <Check size={15} className="pricing-feature-check" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={pkg.hero ? 'btn-pkg-hero' : 'btn-pricing-cta'}
                        onClick={() => {
                          setSelectedPlanBookingModal({ type: 'package', item: pkg })
                          setPlanBookingSubmitted(false)
                        }}
                      >
                        <span>{pkg.ctaText}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 📊 3. QUICK COMPARISON MATRIX */}
              <div className="pricing-comparison-section">
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 16px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Quick Plan Comparison
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                    Side-by-side comparison of features included across single and multi-country packages.
                  </p>
                </div>

                <div className="mobile-swipe-hint">
                  <ArrowRight size={13} />
                  <span>Swipe horizontally to view all country packages</span>
                </div>

                <div className="comparison-table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '220px' }}>Features & Deliverables</th>
                        <th style={{ textAlign: 'center' }}>1 Country</th>
                        <th style={{ textAlign: 'center' }}>2 Countries</th>
                        <th style={{ textAlign: 'center', background: '#eff6ff', color: '#1d4ed8' }}>4 Countries (Popular)</th>
                        <th style={{ textAlign: 'center', background: '#f5f3ff', color: '#6d28d9' }}>7 Countries (Hero)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_MATRIX.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.feature}</td>
                          <td style={{ textAlign: 'center' }}>{row.c1}</td>
                          <td style={{ textAlign: 'center' }}>{row.c2}</td>
                          <td style={{ textAlign: 'center', background: 'rgba(37, 99, 235, 0.03)', fontWeight: 600 }}>{row.c4}</td>
                          <td style={{ textAlign: 'center', background: 'rgba(109, 40, 217, 0.03)', fontWeight: 700, color: '#6d28d9' }}>{row.c7}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ⚖️ 4. TRANSPARENCY NOTICE & DISCLAIMERS */}
              <div className="pricing-transparency-card">
                <div className="transparency-header">
                  <Lock size={20} className="transparency-icon" />
                  <h4>Uraan Service Scope & Transparency Notice</h4>
                </div>
                <p className="transparency-text">
                  <strong>Uraan Service Fee Coverage:</strong> Uraan charges exclusively for professional advisory support, profile assessment, university course shortlisting, SOP & motivation letter editing, portal application navigation, and document compliance checks.
                </p>
                <p className="transparency-text">
                  <strong>Third-Party Official Charges:</strong> University application fees, visa fees, embassy fees and other official third-party charges are not included. All institutional application fees (e.g. Uni-Assist, UCAS, university direct portals) and visa/embassy processing charges must be settled directly with the respective official entities.
                </p>
                <p className="transparency-text">
                  <strong>Admission Discretion:</strong> While our expert review strictly enhances acceptance probabilities and scholarship competitiveness, university admissions and visa decisions rest exclusively with university faculties and immigration embassies.
                </p>
              </div>

              {/* 🚀 5. MAIN PRICING BOTTOM CTA */}
              <div className="pricing-bottom-cta-box">
                <h3>Ready to Start Your Study Abroad Journey?</h3>
                <p>
                  Get personal guidance from experienced counselors who have helped Bangladeshi students successfully secure admissions and scholarships worldwide.
                </p>
                <div className="pricing-cta-btn-group">
                  <button
                    className="btn-pricing-main-white"
                    onClick={() => navigateTo('services')}
                  >
                    <span>Explore Standalone Services (৳500–৳1k) →</span>
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent('Hello Uraan team! I am interested in your Study Abroad Application Support Plans.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pricing-main-wa"
                  >
                    <MessageCircle size={18} />
                    <span>Talk to an Advisor on WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ====================================================================
            PAGE 3: DEDICATED STANDALONE SERVICES PAGE
           ==================================================================== */}
        {currentPage === 'services' && (
          <section className="section-services-page">
            <div className="container">
              {/* Breadcrumb */}
              <div className="services-breadcrumb">
                <button type="button" onClick={() => navigateTo('home')}>Home</button>
                <span>/</span>
                <span>Standalone Services</span>
              </div>

              {/* Page Header */}
              <div className="services-page-header">
                <span className="section-tag-pill" style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a', marginBottom: '12px' }}>
                  <Layers size={13} /> Modular A-la-Carte Assistance
                </span>
                <h1 className="section-title" style={{ fontSize: '2.4rem' }}>
                  Uraan Standalone Application Services
                </h1>
                <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
                  Pick only the exact assistance you need for your study-abroad application without committing to full agency fees. Fast 24–72 hour turnaround with senior Bangladeshi scholar mentorship.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="services-filter-row">
                <button
                  type="button"
                  className={`service-filter-btn ${selectedServiceCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedServiceCategory('all')}
                >
                  All Services ({ADDON_SERVICES.length})
                </button>
                <button
                  type="button"
                  className={`service-filter-btn ${selectedServiceCategory === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedServiceCategory('writing')}
                >
                  ✍️ Academic Writing & SOP
                </button>
                <button
                  type="button"
                  className={`service-filter-btn ${selectedServiceCategory === 'review' ? 'active' : ''}`}
                  onClick={() => setSelectedServiceCategory('review')}
                >
                  📄 CV & Document Review
                </button>
                <button
                  type="button"
                  className={`service-filter-btn ${selectedServiceCategory === 'visa' ? 'active' : ''}`}
                  onClick={() => setSelectedServiceCategory('visa')}
                >
                  🛂 Visa & Embassies
                </button>
                <button
                  type="button"
                  className={`service-filter-btn ${selectedServiceCategory === 'strategy' ? 'active' : ''}`}
                  onClick={() => setSelectedServiceCategory('strategy')}
                >
                  💬 Advisory & Strategy
                </button>
              </div>

              {/* Services Cards Grid */}
              <div className="services-page-grid">
                {filteredAddonServices.map((service) => (
                  <div key={service.id} className="service-page-card">
                    <div className="service-card-top-row">
                      <span className="service-icon-bubble">{service.icon}</span>
                      <span className="service-turnaround-pill">
                        <Clock size={12} /> {service.turnaround}
                      </span>
                    </div>

                    <span className="service-category-tag">{service.categoryLabel || 'Standalone Service'}</span>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>

                    <div className="service-price-wrap">
                      <span className="service-price-val">{service.priceFormatted}</span>
                      <span className="service-price-sub">/ one-time review fee</span>
                    </div>

                    <ul className="service-deliverables-list">
                      {service.deliverables && service.deliverables.map((item, idx) => (
                        <li key={idx}>
                          <Check size={14} className="service-deliverable-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="btn-book-service-card"
                      onClick={() => {
                        setSelectedPlanBookingModal({ type: 'addon', item: service })
                        setPlanBookingSubmitted(false)
                      }}
                    >
                      <span>+ Book Service →</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Why Choose Standalone Services */}
              <div className="services-why-grid">
                <div className="services-why-card">
                  <div style={{ fontSize: '1.6rem' }}>🎯</div>
                  <h5>Pay Only What You Need</h5>
                  <p>Never pay ৳50,000+ agency packages. Pick specific SOP polishing or mock visa interview only when you need it.</p>
                </div>
                <div className="services-why-card">
                  <div style={{ fontSize: '1.6rem' }}>🇧🇩</div>
                  <h5>Bangladeshi Scholar Mentors</h5>
                  <p>Reviewed personally by alumni who have secured DAAD, Chevening, MEXT, Stipendium Hungaricum and Erasmus awards.</p>
                </div>
                <div className="services-why-card">
                  <div style={{ fontSize: '1.6rem' }}>⚡</div>
                  <h5>Fast 24–72h Turnaround</h5>
                  <p>Urgent deadline approaching? Get thoroughly annotated Google Docs & PDF reviews back with zero stress.</p>
                </div>
                <div className="services-why-card">
                  <div style={{ fontSize: '1.6rem' }}>🛡️</div>
                  <h5>100% Integrity & AI Check</h5>
                  <p>We provide structural line-by-line feedback, Turnitin-ready originality checks, and ethical advisor standards.</p>
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="services-process-wrap">
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
                  <span className="section-tag-pill" style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}>
                    Simple 3-Step Process
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0 6px', color: 'var(--text-main)' }}>
                    How Our Standalone Services Work
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                    Straightforward, transparent, and direct communication via WhatsApp and email.
                  </p>
                </div>

                <div className="services-steps-grid">
                  <div className="services-step-item">
                    <div className="services-step-num">1</div>
                    <div className="services-step-info">
                      <h6>Select Your Service</h6>
                      <p>Click "+ Book Service" on any card to confirm your target degree, destination country, and requirements.</p>
                    </div>
                  </div>
                  <div className="services-step-item">
                    <div className="services-step-num">2</div>
                    <div className="services-step-info">
                      <h6>Share Your Draft / Profile</h6>
                      <p>Send your document or schedule your video call slot directly with our lead counselor on WhatsApp.</p>
                    </div>
                  </div>
                  <div className="services-step-item">
                    <div className="services-step-num">3</div>
                    <div className="services-step-info">
                      <h6>Receive Detailed Deliverables</h6>
                      <p>Get line-by-line annotated feedback, ATS score report, and follow-up consultation within 24-72 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Support CTA */}
              <div className="pricing-bottom-cta-box" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#ffffff' }}>
                <h3>Have a Custom Requirement or Multiple Documents?</h3>
                <p>
                  Chat directly with our Dhaka admissions team to create a personalized service bundle tailored to your target scholarship deadline.
                </p>
                <div className="pricing-cta-btn-group">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent('Hello Uraan team! I have a question regarding your Standalone Services.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pricing-main-wa"
                  >
                    <MessageCircle size={18} />
                    <span>Chat with Counselor on WhatsApp →</span>
                  </a>
                  <button
                    type="button"
                    className="btn-pricing-main-white"
                    onClick={() => navigateTo('pricing')}
                  >
                    <span>View Full Country Application Plans →</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ====================================================================
          FOOTER: Modern Clean Slate with Social & Legal Links
         ==================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            {/* Col 1: Brand */}
            <div>
              <div className="footer-brand-row">
                <img src={uraanLogo} alt="Uraan Logo" className="footer-brand-logo" />
                <div className="footer-brand-name">Ur<span>aan</span></div>
              </div>
              <p className="footer-about-blurb">
                Uraan is a modern education technology platform helping ambitious international students discover real fully funded scholarships, tuition-free universities, and study-abroad pathways with 100% official integrity.
              </p>
              <div className="footer-social-row">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.582 9 4.615V8z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp Community" style={{ background: '#25d366', color: '#ffffff' }}>
                  <MessageCircle size={16} />
                </a>
                <a href="https://t.me" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Telegram">
                  <Send size={15} />
                </a>
              </div>
            </div>

            {/* Col 2: 7 Continents */}
            <div className="footer-col">
              <h4>Continents</h4>
              <div className="footer-links-list">
                <button className="footer-link-btn" onClick={() => scrollToExplorer('asia')}>🌏 Asia Scholarships</button>
                <button className="footer-link-btn" onClick={() => scrollToExplorer('europe')}>🌍 Europe Scholarships</button>
                <button className="footer-link-btn" onClick={() => scrollToExplorer('north-america')}>🌎 North America</button>
                <button className="footer-link-btn" onClick={() => scrollToExplorer('south-america')}>🌎 South America</button>
                <button className="footer-link-btn" onClick={() => scrollToExplorer('africa')}>🌍 Africa Scholarships</button>
                <button className="footer-link-btn" onClick={() => scrollToExplorer('oceania')}>🌏 Oceania (Australia/NZ)</button>
              </div>
            </div>

            {/* Col 3: Student Tools */}
            <div className="footer-col">
              <h4>Tools & Guides</h4>
              <div className="footer-links-list">
                <button className="footer-link-btn" onClick={() => setShowTemplateDownloaderModal(true)}>Academic CV Builder</button>
                <button className="footer-link-btn" onClick={() => setShowTemplateDownloaderModal(true)}>SOP Generator</button>
                <button className="footer-link-btn" onClick={() => { const el = document.getElementById('bangladesh-hub'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}>BDT Cost Calculator</button>
                <button className="footer-link-btn" onClick={() => setShowVisaDhakaModal(true)}>Dhaka Visa Guide</button>
                <button className="footer-link-btn" onClick={() => setShowIeltsWaiverModal(true)}>IELTS / MOI Waivers</button>
                <button className="footer-link-btn" onClick={() => setShowCommunityModal(true)}>WhatsApp Community</button>
              </div>
            </div>

            {/* Col 4: Trust & Navigation */}
            <div className="footer-col">
              <h4>Platform & Support</h4>
              <div className="footer-links-list">
                <button className="footer-link-btn" onClick={() => navigateTo('home')}>Home</button>
                <button className="footer-link-btn" onClick={() => navigateTo('services')}>Standalone Services (৳500-৳1k)</button>
                <button className="footer-link-btn" onClick={() => navigateTo('pricing')}>Plans & Pricing (৳2k-৳4k)</button>
                <button className="footer-link-btn" onClick={() => { if (currentPage !== 'home') navigateTo('home'); setTimeout(() => scrollToExplorer('all'), 80); }}>Scholarship Directory</button>
                <button className="footer-link-btn" onClick={() => { if (currentPage !== 'home') navigateTo('home'); setTimeout(() => { const el = document.getElementById('study-destinations'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 80); }}>Study Destinations</button>
                <button className="footer-link-btn" onClick={() => setShowCommunityModal(true)}>Contact Counselors</button>
                <a href="#disclaimer" className="footer-link-btn" onClick={(e) => { e.preventDefault(); alert('Scholarship Disclaimer: Uraan aggregates verified information exclusively from official government and university portals. No fees are ever charged to students.') }}>Scholarship Disclaimer</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>&copy; 2026 Uraan &bull; All rights reserved.</span>
            <div className="footer-legal-row">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: Uraan upholds strict data protection standards.') }}>Privacy Policy</a>
              <span>&bull;</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Free educational portal for students worldwide.') }}>Terms & Conditions</a>
              <span>&bull;</span>
              <a href="#sources" onClick={(e) => { e.preventDefault(); alert('Official Sources: All links lead directly to authorized university and government domains.') }}>✓ Official Sources</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL 1: SCHOLARSHIP DETAIL & OFFICIAL APPLICATION MODAL
         ==================================================================== */}
      {selectedScholarshipModal && (
        <div className="modal-backdrop-blur" onClick={() => setSelectedScholarshipModal(null)}>
          <div className="modal-content-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedScholarshipModal(null)} aria-label="Close modal">
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.5rem' }}>{selectedScholarshipModal.flag}</span>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                  <span className="sch-card-official-pill" style={{ position: 'static', background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' }}>
                    <CheckCircle2 size={12} /> {selectedScholarshipModal.badge}
                  </span>
                  <span className={`sch-card-status-badge ${selectedScholarshipModal.status.toLowerCase()}`} style={{ position: 'static' }}>
                    ● {selectedScholarshipModal.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>{selectedScholarshipModal.name}</h3>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Host: {selectedScholarshipModal.country} &bull; Degree: {selectedScholarshipModal.degree}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '18px', lineHeight: 1.55 }}>
              {selectedScholarshipModal.description}
            </p>

            {/* Full Coverage Breakdown Table */}
            <div style={{ background: 'var(--surface-alt)', borderRadius: '14px', padding: '16px', marginBottom: '18px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '10px', color: 'var(--primary)' }}>
                Funding Coverage Breakdown
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Tuition</span>
                  <strong style={{ fontSize: '0.85rem', color: selectedScholarshipModal.coverage.tuition ? '#15803d' : '#94a3b8' }}>
                    {selectedScholarshipModal.coverage.tuition ? '✓ 100% Free' : 'Partial / Varies'}
                  </strong>
                </div>
                <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Monthly Stipend</span>
                  <strong style={{ fontSize: '0.85rem', color: selectedScholarshipModal.coverage.stipend ? '#15803d' : '#94a3b8' }}>
                    {selectedScholarshipModal.coverage.stipend ? '✓ Included' : 'Self-funded'}
                  </strong>
                </div>
                <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Accommodation</span>
                  <strong style={{ fontSize: '0.85rem', color: selectedScholarshipModal.coverage.accommodation ? '#15803d' : '#94a3b8' }}>
                    {selectedScholarshipModal.coverage.accommodation ? '✓ Free / Allowance' : 'Not Included'}
                  </strong>
                </div>
                <div style={{ background: '#ffffff', padding: '10px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Airfare</span>
                  <strong style={{ fontSize: '0.85rem', color: selectedScholarshipModal.coverage.airfare ? '#15803d' : '#94a3b8' }}>
                    {selectedScholarshipModal.coverage.airfare ? '✓ Roundtrip Flights' : 'Not Included'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Eligibility & Bangladesh Applicant Specifics */}
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '6px' }}>Academic Eligibility</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                {selectedScholarshipModal.eligibility}
              </p>

              <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '12px', padding: '12px 16px', fontSize: '0.84rem', color: '#166534' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>🇧🇩 Guidance for Bangladeshi Applicants:</strong>
                <ul style={{ paddingLeft: '18px', margin: 0, lineHeight: 1.5 }}>
                  <li><strong>Target CGPA:</strong> {selectedScholarshipModal.bdSpecifics?.cgpaTarget}</li>
                  <li><strong>Embassy in Dhaka:</strong> {selectedScholarshipModal.bdSpecifics?.embassy}</li>
                  <li><strong>Attestation Note:</strong> {selectedScholarshipModal.bdSpecifics?.attestation}</li>
                  <li><strong>Application Cycle:</strong> {selectedScholarshipModal.bdSpecifics?.timeline}</li>
                </ul>
              </div>
            </div>

            {/* Perks List */}
            <div style={{ marginBottom: '22px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '6px' }}>Included Key Benefits</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedScholarshipModal.perks.map((p) => (
                  <span key={p} style={{ fontSize: '0.78rem', background: 'var(--surface-alt)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    ✓ {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
              <a
                href={selectedScholarshipModal.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-card-view-details"
                style={{ flex: 1, padding: '12px', fontSize: '0.92rem' }}
              >
                <span>Proceed to Official Application Portal ({selectedScholarshipModal.officialSource})</span>
                <ExternalLink size={15} />
              </a>
              <button
                className="btn-card-official-apply"
                onClick={() => {
                  setSelectedScholarshipModal(null)
                  setShowTemplateDownloaderModal(true)
                }}
              >
                <Download size={14} />
                <span>Prepare CV & SOP</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: COUNTRY STUDY DESTINATION & VISA DETAILS
         ==================================================================== */}
      {selectedCountryModal && (
        <div className="modal-backdrop-blur" onClick={() => setSelectedCountryModal(null)}>
          <div className="modal-content-card" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCountryModal(null)}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <span style={{ fontSize: '2.6rem' }}>{selectedCountryModal.flag}</span>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Study in {selectedCountryModal.name}</h3>
                <span style={{ fontSize: '0.84rem', color: 'var(--primary)', fontWeight: 700 }}>
                  {selectedCountryModal.universities} &bull; {selectedCountryModal.scholarshipsCount}
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Average Tuition:</span>
                <strong style={{ display: 'block', fontSize: '0.9rem', marginTop: '2px' }}>{selectedCountryModal.tuitionRange}</strong>
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Living Expenses:</span>
                <strong style={{ display: 'block', fontSize: '0.9rem', marginTop: '2px' }}>{selectedCountryModal.livingCost}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', marginBottom: '22px' }}>
              <div style={{ padding: '10px 12px', background: 'var(--surface-alt)', borderRadius: '10px' }}>
                <strong>🛂 Visa & Blocked Account:</strong> {selectedCountryModal.blockedAccount}
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--surface-alt)', borderRadius: '10px' }}>
                <strong>💼 Student Work Rights:</strong> {selectedCountryModal.workRights}
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--surface-alt)', borderRadius: '10px' }}>
                <strong>🎓 Post-Study Work Visa:</strong> {selectedCountryModal.postStudyVisa}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn-card-view-details"
                style={{ flex: 1 }}
                onClick={() => {
                  setSearchQuery(selectedCountryModal.name)
                  setSelectedCountryModal(null)
                  scrollToExplorer('all')
                }}
              >
                <span>Find {selectedCountryModal.name} Scholarships</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={selectedCountryModal.officialPortal}
                target="_blank"
                rel="noreferrer"
                className="btn-card-official-apply"
              >
                <span>Official Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 3: GIVEN-NAME ACADEMIC CV & SOP BUILDER
         ==================================================================== */}
      {showTemplateDownloaderModal && (
        <div className="modal-backdrop-blur" onClick={() => setShowTemplateDownloaderModal(false)}>
          <div className="modal-content-card" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowTemplateDownloaderModal(false)}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Academic CV, SOP & Motivation Letter Generator</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Type your name below to dynamically generate and download formatted Word (.doc) and Text (.txt) files.
                </span>
              </div>
            </div>

            {/* Customizer Inputs */}
            <div style={{ background: 'var(--surface-alt)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div className="form-field-group" style={{ margin: 0 }}>
                  <label>Your Given / Full Name</label>
                  <input
                    type="text"
                    value={givenName}
                    onChange={(e) => setGivenName(e.target.value)}
                    placeholder="e.g. Ayesha Rahman"
                  />
                </div>
                <div className="form-field-group" style={{ margin: 0 }}>
                  <label>Your Field of Study</label>
                  <input
                    type="text"
                    value={customField}
                    onChange={(e) => setCustomField(e.target.value)}
                    placeholder="e.g. Computer Science"
                  />
                </div>
                <div className="form-field-group" style={{ margin: 0 }}>
                  <label>Target Degree</label>
                  <select
                    value={customDegree}
                    onChange={(e) => setCustomDegree(e.target.value)}
                  >
                    <option value="Master's">Master’s Degree</option>
                    <option value="Bachelor's">Bachelor’s Degree</option>
                    <option value="PhD">PhD / Doctorate</option>
                  </select>
                </div>
                <div className="form-field-group" style={{ margin: 0 }}>
                  <label>Destination Country</label>
                  <input
                    type="text"
                    value={customCountry}
                    onChange={(e) => setCustomCountry(e.target.value)}
                    placeholder="e.g. Germany, Finland"
                  />
                </div>
              </div>
            </div>

            {/* Generated Templates List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '380px', overflowY: 'auto', paddingRight: '4px' }}>
              {demoTemplates.map((tpl) => (
                <div
                  key={tpl.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div style={{ maxWidth: '380px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '3px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'var(--primary-soft)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px' }}>
                        {tpl.category}
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{tpl.tag}</span>
                    </div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0 }}>{tpl.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                      Customized for: {givenName || 'Applicant'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      className="btn-card-view-details"
                      style={{ padding: '7px 12px', fontSize: '0.8rem' }}
                      onClick={() => downloadDocFile(tpl.title, tpl.getHtml(), tpl.fileBaseName)}
                    >
                      <Download size={13} /> Word (.doc)
                    </button>
                    <button
                      className="btn-card-official-apply"
                      style={{ padding: '7px 12px', fontSize: '0.8rem' }}
                      onClick={() => downloadTxtFile(tpl.getText(), tpl.fileBaseName)}
                    >
                      <FileDown size={13} /> Text (.txt)
                    </button>
                    <button
                      className="btn-card-official-apply"
                      style={{ padding: '7px 10px', fontSize: '0.8rem' }}
                      onClick={() => setPreviewModalTemplate(tpl)}
                      title="Preview full document in modal"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 4: TEMPLATE PREVIEW & COPY MODAL
         ==================================================================== */}
      {previewModalTemplate && (
        <div className="modal-backdrop-blur" onClick={() => setPreviewModalTemplate(null)}>
          <div className="modal-content-card" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewModalTemplate(null)}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{previewModalTemplate.title}</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Personalized for <strong>{givenName}</strong> ({customField})
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="btn-card-view-details"
                  style={{ padding: '8px 14px', fontSize: '0.84rem' }}
                  onClick={() => handleCopyText(previewModalTemplate.getText())}
                >
                  {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Full Text'}</span>
                </button>
                <button
                  className="btn-card-official-apply"
                  style={{ padding: '8px 14px', fontSize: '0.84rem' }}
                  onClick={() => window.print()}
                >
                  <Printer size={14} /> Print / PDF
                </button>
              </div>
            </div>

            <div
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px',
                maxHeight: '440px',
                overflowY: 'auto',
                fontFamily: 'Courier New, monospace',
                fontSize: '0.84rem',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                color: 'var(--text-main)'
              }}
            >
              {previewModalTemplate.getText()}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 5: DHAKA VISA & EMBASSY DIRECTORY MODAL
         ==================================================================== */}
      {showVisaDhakaModal && (
        <div className="modal-backdrop-blur" onClick={() => setShowVisaDhakaModal(false)}>
          <div className="modal-content-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowVisaDhakaModal(false)}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Dhaka Embassies & VFS Global Centers</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Addresses, blocked account limits, and appointment procedures in Bangladesh
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '420px', overflowY: 'auto' }}>
              {BANGLADESH_RESOURCES.embassies.map((emb) => (
                <div key={emb.country} style={{ background: 'var(--surface-alt)', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0 }}>{emb.country} — {emb.center}</h4>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 6px' }}>
                    <MapPin size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    {emb.location}
                  </p>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-main)', background: '#ffffff', padding: '6px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <strong>Financial Proof:</strong> {emb.blockedAccountEuro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 6: IELTS / MOI WAIVER GUIDE MODAL
         ==================================================================== */}
      {showIeltsWaiverModal && (
        <div className="modal-backdrop-blur" onClick={() => setShowIeltsWaiverModal(false)}>
          <div className="modal-content-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowIeltsWaiverModal(false)}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Study Abroad Without IELTS (MOI Guide)</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Official pathways accepting Medium of Instruction (MOI) certificates from Bangladeshi universities
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '20px' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <strong>🇮🇹 Italy:</strong> Public universities (Polimi, Bologna, Sapienza) accept MOI certificates if 100% of your bachelor’s was taught in English.
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <strong>🇹🇷 Türkiye:</strong> Türkiye Burslari programs do not mandate IELTS; 1-year free Turkish language training is provided for Turkish-taught courses.
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <strong>🇭🇺 Hungary:</strong> Stipendium Hungaricum allows many partner institutions to conduct their own Skype / online English interview instead of IELTS.
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <strong>🇨🇳 China (CSC):</strong> Pre-acceptance letters from professors and university MOI certificates are widely accepted for English-taught master’s programs.
              </div>
            </div>

            <button
              className="btn-card-view-details"
              style={{ width: '100%' }}
              onClick={() => {
                setShowIeltsWaiverModal(false)
                setSelectedIelts('no-ielts')
                setQuickFilterChip('No IELTS')
                scrollToExplorer('all')
              }}
            >
              <span>Filter All No-IELTS Scholarships Now</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 7: JOIN OUR COMMUNITY & WHATSAPP MODAL
         ==================================================================== */}
      {showCommunityModal && (
        <div className="modal-backdrop-blur" onClick={() => setShowCommunityModal(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowCommunityModal(false)}>
              <X size={18} />
            </button>

            <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <UserPlus size={24} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>Join the Uraan Community</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Connect with 10,000+ global scholarship applicants, access verified templates, and get real-time deadline alerts.
            </p>

            {/* Direct Official WhatsApp Group Highlight Card */}
            <div className="community-wa-card-invite">
              <div className="community-wa-card-header">
                <div className="community-wa-icon-pill">
                  <MessageCircle size={22} />
                </div>
                <div className="community-wa-info">
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '3px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#dcfce7', color: '#15803d', padding: '2px 6px', borderRadius: '4px' }}>
                      Official Group
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: 700 }}>10,000+ Members</span>
                  </div>
                  <h4>Uraan Global WhatsApp Community</h4>
                  <p>Get instant deadline notifications, visa guides, and peer mentorship.</p>
                </div>
              </div>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa-direct-join"
              >
                <MessageCircle size={17} />
                <span>Join Official WhatsApp Group</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {communitySubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Welcome to Uraan!</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  Your submission is received! Join our active WhatsApp group right now to connect with fellow applicants and mentors.
                </p>
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-card-view-details"
                  style={{ width: '100%', padding: '12px', background: '#25d366', color: '#ffffff' }}
                >
                  <MessageCircle size={18} />
                  <span>Enter WhatsApp Community Group Now</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ) : (
              <form onSubmit={handleCommunitySubmit}>
                <div className="form-field-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha Rahman"
                    value={communityForm.name}
                    onChange={(e) => setCommunityForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="form-field-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ayesha@example.com"
                    value={communityForm.email}
                    onChange={(e) => setCommunityForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-field-group">
                    <label>Target Country</label>
                    <select
                      value={communityForm.targetCountry}
                      onChange={(e) => setCommunityForm((prev) => ({ ...prev, targetCountry: e.target.value }))}
                    >
                      <option value="Germany">Germany 🇩🇪</option>
                      <option value="Finland">Finland 🇫🇮</option>
                      <option value="UK">United Kingdom 🇬🇧</option>
                      <option value="Japan">Japan 🇯🇵</option>
                      <option value="South Korea">South Korea 🇰🇷</option>
                      <option value="Italy">Italy 🇮🇹</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="USA">USA 🇺🇸</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label>Degree Level</label>
                    <select
                      value={communityForm.degree}
                      onChange={(e) => setCommunityForm((prev) => ({ ...prev, degree: e.target.value }))}
                    >
                      <option value="Master">Master’s</option>
                      <option value="Bachelor">Bachelor’s</option>
                      <option value="PhD">PhD / Research</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-card-view-details"
                  style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '10px' }}
                >
                  Get Instant Access & Free Toolkit <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 8: APPLICATION PLAN & PRICING ENROLLMENT MODAL
         ==================================================================== */}
      {selectedPlanBookingModal && (
        <div className="modal-backdrop-blur" onClick={() => setSelectedPlanBookingModal(null)}>
          <div className="modal-content-card" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPlanBookingModal(null)} aria-label="Close modal">
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Tag size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Uraan Enrollment & Support
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
                  {selectedPlanBookingModal.item.title}
                </h3>
              </div>
            </div>

            <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Uraan Service Fee</span>
                <strong style={{ fontSize: '1.4rem', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                  {selectedPlanBookingModal.item.priceFormatted}
                </strong>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <span>Official Third-Party Fees Excluded</span>
                <div style={{ color: '#10b981', fontWeight: 700 }}>✓ Dedicated Advisor Guidance</div>
              </div>
            </div>

            {planBookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Request Received, {planBookingForm.name || 'Student'}!</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.5 }}>
                  Our lead study-abroad counselor will connect with you via WhatsApp within 2-4 hours. You can also start the chat immediately using the button below:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Hello Uraan! I have booked the *${selectedPlanBookingModal.item.title}* (${selectedPlanBookingModal.item.priceFormatted}). My Name: ${planBookingForm.name}, Phone: ${planBookingForm.phone}, Target Degree: ${planBookingForm.degree}, CGPA: ${planBookingForm.cgpa}. Please guide me on next steps.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card-view-details"
                    style={{ background: '#25d366', borderColor: '#22c55e', color: '#ffffff', padding: '12px', fontSize: '0.94rem' }}
                  >
                    <MessageCircle size={18} />
                    <span>Confirm via WhatsApp Now</span>
                  </a>

                  <button
                    className="btn-card-official-apply"
                    onClick={() => {
                      setSelectedPlanBookingModal(null)
                      setPlanBookingSubmitted(false)
                    }}
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setPlanBookingSubmitted(true)
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div className="form-field-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={planBookingForm.name}
                    onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-field-group">
                    <label>WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1700-000000"
                      value={planBookingForm.phone}
                      onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="form-field-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={planBookingForm.email}
                      onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-field-group">
                    <label>Target Degree</label>
                    <select
                      value={planBookingForm.degree}
                      onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, degree: e.target.value }))}
                    >
                      <option value="Bachelor">Bachelor’s</option>
                      <option value="Master">Master’s</option>
                      <option value="PhD">PhD / Doctorate</option>
                    </select>
                  </div>
                  <div className="form-field-group">
                    <label>Current CGPA / Grade</label>
                    <input
                      type="text"
                      placeholder="e.g. 3.65 / 4.00"
                      value={planBookingForm.cgpa}
                      onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, cgpa: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label>Target Intake & Specific Queries (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Fall 2026 intake, interest in DAAD scholarship"
                    value={planBookingForm.notes}
                    onChange={(e) => setPlanBookingForm((prev) => ({ ...prev, notes: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-card-view-details"
                  style={{ width: '100%', padding: '13px', fontSize: '0.96rem', marginTop: '6px' }}
                >
                  <span>Confirm Enrollment & Connect with Advisor</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          FLOATING HOVER WHATSAPP LOGO WIDGET (Bottom-Right)
         ==================================================================== */}
      <aside
        className="whatsapp-float-container"
        onMouseEnter={() => setWhatsappHovered(true)}
        onMouseLeave={() => setWhatsappHovered(false)}
        aria-label="Contact on WhatsApp"
      >
        {(whatsappHovered || whatsappCardOpen) && (
          <div className="whatsapp-hover-card">
            <div className="wa-hover-header">
              <span className="wa-online-beacon">
                <span className="beacon-dot" /> Advisor Online Now
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setWhatsappHovered(false)
                  setWhatsappCardOpen(false)
                }}
                style={{ color: '#94a3b8', padding: '2px', cursor: 'pointer' }}
                aria-label="Close WhatsApp card"
              >
                <X size={14} />
              </button>
            </div>

            <div className="wa-hover-title">Chat on WhatsApp with Uraan</div>
            <p className="wa-hover-text">
              Have questions about scholarships, CV templates, or visa rules? Connect 1-on-1 with an education counselor on WhatsApp!
            </p>

            <a
              href={`https://wa.me/?text=${encodeURIComponent('Hello Uraan team! I am looking for guidance on international scholarships and application procedures.')}`}
              target="_blank"
              rel="noreferrer"
              className="wa-direct-chat-btn"
            >
              <MessageCircle size={17} />
              <span>Start WhatsApp Chat</span>
            </a>

            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
              className="wa-community-link-btn"
            >
              <Users size={15} />
              <span>Join WhatsApp Group &bull; 10,000+ Members</span>
            </a>
          </div>
        )}

        {/* Floating WhatsApp Logo Button */}
        <button
          className="whatsapp-trigger-btn"
          aria-label="Contact on WhatsApp"
          onClick={() => setWhatsappCardOpen((prev) => !prev)}
          title="Chat with Uraan on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.88 2.796.88 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.767-5.768-5.767zm3.393 8.163c-.144.405-.837.774-1.17.824-.312.045-.698.072-2.176-.541-1.89-1.026-3.08-2.673-3.174-2.802-.093-.129-.766-1.02-.766-1.944 0-.925.485-1.378.658-1.567.172-.189.378-.236.504-.236.126 0 .252.002.361.008.115.006.27-.043.423.324.158.378.54 1.316.586 1.411.047.094.078.204.016.327-.063.123-.094.2-.187.31-.094.109-.197.243-.281.327-.094.094-.193.197-.083.386.11.189.49 1.109 1.05 1.606.721.642 1.328.841 1.517.935.189.094.299.078.41-.047.11-.125.472-.55.598-.738.126-.189.252-.157.425-.094.173.063 1.096.517 1.285.611.189.095.315.142.362.221.047.079.047.457-.097.862z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.637 0-3.155-.494-4.423-1.341l-.317-.213-2.955.775.789-2.88-.207-.329A8.136 8.136 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
          </svg>
          <span className="whatsapp-notif-pill">1</span>
        </button>
      </aside>
    </div>
  )
}

export default App
