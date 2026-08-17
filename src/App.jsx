import "./App.css";
import Footer from "./Footer.jsx";

const asset = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName}`;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

const quickFacts = [
  {
    value: "8",
    label: "Teams",
  },
  {
    value: "23",
    label: "Week Season",
  },
  {
    value: "Sunday",
    label: "Evening Games",
  },
  {
    value: "20",
    label: "Player Roster Cap",
  },
];

const formatCards = [
  {
    value: "15",
    title: "Maximum Players Dressing",
    text: "Each team may dress a maximum of 15 players for an individual game.",
  },
  {
    value: "A · B · C",
    title: "Balanced Lines",
    text: "Comparable lines are matched against one another to create balanced competition.",
  },
  {
    value: "4",
    title: "Sunday Time Slots",
    text: "Games are typically scheduled Sunday evenings.",
  },
];

const eligibility = [
  "Regular Members",
  "Professional Coaches",
  "Faculty Members",
  "Vacation Members",
];

function Venue({
  logo,
  logoAlt,
  name,
  description,
  logoClass = "",
}) {
  return (
    <div className="venue-item">
      <img
        src={asset(logo)}
        alt={logoAlt}
        className={`venue-logo ${logoClass}`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div>
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <main className="crhl-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        style={{
          "--hero-image": `url("${asset("crhl-hero.jpg")}")`,
          "--watermark-image": `url("${asset("cardinal-logo.png")}")`,
        }}
      >
        <div className="hero-watermark" aria-hidden="true" />

        <div className="hero-background" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <img
              className="hero-logo"
              src={asset("crhl-logo.png")}
              alt="Cardinal Road Hockey League"
            />

            <p className="hero-copy">
              Adult hockey built around camaraderie,
              sportsmanship, balanced competition,
              and the enjoyment of the game.
            </p>

            <div className="hero-season">
              September — March
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK FACTS
      ===================================================== */}

      <section
        className="quick-facts"
        aria-label="Cardinal Road Hockey League quick facts"
      >
        <div className="quick-facts-inner">
          {quickFacts.map((fact) => (
            <article className="quick-fact" key={fact.label}>
              <div className="quick-fact-content">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          LEAGUE FORMAT
      ===================================================== */}

      <section className="league-section">
        <div className="section-inner">
          <div className="section-intro">
            <span className="eyebrow">
              League Format
            </span>

            <h2>
              Built for balanced competition.
            </h2>

            <p>
              The Cardinal Road Hockey League welcomes
              players of varying skill levels across
              8 teams. Each team has a roster cap
              of 20 players, with a maximum of 15
              dressing for each game. The league aims
              to create competitive games by matching
              A, B, and C lines against comparable
              opponents.
            </p>
          </div>

          <div className="format-grid">
            {formatCards.map((card) => (
              <article
                className="format-card"
                key={card.title}
              >
                <div className="format-value">
                  {card.value}
                </div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="where-we-play">
            <div className="where-we-play-heading">
              <span className="mini-label">
                Where We Play
              </span>

              <p>
                CRHL combines indoor hockey at Wings
                Arena with outdoor hockey at Greenwich
                Skating Club.
              </p>
            </div>

            <div className="venue-list">
              <Venue
                logo="gsc-logo.png"
                logoAlt="Greenwich Skating Club"
                name="Greenwich Skating Club"
                description="Cardinal Road · Outdoors"
                logoClass="gsc-logo"
              />

              <Venue
                logo="wings-logo.png"
                logoAlt="Wings Arena"
                name="Wings Arena"
                description="Stamford · Indoors"
                logoClass="wings-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEASON STRUCTURE
      ===================================================== */}

      <section className="season-section">
        <div className="section-inner">
          <div className="season-layout">
            <div className="season-main">
              <div className="compact-section-heading">
                <h2 className="block-heading">
                  Season Structure
                </h2>

                <p>
                  A 23-week schedule beginning indoors,
                  transitioning outdoors, and concluding
                  with the league finals in early March.
                </p>
              </div>

              <div className="season-timeline">
              <div
                className="timeline-line"
                aria-hidden="true"
              />

              <article className="timeline-item">
                <div className="timeline-dot">
                  <span />
                </div>

                <div className="timeline-period">
                  Early September
                  <span>to Early November</span>
                </div>

                <h3>Wings Arena</h3>

                <p>
                  The season begins indoors at Wings
                  Arena.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-dot">
                  <span />
                </div>

                <div className="timeline-period">
                  Mid-November
                  <span>through Late Season</span>
                </div>

                <h3>Primarily GSC</h3>

                <p>
                  Games transition primarily outdoors
                  at Greenwich Skating Club while one
                  weekly indoor game remains at Wings.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-dot final">
                  <span />
                </div>

                <div className="timeline-period">
                  Early March
                  <span>Season Finale</span>
                </div>

                <h3>CRHL Finals</h3>

                <p>
                  The 23-week CRHL season concludes
                  with league finals.
                </p>
              </article>
              </div>
            </div>

            {/* =============================================
                ELIGIBILITY
            ============================================= */}

            <div className="eligibility-bar">
              <div className="eligibility-heading">
                <span>Eligibility</span>

                <p>
                  CRHL participation is available to:
                </p>
              </div>

              <div className="eligibility-options">
                {eligibility.map((item) => (
                  <div
                    className="eligibility-option"
                    key={item}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRADITIONS
      ===================================================== */}

      <section className="traditions-section">
        <div className="section-inner">
          <div className="traditions-top">
            <div className="compact-section-heading traditions-heading">
              <h2 className="block-heading">
                League Traditions
              </h2>

              <p>
                CRHL extends beyond the weekly schedule
                with annual events and traditions shared
                across the league — including the Four
                Nations Hockey Tournament between Riverside,
                Old Greenwich, Greenwich, and Cos Cob, the
                CRHL year-end banquet, and an annual
                year-end gift for league players.
              </p>
            </div>

            <div className="traditions-photo-frame">
              <img
                src={asset("crhl-team.jpg")}
                alt="Cardinal Road Hockey League team"
                className="traditions-photo"
              />
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}

export default App;