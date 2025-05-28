import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../Context/Game'

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [data, setData] = useState([])
  const [bgColor, setBgColor] = useState('transparent')
  const navigate = useNavigate()
  const { score, setScore, fetchMessages } = useGameContext()

  useEffect(() => {
    fetchMessages().then((items) => {
      console.log('Fetched messages:', items)
      setData(items)
    })
  }, [])
  const handleDragEnd = (event, info) => {
    const offsetY = info.offset.y
    const actualIsSafe = data[currentIndex].isSafe

    let isCorrect = false

    if (offsetY < -40) {
      // User thinks it's FRAUD
      isCorrect = !actualIsSafe
    } else if (offsetY > 40) {
      // User thinks it's SAFE
      isCorrect = actualIsSafe
    } else {
      // Not enough drag distance, ignore
      return
    }

    if (isCorrect) {
      setScore((prev) => prev + 5)
      setBgColor('bg-green-400')
    } else {
      setBgColor('bg-red-400')
    }

    // Wait 1s and then move to next
    setTimeout(() => {
      setBgColor('transparent')
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else {
        navigate('/gameend', { state: { score } })
      }
    }, 1000)
  }

  const getPosition = (index) => {
    if (index < currentIndex - 1) return 'left'
    if (index === currentIndex - 1) return 'left1'
    if (index === currentIndex) return 'center'
    if (index === currentIndex + 1) return 'right1'
    return 'right'
  }

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
    right: { x: '90%', scale: 0.5, zIndex: 2 },
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-[600px] w-full overflow-hidden ${bgColor} `}
    >
      {data.map((image, index) => (
        <motion.img
          key={index}
          src={image.img}
          alt={`img-${index}`}
          className='absolute rounded-[12px] shadow-lg'
          style={{
            width: '300px',
            height: '260px',
            objectFit: 'contain', // Ensures no cropping
            backgroundColor: '#1A1D3A',

            padding: '8px', // or 'contain' if you want full visibility
          }}
          initial={false}
          animate={getPosition(index)}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          drag={index === currentIndex ? 'y' : false}
          dragSnapToOrigin={true}
          dragConstraints={{ top: -100, bottom: 100 }}
          onDragEnd={index === currentIndex ? handleDragEnd : undefined}
        />
      ))}
    </div>
  )
}

export default Game
