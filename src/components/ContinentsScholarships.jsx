import React, { useState, useMemo } from "react";
import "./ContinentsScholarships.css";

const continents = [
  {
    id: "all",
    name: "All Continents",
    icon: "🌐",
    count: 33,
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "asia",
    name: "Asia",
    icon: "🌏",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1000&q=80",
    countries: "Japan • South Korea • China • Türkiye",
  },
  {
    id: "europe",
    name: "Europe",
    icon: "🌍",
    count: 11,
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80",
    countries: "Germany • Italy • Finland • Hungary • Czech Republic",
  },
  {
    id: "north-america",
    name: "North America",
    icon: "🌎",
    count: 3,
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1000&q=80",
    countries: "Canada • USA",
  },
  {
    id: "south-america",
    name: "South America",
    icon: "🌎",
    count: 4,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80",
    countries: "Brazil • Argentina • Chile",
  },
  {
    id: "africa",
    name: "Africa",
    icon: "🌍",
    count: 5,
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80",
    countries: "South Africa • Egypt • Morocco",
  },
  {
    id: "oceania",
    name: "Oceania",
    icon: "🌏",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d7?auto=format&fit=crop&w=1000&q=80",
    countries: "Australia • New Zealand",
  },
  {
    id: "antarctica",
    name: "Antarctica",
    icon: "❄️",
    count: 0,
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1000&q=80",
    countries: "Research opportunities",
  },
];

