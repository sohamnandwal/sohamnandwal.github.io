import { useState, useEffect, useMemo } from 'react'
import { gamesData, type Game } from './data/games'
import { GameCard } from './components/GameCard'
import { GamePage } from './pages/GamePage'
import './App.css'

function App() {
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    const validThemes = ['nordic-slate', 'matcha-milk', 'warm-terracotta', 'dusk-lavender', 'midnight-charcoal']
    return saved && validThemes.includes(saved) ? saved : 'nordic-slate'
  })

  const [activeGame, setActiveGame] = useState<Game | null>(() => {
    const hash = window.location.hash
    if (hash.startsWith('#game-')) {
      const gameId = hash.replace('#game-', '')
      return gamesData.find((g) => g.id === gameId) || null
    }
    return null
  })

  const [showAllGames, setShowAllGames] = useState<boolean>(false)

  const randomGames = useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    const shuffled = [...gamesData].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [])

  const displayedGames = showAllGames ? gamesData : randomGames

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#game-')) {
        const gameId = hash.replace('#game-', '')
        const found = gamesData.find((g) => g.id === gameId)
        if (found) {
          setActiveGame(found)
        }
      } else if (!hash || hash === '#games') {
        setActiveGame(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectGame = (game: Game) => {
    setActiveGame(game)
    window.location.hash = `game-${game.id}`
  }

  const handleBackFromGame = () => {
    setActiveGame(null)
    window.location.hash = 'games'
  }

  const handleNavClick = (sectionId: string) => {
    if (activeGame) {
      setActiveGame(null)
      window.location.hash = sectionId
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 60)
    }
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <div className="portfolio-app">
      {/* Top Navigation & Theme Switcher */}
      <header className="portfolio-header">
        <div className="header-brand">
          <button
            type="button"
            className="brand-btn"
            onClick={handleBackFromGame}
            aria-label="{Brand_Logo_Or_Initials}"
          >
            <span className="brand-logo">SN</span>
          </button>
        </div>
        <nav className="portfolio-nav" aria-label="{Main_Navigation_Label}">
          <a href="#about" onClick={() => handleNavClick('about')} className="nav-link">Me</a>
          {/* <a href="#projects" onClick={() => handleNavClick('projects')} className="nav-link">{'{Nav_Projects}'}</a>
          <a href="#blogs" onClick={() => handleNavClick('blogs')} className="nav-link">{'{Nav_Blogs}'}</a> */}
          <a href="#games" onClick={() => handleNavClick('games')} className="nav-link">Games</a>
          {/* <a href="#achievements" onClick={() => handleNavClick('achievements')} className="nav-link">{'{Nav_Achievements}'}</a> */}
          <a href="#contact" onClick={() => handleNavClick('contact')} className="nav-link">Contact</a>
        </nav>
        <div className="theme-switcher">
          <label htmlFor="theme-select" className="theme-label">{'Theme'}:</label>
          <select
            id="theme-select"
            className="theme-select"
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
            aria-label="Theme selector"
          >
            <option value="nordic-slate">Nordic Slate</option>
            <option value="matcha-milk">Matcha Milk</option>
            <option value="warm-terracotta">Warm Terracotta</option>
            <option value="dusk-lavender">Dusk Lavender</option>
            <option value="midnight-charcoal">Midnight Charcoal</option>
          </select>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {activeGame ? (
          <GamePage
            game={activeGame}
            allGames={gamesData}
            onSelectGame={handleSelectGame}
            onBack={handleBackFromGame}
          />
        ) : (
          <>
            {/* Hero / About Section */}
            <section id="about" className="portfolio-section hero-section">
              <h1 className="hero-name">Soham Nandwal</h1>
              <p className="hero-tagline"><i>human & student</i></p>
              <p className="hero-bio">B.Tech Engineering Physics @ IIT Roorkee | Physics & Math Enthusiast | Avid Programmer | Tech & Gaming Aficionado</p>
              {/* <div className="hero-cta-group">
                <a href="#projects" className="cta-button primary">{'{Projects_CTA_Text}'}</a>
                <a href="#contact" className="cta-button secondary">{'{Contact_CTA_Text}'}</a>
              </div> */}
            </section>

            {/* Projects Section */}
            {/* <section id="projects" className="portfolio-section">
              <div className="section-title-wrap">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">A few things I've worked upon</p>
              </div>
              <div className="cards-grid">
                <article className="portfolio-card">
                  <div className="card-header">
                    <h3 className="card-title">{'{Project1_Title}'}</h3>
                    <span className="card-tag">{'{Project1_TechStack}'}</span>
                  </div>
                  <p className="card-description">{'{Project1_Description}'}</p>
                  <a href="{Project1_Link}" target="_blank" rel="noopener noreferrer" className="card-action">
                    {'{Project1_Link_Text}'} &rarr;
                  </a>
                </article>

                <article className="portfolio-card">
                  <div className="card-header">
                    <h3 className="card-title">{'{Project2_Title}'}</h3>
                    <span className="card-tag">{'{Project2_TechStack}'}</span>
                  </div>
                  <p className="card-description">{'{Project2_Description}'}</p>
                  <a href="{Project2_Link}" target="_blank" rel="noopener noreferrer" className="card-action">
                    {'{Project2_Link_Text}'} &rarr;
                  </a>
                </article>
              </div>
            </section> */}


            {/* Games Section */}
            <section id="games" className="portfolio-section">
              <div className="section-title-wrap">
                <div className="games-toggle-wrap">
                  <h2 className="section-title">Games</h2>
                  <button
                    type="button"
                    className="games-toggle-btn"
                    onClick={() => setShowAllGames((prev) => !prev)}
                  >
                    {showAllGames ? 'Show Less' : `Show All Games`}
                  </button>
                </div>
                <p className="section-subtitle">A few scratch games I made years ago...</p>
              </div>
              <div className="cards-grid">
                {displayedGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onSelectGame={handleSelectGame}
                  />
                ))}
              </div>
              
            </section>

            {/* Achievements Section */}
            {/* <section id="achievements" className="portfolio-section">
              <div className="section-title-wrap">
                <h2 className="section-title">{'{Section_Achievements_Title}'}</h2>
                <p className="section-subtitle">{'{Section_Achievements_Subtitle}'}</p>
              </div>
              <div className="cards-grid">
                <article className="portfolio-card">
                  <div className="card-header">
                    <h3 className="card-title">{'{Achievement1_Title}'}</h3>
                    <span className="card-meta">{'{Achievement1_Year}'}</span>
                  </div>
                  <p className="card-description">{'{Achievement1_Description}'}</p>
                  <span className="card-tag">{'{Achievement1_Issuer}'}</span>
                </article>
              </div>
            </section> */}
            <section id="achievements" className="portfolio-section">
              <div className="more-coming-wrap">
                <h2 className="section-title">More Things Coming Soon...</h2>
                <p className="section-subtitle">Work in progress</p>
              </div>
              
            </section>

            {/* Contact & Social Section */}
            <section id="contact" className="portfolio-section">
              <div className="section-title-wrap">
                <h2 className="section-title">Socials</h2>
                <p className="section-subtitle">Happy to meet new like-minded people!</p>
              </div>
              <div className="contact-links-grid">
                <a href="https://github.com/sohamnandwal" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/soham-nandwal/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  LinkedIn
                </a>
                {/* <a href="{Email_URL}" className="contact-link-item">
                  {'{Email_Label}'}
                </a> */}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; 2026 . Soham Nandwal</p>
      </footer>
    </div>
  )
}

export default App
