const exec = () => {
    const title = document.getElementById('title')
    const imageCurrentWeather = document.getElementById('image-current-weather')
    const date = document.getElementById('date')
    const weather = document.getElementById('weather')
    const weatherDetails = document.getElementById('details')
    const temperatureMin = document.getElementById('temp-current-min')
    const temperatureMax = document.getElementById('temp-current-max')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind-speed')
    const daysOfWeek = document.querySelectorAll('.day')
    const forecastImage = document.querySelectorAll('.forecast-image')
    const temp = document.querySelectorAll('.temp')

    const openWeatherKey = 'a6658eef49c27518d779e18d06d94340'
    const countrySearch = new Intl.DisplayNames(['en'], {type: 'region'})

    const currentDate = new Date()

    const successFunction = (position) => {
        getPromisses(position.coords.latitude, position.coords.longitude)
    }

    const currentDay = () => {
        const date = new Date()
        return date.getDate().toString()
    }

    const formatAllDate = (date) => formatDate(getDateWeather(date))

    const formatDate = (dateObject) => {
        const days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ]
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]
        return `${days[dateObject.getDay()]}, ${months[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}`
    }

    const getDateWeather = (timestamp) => {
        timestamp *= 1000
        const date = new Date(timestamp)
        return date
    }

    const getDayString = (date) => date.replaceAll(',', '').split(' ')[2]

    navigator.geolocation.getCurrentPosition(successFunction)

    async function getPromisses(lat, lon) {
        try {
            let dataCurrentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`)

            dataCurrentWeather = await dataCurrentWeather.json()

            let dataForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`)

            dataForecast = await dataForecast.json()

            title.textContent = `${dataCurrentWeather.name}, ${countrySearch.of(dataCurrentWeather.sys.country)}`
            imageCurrentWeather.src = `http://openweathermap.org/img/wn/${dataCurrentWeather.weather[0].icon.replace('n', 'd')}@2x.png`
            date.textContent = formatDate(currentDate)
            weather.innerHTML = `<strong>${dataCurrentWeather.weather[0].main}: `
            weatherDetails.textContent = dataCurrentWeather.weather[0].description
            temperatureMin.innerHTML += `<strong>Max: </strong>${dataCurrentWeather.main.temp_max}<sup>&#8451</sup>&nbsp&nbsp&nbsp`
            temperatureMax.innerHTML += ` <strong>Min: </strong>${dataCurrentWeather.main.temp_min}<sup>&#8451</sup>`
            humidity.innerHTML += `<strong>Humidity: </strong>${dataCurrentWeather.main.humidity}%`
            windSpeed.innerHTML += `<strong>Wind: </strong>${dataCurrentWeather.wind.speed}m/s`
            console.log(dataCurrentWeather)
            console.log(dataForecast)

            const days = []

            let cont = 0
            dataForecast.list.forEach((value) => {
                if (getDayString(formatAllDate(value.dt)) === currentDay()) return
                if (days.includes(formatAllDate(value.dt))) return
                days.push(formatAllDate(value.dt))
                daysOfWeek[cont].innerHTML = formatAllDate(value.dt).split(',')[0]
                temp[cont].innerHTML = `<span class="avg">avg: &nbsp</span>${value.main.temp_max.toFixed(2)}<sup>&#8451</sup>`
                value.weather.forEach((info) => {
                    forecastImage[cont].src = `http://openweathermap.org/img/wn/${info.icon.replace('n', 'd')}@2x.png`
                })
                cont++
            })
        }
        catch {
            alert('Error 404, refresh please')
        }
    }
}

exec()
