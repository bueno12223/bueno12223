import React, { useEffect, useState } from 'react'

function numbers ({ number, duration = 5, counter = 1, description }) {
  const [count, setCount] = useState('0')
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    let start = 0
    const end = parseInt(number.substring(0, 3))
    if (start === end) return
    const totalMilSecDur = parseInt(duration)
    const incrementTime = (totalMilSecDur / end) * 1000
    const timer = setInterval(() => {
      start = start + counter
      setCount(String(start.toFixed()) + number.substring(3))
      if (start >= end) clearInterval(timer)
    }, incrementTime)
  }, [showFixed])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  return (
    <h4 className={showFixed ? 'about-me__fix' : 'about-me__notfix'}><b>{count}</b><br /> {description}</h4>
  )
}

export default numbers
