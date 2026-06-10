import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TargetShootingGame = () => {
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [targets, setTargets] = useState([])
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    if (!gameStarted) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameStarted(false)
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted])

  useEffect(() => {
    if (!gameStarted) return

    const spawnTargets = setInterval(() => {
      setTargets(prev => [...prev, {
        id: Date.now(),
        x: Math.random() * 80,
        y: Math.random() * 60,
      }])
    }, 800)

    return () => clearInterval(spawnTargets)
  }, [gameStarted])

  const handleTargetClick = (id) => {
    setScore(prev => prev + 100)
    setTargets(prev => prev.filter(t => t.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="gamer-card text-center"
    >
      <h3 className="text-2xl font-bold text-gamer-orange mb-4">🎯 Tiro al Blanco</h3>
      
      {!gameStarted ? (
        <button
          onClick={() => {
            setGameStarted(true)
            setScore(0)
            setTimeLeft(30)
          }}
          className="gamer-btn"
        >
          Jugar
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-around">
            <p className="text-2xl font-bold text-gamer-gold">Puntos: {score}</p>
            <p className="text-2xl font-bold text-gamer-orange">Tiempo: {timeLeft}s</p>
          </div>
          
          <div className="relative w-full h-64 bg-gamer-dark border-2 border-gamer-orange rounded-lg overflow-hidden">
            {targets.map(target => (
              <motion.button
                key={target.id}
                onClick={() => handleTargetClick(target.id)}
                className="absolute w-10 h-10 bg-gamer-danger rounded-full cursor-crosshair"
                style={{
                  left: `${target.x}%`,
                  top: `${target.y}%`,
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                🎯
              </motion.button>
            ))}
          </div>

          {timeLeft === 0 && (
            <div>
              <p className="text-2xl font-bold text-gamer-gold mb-4">¡Juego Terminado!</p>
              <button
                onClick={() => setGameStarted(false)}
                className="gamer-btn"
              >
                Enviar Puntuación
              </button>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default TargetShootingGame