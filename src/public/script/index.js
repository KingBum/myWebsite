
const APP_ID = 'a1a5fe75a503505ee3af2ce87245750f'
const DEFAULT = "--"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const searchInput = $('.search-input')
const cityName = $('.city-name')
const weatherState = $('.weather-state')
const weatherIcon = $('.weather-icon')
const temperature = $('.temperature')

const sunrise = $('.sunrise')
const sunset = $('.sunset')
const humidity = $('.humidity')
const windSpeed = $('.wind-speed')

console.log([searchInput])


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric`)
        .then(async res => {
            const data = await res.json()
            console.log('[Search Input]', data)
            cityName.innerHTML = data.name || DEFAULT
            weatherState.innerHTML = data.weather[0].description || DEFAULT
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT
            humidity.innerHTML = data.main.humidity || DEFAULT
            windSpeed.innerHTML = (data.wind.speed*3.6).toFixed(2) || DEFAULT
            searchInput.value = ""
        })
})

