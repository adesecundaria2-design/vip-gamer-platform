import React from 'react'
import { motion } from 'framer-motion'

const RaceGame = () => {
  const [score, setScore] = React.useState(0)
  const [gameStarted, setGameStarted] = React.useState(false)

  const startGame = () => {
    setGameStarted(true)
    setScore(Math.floor(Math.random() * 1000))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="gamer-card text-center"
    >
      <h3 className="text-2xl font-bold text-gamer-orange mb-4">🚗 Carrera de Autos</h3>
      
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="gamer-btn"
        >
          Jugar
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-4xl font-bold text-gamer-gold">{score} pts</p>
          <button
            onClick={() => setGameStarted(false)}
            className="gamer-btn"
          >
            Enviar Puntuación
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default RaceGame