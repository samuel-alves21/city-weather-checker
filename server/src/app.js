const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  // origin: 'http://localhost:3000',
  origin: 'https://samuel-alves21.github.io/city-weather-checker',
}))

app.get('/weather/current/:lat/:lon', async (req, res) => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.API_KEY}&units=metric`)
    const currentWeather = await data.json()
    res.status(200).json(currentWeather)
  } catch (e) {
    const error = new Error('internal server error')
    res.status(503).json({error: error.message})
  }
})

app.get('/weather/forecast/:lat/:lon', async (req, res) => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.API_KEY}&units=metric`)
    const forecast = await data.json()
    res.status(200).json(forecast)  
  } catch (e) {
    const error = new Error('internal server error')
    res.status(503).json({error: error.message})
  }
})

app.get('/position/:cityName', async (req, res) => {
  try {
    const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${req.params.cityName}&appid=${process.env.API_KEY}`)
    const cityLocation = await data.json()
    res.status(200).json(cityLocation)  
  } catch (e) {
    const error = new Error('internal server error')
    res.status(503).json({error: error.message})
  }
})

module.exports = {
  app
}