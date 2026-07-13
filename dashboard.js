const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('city-search');
const searchMessage = document.getElementById('search-message');
const logoutButton = document.getElementById('logout-button');
const weatherState = document.getElementById('weather-state');
const locationName = document.getElementById('location-name');
const locationMeta = document.getElementById('location-meta');
const currentTemp = document.getElementById('current-temp');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const highLow = document.getElementById('high-low');
const forecastList = document.getElementById('forecast-list');

const weatherCodeMap = [
  { codes: [0], label: 'Clear', className: 'sunny', description: 'Bright and open sky' },
  { codes: [1, 2, 3], label: 'Cloudy', className: 'cloudy', description: 'Partly cloudy and calm' },
  { codes: [45, 48], label: 'Foggy', className: 'cloudy', description: 'Low visibility and mist' },
  { codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], label: 'Rain', className: 'rainy', description: 'Wet and unsettled conditions' },
  { codes: [71, 73, 75, 77, 85, 86], label: 'Snow', className: 'snowy', description: 'Cold with snow in the air' },
  { codes: [95, 96, 99], label: 'Storm', className: 'stormy', description: 'Thunderstorm conditions' }
];

function setMessage(text, isError = true) {
  searchMessage.textContent = text;
  searchMessage.style.color = isError ? 'var(--danger)' : 'var(--success)';
}

function formatDay(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(new Date(dateString));
}

function formatTemperature(value) {
  return `${Math.round(value)}°`;
}

function resolveWeather(code) {
  return weatherCodeMap.find((entry) => entry.codes.includes(code)) ?? {
    label: 'Mixed',
    className: 'cloudy',
    description: 'Changing conditions'
  };
}

function setBackground(weatherClassName) {
  document.body.classList.remove('sunny', 'cloudy', 'rainy', 'snowy', 'stormy');
  document.body.classList.add(weatherClassName);
}

async function searchCity(city) {
  const lookupUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
  lookupUrl.search = new URLSearchParams({
    name: city,
    count: '1',
    language: 'en',
    format: 'json'
  }).toString();

  const geocodeResponse = await fetch(lookupUrl);
  if (!geocodeResponse.ok) {
    throw new Error('Location lookup failed.');
  }

  const geocodeData = await geocodeResponse.json();
  const place = geocodeData.results?.[0];

  if (!place) {
    throw new Error('No city found.');
  }

  const forecastUrl = new URL('https://api.open-meteo.com/v1/forecast');
  forecastUrl.search = new URLSearchParams({
    latitude: String(place.latitude),
    longitude: String(place.longitude),
    current: 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto'
  }).toString();

  const forecastResponse = await fetch(forecastUrl);
  if (!forecastResponse.ok) {
    throw new Error('Forecast fetch failed.');
  }

  const forecastData = await forecastResponse.json();
  renderWeather(place, forecastData);
}

function renderWeather(place, forecastData) {
  const current = forecastData.current;
  const daily = forecastData.daily;
  const weather = resolveWeather(current.weather_code);

  setBackground(weather.className);
  weatherState.textContent = weather.label;
  locationName.textContent = `${place.name}, ${place.admin1 ?? place.country}`;
  locationMeta.textContent = `${place.country} · ${place.latitude.toFixed(2)}°, ${place.longitude.toFixed(2)}°`;
  currentTemp.textContent = formatTemperature(current.temperature_2m);
  weatherDescription.textContent = weather.description;
  humidity.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  highLow.textContent = `${formatTemperature(daily.temperature_2m_max[0])} / ${formatTemperature(daily.temperature_2m_min[0])}`;

  forecastList.innerHTML = daily.time.slice(0, 3).map((date, index) => {
    const dayWeather = resolveWeather(daily.weather_code[index]);
    return `
      <article class="forecast-item">
        <div>
          <h3>${formatDay(date)}</h3>
          <p>${dayWeather.label} · ${dayWeather.description}</p>
        </div>
        <div class="forecast-temp">
          <div>${formatTemperature(daily.temperature_2m_max[index])}</div>
          <p>${formatTemperature(daily.temperature_2m_min[index])}</p>
        </div>
      </article>
    `;
  }).join('');
}

async function handleInitialState() {
  const savedUser = sessionStorage.getItem('weather-vault-user');
  if (!savedUser) {
    window.location.href = 'index.html';
    return;
  }

  searchInput.value = 'London';
  try {
    await searchCity(searchInput.value);
    setMessage(`Welcome back, ${savedUser}. Showing London as a starter city.`, false);
  } catch (error) {
    setMessage(error.message);
  }
}

searchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = searchInput.value.trim();

  if (!city) {
    setMessage('Enter a city name first.');
    return;
  }

  setMessage('Loading weather data...', false);

  try {
    await searchCity(city);
    setMessage(`Showing weather for ${city}.`, false);
  } catch (error) {
    setMessage(error.message);
  }
});

logoutButton?.addEventListener('click', () => {
  sessionStorage.removeItem('weather-vault-user');
  window.location.href = 'index.html';
});

handleInitialState();
