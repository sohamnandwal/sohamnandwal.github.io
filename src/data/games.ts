export interface Game {
  id: string
  title: string
  path: string
  thumbnail?: string
  genre?: string
  description?: string
}

export const gamesData: Game[] = [
  {
    id: 'eat-the-watermelon',
    title: 'Eat The Watermelon',
    path: '/scratch-games/EatTheWatermelon/Eat The Watermelon.html',
    thumbnail: '/scratch-games/EatTheWatermelon/EatTheWaterMelon.png',
    genre: 'Casual',
    description: 'Guide your character to gobble up sweet watermelon slices and rack up points.',
  },
  {
    id: 'catch-the-carrot',
    title: 'Catch The Carrot',
    path: '/scratch-games/CatchTheCarrot/Catch The Carrot.html',
    thumbnail: '/scratch-games/CatchTheCarrot/CatchTheCarrot.png',
    genre: 'Arcade',
    description: 'Test your reflexes by catching carrots in a maze and beat your friend.',
  },
  {
    id: 'feetball',
    title: 'Feetball',
    path: '/scratch-games/Feetball/Feetball.html',
    thumbnail: '/scratch-games/Feetball/Feetballll.png',
    genre: 'Sports',
    description: 'A bad, mini soccer game with a huge bug, play and always win.',
  },
  {
    id: 'sn-top-down-car-racer',
    title: 'SN Top Down Car Racer',
    path: '/scratch-games/SNTopDownCarRacer/CarRacer.html',
    thumbnail: '/scratch-games/SNTopDownCarRacer/Logo1.png',
    genre: 'Racing',
    description: 'A top-down racer where you compete with bots and chase the best lap times.',
  },
  {
    id: 'four-player-car-racing',
    title: 'Four Player Car Racing',
    path: '/scratch-games/FourPlayerCarRacing/Four Player Car Racing.html',
    thumbnail: '/scratch-games/FourPlayerCarRacing/FourPlayerCarRacing.png',
    genre: 'Racing',
    description: 'Chaotic multiplayer racing across a challenging track.',
  },
  {
    id: 'space-wars',
    title: 'Space Wars',
    path: '/scratch-games/SpaceWars/Space Wars.html',
    thumbnail: '/scratch-games/SpaceWars/SpaceWars.png',
    genre: 'Sci-Fi Arcade',
    description: 'Pilot your starship through deep space and blast your enemy.',
  },
  {
    id: 'top-down-shooter',
    title: 'Top Down Shooter',
    path: '/scratch-games/TopDownShooter/Top Down Shooter.html',
    thumbnail: '/scratch-games/TopDownShooter/TopDownShooter.png',
    genre: 'Shooter',
    description: 'Survive hostile enemy waves with strategic movement and sharp shooting.',
  },
  {
    id: 'game-shooting-2-player',
    title: 'Game Shooting 2 Player',
    path: '/scratch-games/GameShooting2Player/Game Shooting 2 Player.html',
    thumbnail: '/scratch-games/GameShooting2Player/2PlayerShooting.png',
    genre: 'Action',
    description: 'Face off against a rival in an intense two-player sharpshooting showdown.',
  },
  {
    id: 'kill-the-bird',
    title: 'Kill The Bird',
    path: '/scratch-games/KillTheBird/Kill The Bird.html',
    thumbnail: '/scratch-games/KillTheBird/KillTheBird.png',
    genre: 'Action',
    description: 'Aim quickly and accurately to take down swift flying airborne targets.',
  },
  {
    id: 'jump-over-the-ground',
    title: 'Jump Over The Ground',
    path: '/scratch-games/JumpOverTheGround/Jump Over The Ground.html',
    thumbnail: '/scratch-games/JumpOverTheGround/JumpOverTheGround.png',
    genre: 'Platformer',
    description: 'Time your jumps carefully to leap across treacherous ground hazards.',
  },
  
  {
    id: 'red-man-blue-man',
    title: 'Red Man Blue Man',
    path: '/scratch-games/RedManBlueMan/Red Man Blue Man.html',
    thumbnail: '/scratch-games/RedManBlueMan/RedManBlueMan.png',
    genre: 'Multiplayer',
    description: 'A 2-player jump over the ground.',
  },
  
  
  {
    id: 'two-player-pong',
    title: 'Two Player Pong Game',
    path: '/scratch-games/TwoPlayerPong/Two Player Pong Game.html',
    thumbnail: '/scratch-games/TwoPlayerPong/TwoPlayerPong.png',
    genre: 'Retro Arcade',
    description: 'Classic two-player pong face-off with fast bouncing ball physics.',
  },
]

