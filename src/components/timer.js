import React, { useEffect, useState } from 'react'
import { months } from './data'

function Timer({ valid }) {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  let interval
  let period = valid

  const getTime = () => {
    let month = new Date().getMonth()
    let day = new Date().getDate() + period
    const year = new Date().getFullYear()
    let formate

    if (
      (day > 31 && month === 0) ||
      (day > 31 && month > 6 && month % 2 === 1) ||
      (day > 31 && month < 7 && month % 2 === 0)
    ) {
      // months 0 2 4 6 7 9 11
      day = new Date().getDate() - 31 + period
      month = new Date().getMonth() + 1
      formate = `${months[month]} ${day}, ${year}, 00:00:00`
    } else if ((day > 30 && month % 2 !== 0) || (day > 30 && month % 2 === 0)) {
      // 3 5 8 10
      day = new Date().getDate() - 30 + period
      month = new Date().getMonth() + 1
      formate = `${months[month]} ${day}, ${year}, 00:00:00`
    } else if (day > 28 && month === 1) {
      // 1
      day = new Date().getDate() - 27 + period
      month = new Date().getMonth() + 1
      formate = `${months[month]} ${day}, ${year}, 00:00:00`
    } else {
      month = new Date().getMonth()
      day = new Date().getDate() + period
      formate = `${months[month]} ${day}, ${year}, 00:00:00`
    }

    const countDate = new Date(formate).getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const gap = countDate - now

      // Time converstions (milliseconds)
      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24

      // Calculate time remaining(gap)
      const displayDay = Math.floor(gap / day)
      const displayHour = Math.floor((gap % day) / hour)
      const displayMinute = Math.floor((gap % hour) / minute)
      const displaySecond = Math.floor((gap % minute) / second)

      if (gap < 0) {
        clearInterval(interval.current)
      } else {
        setDays(displayDay)
        setHours(displayHour)
        setMinutes(displayMinute)
        setSeconds(displaySecond)
      }
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getTime(setDays, setHours, setMinutes, setSeconds)
    }, 1000)
  })

  return (
    <span>
      {days}d : {hours}h : {minutes}m :{seconds}s
    </span>
  )
}

export default Timer
