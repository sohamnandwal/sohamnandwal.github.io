import { useEffect, useRef, useMemo } from 'react'
import type { Game } from '../data/games'
import { GameCard } from '../components/GameCard'

interface GamePageProps {
  game: Game
  allGames: Game[]
  onSelectGame: (game: Game) => void
  onBack: () => void
}

export function GamePage({ game, allGames, onSelectGame, onBack }: GamePageProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [game.id])

  const suggestions = useMemo(() => {
    const pool = allGames.filter((g) => g.id !== game.id)
    // eslint-disable-next-line react-hooks/purity
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [game.id, allGames])

  return (
    <div className="game-page-container">
      {/* Top Bar with Back Button */}
      <nav className="game-page-nav" aria-label="{Game_Navigation_Label}">
        <button
          type="button"
          onClick={onBack}
          className="game-back-btn"
          aria-label="Back"
        >
          &larr; {'Back'}
        </button>

      </nav>

      {/* Game Header Information */}
      <header className="game-page-header">
        <div className="game-header-title-row">
          <h1 className="game-page-title">{game.title}</h1>
          {game.genre && <span className="card-tag">{game.genre}</span>}
        </div>
        <p className="game-page-description">
          {game.description || '{Game_Description}'}
        </p>
      </header>

      {/* Playable Game Frame */}
      <section className="game-frame-wrapper" aria-label={`{Play_Game}: ${game.title}`}>
        <iframe
          ref={iframeRef}
          src={game.path}
          title={game.title}
          className="game-iframe"
          allow="fullscreen; autoplay; gamepad; keyboard"
          loading="lazy"
        />
      </section>

      {/* Game Suggestions Section */}
      <section className="game-suggestions-section">
        <div className="section-title-wrap">
          <h2 className="section-title">{'More Games'}</h2>
          <p className="section-subtitle">{'Try more bad games'}</p>
        </div>

        <div className="cards-grid">
          {suggestions.map((suggestedGame) => (
            <GameCard
              key={suggestedGame.id}
              game={suggestedGame}
              onSelectGame={onSelectGame}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