const scholarships = [
  // 🌏 ASIA (8 Opportunities)
  {
    continent: "asia",
    flag: "🇯🇵",
    country: "Japan",
    title: "MEXT Japanese Government Scholarship",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "May 2026 (Embassy) / Dec 2026",
    stipend: "¥145,000 / month",
    officialUrl: "https://www.mext.go.jp/en/",
  },
  {
    continent: "asia",
    flag: "🇰🇷",
    country: "South Korea",
    title: "Global Korea Scholarship (GKS)",
    degree: "Bachelor's / Master's / PhD",
    funding: "Fully Funded",
    deadline: "Feb (Grad) / Sep (Undergrad)",
    stipend: "₩1,000,000 / month",
    officialUrl: "https://www.studyinkorea.go.kr",
  },
  {
    continent: "asia",
    flag: "🇨🇳",
    country: "China",
    title: "Chinese Government Scholarship (CSC)",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jan – Apr 2026",
    stipend: "3,500 RMB / month",
    officialUrl: "https://www.campuschina.org",
  },
  {
    continent: "asia",
    flag: "🇹🇷",
    country: "Türkiye",
    title: "Türkiye Scholarships (Burslari)",
    degree: "Bachelor's / Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jan 10 – Feb 20, 2026",
    stipend: "3,500 – 6,000 TRY / month",
    officialUrl: "https://www.turkiyeburslari.gov.tr",
  },
  {
    continent: "asia",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    title: "KAUST Graduate Fellowship",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jan 2026 (Rolling)",
    stipend: "$20,000 – $30,000 / year",
    officialUrl: "https://www.kaust.edu.sa",
  },
  {
    continent: "asia",
    flag: "🇹🇼",
    country: "Taiwan",
    title: "Taiwan MOE Scholarship Program",
    degree: "Bachelor's / Master's / PhD",
    funding: "Tuition + Living Support",
    deadline: "Mar 31, 2026",
    stipend: "NT$ 20,000 / month",
    officialUrl: "https://taiwanscholarship.moe.gov.tw",
  },
  {
    continent: "asia",
    flag: "🇲🇾",
    country: "Malaysia",
    title: "Malaysian International Scholarship (MIS)",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "May 2026",
    stipend: "RM 1,500 / month",
    officialUrl: "https://biasiswa.mohe.gov.my",
  },
  {
    continent: "asia",
    flag: "🇧🇳",
    country: "Brunei",
    title: "Brunei Darussalam Government Award",
    degree: "Diploma / Bachelor's / Master's",
    funding: "Fully Funded",
    deadline: "Feb 15, 2026",
    stipend: "BND 500 / month",
    officialUrl: "https://www.mfa.gov.bn",
  },

  // 🌍 EUROPE (11 Opportunities)
  {
    continent: "europe",
    flag: "🇩🇪",
    country: "Germany",
    title: "DAAD Scholarships (EPOS & Helmut-Schmidt)",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Oct 2026 (Varies by Univ)",
    stipend: "€934 / month",
    officialUrl: "https://www.daad.de",
  },
  {
    continent: "europe",
    flag: "🇮🇹",
    country: "Italy",
    title: "Italian Regional Scholarships (DSU / LazioDisco)",
    degree: "Bachelor's / Master's / PhD",
    funding: "Tuition + Living Support",
    deadline: "Jul – Aug 2026",
    stipend: "€6,500 – €7,500 / year",
    officialUrl: "https://www.dsu.toscana.it",
  },
  {
    continent: "europe",
    flag: "🇫🇮",
    country: "Finland",
    title: "Finland University Scholarships & EDUFI",
    degree: "Master's",
    funding: "Tuition Waiver",
    deadline: "Jan 2026 (Joint Application)",
    stipend: "€5,000 relocation grant",
    officialUrl: "https://www.studyinfinland.fi",
  },
  {
    continent: "europe",
    flag: "🇬🇧",
    country: "United Kingdom",
    title: "Chevening Scholarships (UK FCDO)",
    degree: "Master's (1 Year)",
    funding: "Fully Funded",
    deadline: "Nov 2026",
    stipend: "£1,483 / month (London)",
    officialUrl: "https://www.chevening.org",
  },
  {
    continent: "europe",
    flag: "🇬🇧",
    country: "United Kingdom",
    title: "Commonwealth Master's & PhD Scholarships",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Oct 2026",
    stipend: "£1,347 – £1,652 / month",
    officialUrl: "https://cscuk.fcdo.gov.uk",
  },
  {
    continent: "europe",
    flag: "🇭🇺",
    country: "Hungary",
    title: "Stipendium Hungaricum Scholarship",
    degree: "Bachelor's / Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jan 15, 2026",
    stipend: "HUF 43,700 – 180,000 / month",
    officialUrl: "https://stipendiumhungaricum.hu",
  },
  {
    continent: "europe",
    flag: "🇨🇿",
    country: "Czech Republic",
    title: "Czech Republic Government Scholarships",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Sep 30, 2026",
    stipend: "CZK 14,000 – 15,000 / month",
    officialUrl: "https://www.msmt.cz",
  },
  {
    continent: "europe",
    flag: "🇸🇪",
    country: "Sweden",
    title: "Swedish Institute Global Professionals (SISGP)",
    degree: "Master's",
    funding: "Fully Funded",
    deadline: "Feb 2026",
    stipend: "SEK 12,000 / month",
    officialUrl: "https://si.se",
  },
  {
    continent: "europe",
    flag: "🇫🇷",
    country: "France",
    title: "Eiffel Excellence Scholarship Program",
    degree: "Master's / PhD",
    funding: "Tuition + Living Support",
    deadline: "Jan 2026",
    stipend: "€1,181 – €1,700 / month",
    officialUrl: "https://www.campusfrance.org",
  },
  {
    continent: "europe",
    flag: "🇳🇱",
    country: "Netherlands",
    title: "NL Scholarship (Holland Scholarship)",
    degree: "Bachelor's / Master's",
    funding: "Partial Waiver (€5,000)",
    deadline: "Feb 1 / May 1, 2026",
    stipend: "€5,000 one-time contribution",
    officialUrl: "https://www.studyinnl.org",
  },
  {
    continent: "europe",
    flag: "🇪🇺",
    country: "European Union",
    title: "Erasmus Mundus Joint Master Degrees (EMJM)",
    degree: "Master's (Multi-country)",
    funding: "Fully Funded",
    deadline: "Jan – Mar 2026",
    stipend: "€1,400 / month (all 2 years)",
    officialUrl: "https://erasmus-plus.ec.europa.eu",
  },

  // 🌎 NORTH AMERICA (3 Opportunities)
  {
    continent: "north-america",
    flag: "🇨🇦",
    country: "Canada",
    title: "Vanier Canada Graduate Scholarships (CGS)",
    degree: "PhD",
    funding: "Fully Funded",
    deadline: "Nov 2026",
    stipend: "$50,000 / year for 3 years",
    officialUrl: "https://vanier.gc.ca",
  },
  {
    continent: "north-america",
    flag: "🇺🇸",
    country: "USA",
    title: "Fulbright Foreign Student Program",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "May – Oct 2026 (Dhaka Embassy)",
    stipend: "$1,800 – $2,500 / month",
    officialUrl: "https://foreign.fulbrightonline.org",
  },
  {
    continent: "north-america",
    flag: "🇲🇽",
    country: "Mexico",
    title: "AMEXCID Mexican Government Excellence Awards",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jul 2026",
    stipend: "MXN 13,200 – 16,500 / month",
    officialUrl: "https://www.gob.mx/amexcid",
  },

  // 🌎 SOUTH AMERICA (4 Opportunities)
  {
    continent: "south-america",
    flag: "🇧🇷",
    country: "Brazil",
    title: "GCUB-Mob International Mobility Scholarship",
    degree: "Master's / PhD",
    funding: "Tuition + Living Support",
    deadline: "Jul 2026",
    stipend: "R$ 1,500 – 2,200 / month",
    officialUrl: "https://www.gcub.org.br",
  },
  {
    continent: "south-america",
    flag: "🇦🇷",
    country: "Argentina",
    title: "CLACSO Latin America Research Fellowships",
    degree: "Master's / PhD / Research",
    funding: "Full Fellowship",
    deadline: "Aug 2026",
    stipend: "Full living stipend",
    officialUrl: "https://www.clacso.org",
  },
  {
    continent: "south-america",
    flag: "🇨🇱",
    country: "Chile",
    title: "AGCID Republic of Chile Master's Scholarships",
    degree: "Master's",
    funding: "Fully Funded",
    deadline: "Oct 2026",
    stipend: "CLP 560,000 / month",
    officialUrl: "https://www.agcid.gob.cl",
  },
  {
    continent: "south-america",
    flag: "🇨🇴",
    country: "Colombia",
    title: "Beca Colombia ICETEX Foreign Students",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Jun 2026",
    stipend: "3 minimum monthly wages (COP)",
    officialUrl: "https://web.icetex.gov.co",
  },

  // 🌍 AFRICA (5 Opportunities)
  {
    continent: "africa",
    flag: "🇿🇦",
    country: "South Africa",
    title: "Mandela Rhodes Scholarship (Oxford / Cape Town)",
    degree: "Honours / Master's",
    funding: "Fully Funded",
    deadline: "Apr 2026",
    stipend: "Full living allowance + airfare",
    officialUrl: "https://www.mandelarhodes.org",
  },
  {
    continent: "africa",
    flag: "🇪🇬",
    country: "Egypt",
    title: "Al-Azhar Islamic Research & University Grants",
    degree: "Bachelor's / Master's",
    funding: "Fully Funded",
    deadline: "Aug 2026",
    stipend: "Free accommodation + stipend",
    officialUrl: "http://www.azhar.edu.eg",
  },
  {
    continent: "africa",
    flag: "🇲🇦",
    country: "Morocco",
    title: "AMCI Moroccan Agency for International Cooperation",
    degree: "Bachelor's / Master's / PhD",
    funding: "Fully Funded",
    deadline: "Aug 2026",
    stipend: "750 MAD / month",
    officialUrl: "http://www.amci.ma",
  },
  {
    continent: "africa",
    flag: "🇩🇿",
    country: "Algeria",
    title: "Algerian Government Bilateral Program",
    degree: "Bachelor's / Master's",
    funding: "Fully Funded",
    deadline: "Jul 2026",
    stipend: "Full board & housing support",
    officialUrl: "https://www.mesrs.dz",
  },
  {
    continent: "africa",
    flag: "🇹🇳",
    country: "Tunisia",
    title: "Tunisian Ministry of Higher Education Awards",
    degree: "Master's / PhD",
    funding: "Tuition + Living Support",
    deadline: "Jun 2026",
    stipend: "Government monthly subsidy",
    officialUrl: "http://www.mes.tn",
  },

  // 🌏 OCEANIA (2 Opportunities)
  {
    continent: "oceania",
    flag: "🇦🇺",
    country: "Australia",
    title: "Australia Awards Scholarships (DFAT)",
    degree: "Master's",
    funding: "Fully Funded",
    deadline: "Apr 30, 2026",
    stipend: "AUD $3,000 / month approx.",
    officialUrl: "https://www.dfat.gov.au",
  },
  {
    continent: "oceania",
    flag: "🇳🇿",
    country: "New Zealand",
    title: "Manaaki New Zealand Scholarships",
    degree: "Master's / PhD",
    funding: "Fully Funded",
    deadline: "Feb 28, 2026",
    stipend: "NZD $531 / week",
    officialUrl: "https://www.nzscholarships.govt.nz",
  },
];

