import type { Game } from '../data/games'

interface GameCardProps {
  game: Game
  onSelectGame: (game: Game) => void
}

export function GameCard({ game, onSelectGame }: GameCardProps) {
  return (
    <article
      className="portfolio-card game-card-interactive"
      onClick={() => onSelectGame(game)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelectGame(game)
        }
      }}
      aria-label={`{Play_Game}: ${game.title}`}
    >
      {game.thumbnail ? (
        <div className="game-card-thumb-wrap">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="game-card-thumb"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="game-card-thumb-wrap game-card-thumb-fallback">
          <span className="game-thumb-placeholder">{'{Game_Preview}'}</span>
        </div>
      )}

      <div className="card-header">
        <h3 className="card-title">{game.title}</h3>
        {game.genre && <span className="card-tag">{game.genre}</span>}
      </div>

      <p className="card-description">{game.description || '{Game_Description}'}</p>

      <div className="card-footer">
        <button
          type="button"
          className="card-action-btn"
          onClick={(e) => {
            e.stopPropagation()
            onSelectGame(game)
          }}
        >
          {'Play'} &rarr;
        </button>
      </div>
    </article>
  )
}
