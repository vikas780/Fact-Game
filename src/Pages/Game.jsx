import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../Context/Game'

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [data, setData] = useState([])
  const [bgColor, setBgColor] = useState('transparent')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { score, setScore, fetchMessages } = useGameContext()

  useEffect(() => {
    fetchMessages().then((items) => {
      setData(items)
      setLoading(false)
    })
  }, [])

  const handleDragEnd = (event, info) => {
    const offsetY = info.offset.y
    const actualIsSafe = data[currentIndex].isSafe

    let isCorrect = false

    if (offsetY < -40) {
      isCorrect = !actualIsSafe
    } else if (offsetY > 40) {
      isCorrect = actualIsSafe
    } else {
      return
    }

    if (isCorrect) {
      setScore((prev) => prev + 5)
      setBgColor('bg-green-600')
    } else {
      setBgColor('bg-red-600')
    }

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
      className={`relative flex flex-col items-center justify-center w-full overflow-hidden rounded-md ${bgColor}
        h-[25rem] sm:h-[31.25rem] md:h-[34.375rem] lg:h-[37.5rem]`}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className='absolute rounded-[0.75rem] w-[13.75rem] h-[12.5rem] sm:w-[16.25rem] sm:h-[13.75rem] md:w-[17.5rem] md:h-[15rem] lg:w-[18.75rem] lg:h-[16.25rem] bg-[#3b47af] overflow-hidden'
              style={{
                zIndex: 3 - idx,
                transform: `translateX(${idx * 5}rem) scale(${1 - idx * 0.1})`,
              }}
            >
              <div className='absolute inset-0 animate-shimmer bg-[linear-gradient(90deg,#1f2eb1_0%,#1A1D3A_50%,#252b63_100%)] bg-[length:200%_100%]' />
            </div>
          ))
        : data.map((image, index) => (
            <motion.img
              key={index}
              src={image.img}
              alt={`img-${index}`}
              className='absolute rounded-[0.75rem] shadow-lg
                w-[13.75rem] h-[12.5rem]
                sm:w-[16.25rem] sm:h-[13.75rem]
                md:w-[17.5rem] md:h-[15rem]
                lg:w-[18.75rem] lg:h-[16.25rem]
                bg-[#1A1D3A] object-contain p-2'
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