export default function ContinentsScholarships({ onSelectScholarship, initialContinent = "all" }) {
  const [activeContinent, setActiveContinent] = useState(initialContinent);
  const [prevInitial, setPrevInitial] = useState(initialContinent);

  // Sync state if initialContinent changes from parent navigation
  if (initialContinent !== prevInitial) {
    setPrevInitial(initialContinent);
    setActiveContinent(initialContinent);
  }

  const active = activeContinent;
  const setActive = setActiveContinent;

  // Continuous animation states
  const [isPaused, setIsPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [viewMode, setViewMode] = useState("marquee"); // 'marquee' (continuous) or 'grid'

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [degreeFilter, setDegreeFilter] = useState("all");
  const [fundingFilter, setFundingFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  // Continents to display as cards
  const continentCards = useMemo(() => {
    return continents.filter((item) => item.id !== "all");
  }, []);

  // Filter scholarships dynamically based on continent, search, degree, and funding
  const filteredScholarships = useMemo(() => {
    return scholarships.filter((item) => {
      // 1. Continent Filter
      if (active !== "all" && item.continent !== active) {
        return false;
      }
      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchCountry = item.country.toLowerCase().includes(q);
        const matchDegree = item.degree.toLowerCase().includes(q);
        const matchFunding = item.funding.toLowerCase().includes(q);
        if (!matchTitle && !matchCountry && !matchDegree && !matchFunding) {
          return false;
        }
      }
      // 3. Degree Filter
      if (degreeFilter !== "all") {
        if (!item.degree.toLowerCase().includes(degreeFilter.toLowerCase())) {
          return false;
        }
      }
      // 4. Funding Filter
      if (fundingFilter !== "all") {
        if (fundingFilter === "fully" && !item.funding.toLowerCase().includes("fully")) {
          return false;
        }
        if (fundingFilter === "waiver" && !item.funding.toLowerCase().includes("waiver") && !item.funding.toLowerCase().includes("support")) {
          return false;
        }
      }
      // 5. Country Filter
      if (countryFilter !== "all") {
        if (item.country.toLowerCase() !== countryFilter.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }, [active, searchQuery, degreeFilter, fundingFilter, countryFilter]);

  // Handle exploring continent from card
  const handleExploreContinent = (continentId) => {
    setActive(continentId);
    setCountryFilter("all");
    const databaseEl = document.getElementById("scholarship-database-view");
    if (databaseEl) {
      databaseEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle view details action
  const handleViewDetails = (sch) => {
    if (onSelectScholarship) {
      onSelectScholarship(sch);
    } else if (sch.officialUrl) {
      window.open(sch.officialUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Get distinct countries for the active continent
  const availableCountries = useMemo(() => {
    const list = active === "all"
      ? scholarships
      : scholarships.filter((s) => s.continent === active);
    return Array.from(new Set(list.map((s) => s.country))).sort();
  }, [active]);

  // Render a single continent card
  const renderContinentCard = (continent, keyPrefix = "card") => (
    <article
      className={`continent-card ${active === continent.id ? "selected" : ""}`}
      key={`${keyPrefix}-${continent.id}`}
      onClick={() => handleExploreContinent(continent.id)}
    >
      <div className="card-image">
        <img src={continent.image} alt={continent.name} loading="lazy" />
        <div className="image-overlay"></div>
        <span className="continent-symbol">{continent.icon}</span>
        <span className="verified-tag">✓ Verified</span>
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <div>
            <h3>{continent.name}</h3>
            <span className="opportunity-count">
              {continent.count}{" "}
              {continent.count === 1 ? "Opportunity" : "Opportunities"}
            </span>
          </div>
        </div>

        <p className="countries">{continent.countries}</p>

        <div className="funding">
          <span>◆</span>
          Government & University Funded
        </div>

        <button
          type="button"
          className="explore-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleExploreContinent(continent.id);
          }}
        >
          Explore {continent.name}
          <span>→</span>
        </button>
      </div>
    </article>
  );

  return (
    <section className="scholarship-world" id="scholarship-explorer">
      {/* Background decoration */}
      <div className="paint paint-one"></div>
      <div className="paint paint-two"></div>

      <div className="world-container">

        {/* Header */}
        <div className="world-header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              7 CONTINENTS DATABASE
            </div>

            <h2>
              Scholarships
              <br />
              <span>Around the World</span>
            </h2>

            <p>
              Explore verified government and university-funded
              scholarship opportunities from every corner of the world.
            </p>
          </div>

          <div className="verified-box">
            <span className="check">✓</span>
            <div>
              <strong>33</strong>
              <small>Verified Opportunities</small>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="continent-tabs" role="tablist">
          {continents.map((continent) => (
            <button
              key={continent.id}
              className={`continent-tab ${
                active === continent.id ? "active" : ""
              }`}
              onClick={() => {
                setActive(continent.id);
                setCountryFilter("all");
              }}
              type="button"
            >
              <span className="tab-icon">{continent.icon}</span>

              <span className="tab-info">
                <strong>{continent.name}</strong>
                <small>
                  {continent.count > 0
                    ? `${continent.count} opportunities`
                    : "Not available"}
                </small>
              </span>
            </button>
          ))}
        </div>

        {/* Continuous Animation Controls Bar */}
        <div className="marquee-controls-bar">
          <div className="marquee-live-badge">
            <span className="live-dot-pulse"></span>
            <span>Continuous Right-to-Left Explorer &bull; Hover Card to Pause</span>
          </div>
          <div className="marquee-actions">
            <button
              type="button"
              className={`marquee-ctrl-btn ${isPaused ? "active" : ""}`}
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume continuous animation" : "Pause continuous animation"}
            >
              {isPaused ? "▶ Resume Slide" : "⏸ Pause Slide"}
            </button>
            <button
              type="button"
              className="marquee-ctrl-btn"
              onClick={() => setViewMode((prev) => (prev === "marquee" ? "grid" : "marquee"))}
              title="Toggle between Continuous Slide and Static Grid view"
            >
              {viewMode === "marquee" ? "⊞ View as Grid" : "⇄ Continuous Slide (R→L)"}
            </button>
          </div>
        </div>

        {/* Continuous Right-to-Left Sliding Cards */}
        {viewMode === "marquee" ? (
          <div
            className="continent-marquee-container"
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
            role="region"
            aria-label="Continuous sliding continent cards"
          >
            <div className={`continent-marquee-track ${isPaused || hoverPaused ? "paused" : ""}`}>
              {/* Primary set of cards */}
              {continentCards.map((continent) => renderContinentCard(continent, "primary"))}
              {/* Duplicate set for seamless continuous right-to-left loop */}
              {continentCards.map((continent) => renderContinentCard(continent, "duplicate"))}
            </div>
          </div>
        ) : (
          <div className="continent-grid">
            {continentCards.map((continent) => renderContinentCard(continent, "grid"))}
          </div>
        )}

        {/* Scholarship database */}
        <div className="database-section" id="scholarship-database-view">

          <div className="database-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                SCHOLARSHIP DATABASE
              </div>

              <h2>Verified Scholarship Opportunities</h2>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search scholarships, countries, degrees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search scholarships"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    border: "none",
                    background: "none",
                    color: "#dc2626",
                    fontWeight: 800,
                    cursor: "pointer",
                    padding: "0 4px",
                    fontSize: "0.85rem",
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="database-filters">
            <select
              value={degreeFilter}
              onChange={(e) => setDegreeFilter(e.target.value)}
              aria-label="Filter by degree"
            >
              <option value="all">All Degrees ▾</option>
              <option value="Master">Master's Programs</option>
              <option value="Bachelor">Bachelor's Programs</option>
              <option value="PhD">PhD / Doctoral Programs</option>
            </select>

            <select
              value={fundingFilter}
              onChange={(e) => setFundingFilter(e.target.value)}
              aria-label="Filter by funding"
            >
              <option value="all">Funding Type ▾</option>
              <option value="fully">Fully Funded (100%)</option>
              <option value="waiver">Tuition Waiver / Support</option>
            </select>

            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              aria-label="Filter by country"
            >
              <option value="all">
                {active === "all" ? "All Countries ▾" : `Countries in ${continents.find(c => c.id === active)?.name || ""} ▾`}
              </option>
              {availableCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {(searchQuery || degreeFilter !== "all" || fundingFilter !== "all" || countryFilter !== "all" || active !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setDegreeFilter("all");
                  setFundingFilter("all");
                  setCountryFilter("all");
                  setActive("all");
                }}
                style={{
                  background: "#fef2f2",
                  color: "#dc2626",
                  borderColor: "#fca5a5",
                }}
              >
                Reset Filters ✕
              </button>
            )}
          </div>

          {/* Results */}
          <div className="scholarship-list">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship, index) => (
                <div
                  className="scholarship-row"
                  key={`${scholarship.country}-${scholarship.title}-${index}`}
                >
                  <div className="country">
                    <span className="flag">
                      {scholarship.flag}
                    </span>

                    <div>
                      <strong>{scholarship.country}</strong>
                      <small>{scholarship.title}</small>
                    </div>
                  </div>

                  <div className="info-column">
                    <small>Degree</small>
                    <strong>{scholarship.degree}</strong>
                  </div>

                  <div className="info-column">
                    <small>Funding</small>
                    <strong>{scholarship.funding}</strong>
                  </div>

                  <div className="info-column">
                    <small>Deadline</small>
                    <strong>{scholarship.deadline}</strong>
                  </div>

                  <button
                    type="button"
                    className="view-btn"
                    onClick={() => handleViewDetails(scholarship)}
                  >
                    View Details →
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div>{active === "antarctica" ? "❄️" : "🔍"}</div>
                <h3>
                  {active === "antarctica"
                    ? "Polar Research Notice (Antarctica)"
                    : "No scholarships found matching your filters"}
                </h3>
                <p>
                  {active === "antarctica"
                    ? "Antarctica does not have traditional universities or standard degree scholarships. Opportunities are focused on SCAR Polar Fellowships & scientific expeditions."
                    : "Try choosing 'All Continents', clearing your search query, or switching degree filters."}
                </p>
                <button
                  type="button"
                  className="view-btn"
                  style={{ marginTop: "16px" }}
                  onClick={() => {
                    setActive("all");
                    setSearchQuery("");
                    setDegreeFilter("all");
                    setFundingFilter("all");
                    setCountryFilter("all");
                  }}
                >
                  Show All 33 Scholarships
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Journey footer */}
        <div className="journey-line">
          <div className="journey-dot">🇧🇩</div>
          <span>Bangladesh</span>

          <div className="brush-line">
            <span className="plane">✈</span>
          </div>

          <span>Study Anywhere</span>
          <div className="journey-dot">🌍</div>
        </div>

      </div>
    </section>
  );
}
