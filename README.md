# 🌦️ Weather Vault

> A sleek, dark-themed weather application with authentication, live weather data, and dynamic backgrounds that respond to real-time forecast conditions.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Open-Meteo](https://img.shields.io/badge/API-Open--Meteo-0099FF?style=for-the-badge)

---

## ✨ Overview

**Weather Vault** delivers a clean and immersive weather experience with a secure login flow, live weather updates, and a responsive interface that adapts to current weather conditions.

Users authenticate through a local JSON-based credential store before accessing a dashboard that displays:

- 🌡️ Current weather
- 💧 Humidity
- 💨 Wind speed
- 📈 High & Low temperatures
- 📅 3-Day Forecast
- 🎨 Dynamic weather-based backgrounds

Built entirely with **HTML, CSS, and Vanilla JavaScript**, the project focuses on modern UI design while demonstrating asynchronous API integration and DOM manipulation.

---

# 🚀 Features

- 🔐 Local authentication using `users.json`
- ➜ Automatic redirect after successful login
- 🌍 City search with Open-Meteo Geocoding API
- ☀️ Live weather conditions
- 📅 3-Day weather forecast
- 💨 Wind speed display
- 💧 Humidity information
- 📈 Daily High & Low temperatures
- 🎨 Dynamic backgrounds based on weather conditions
- 📱 Fully responsive layout
- ✨ Glassmorphism-inspired dark UI

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, responsiveness & glassmorphism |
| Vanilla JavaScript | Application logic & DOM manipulation |
| Open-Meteo API | Weather & Geocoding data |
| JSON | Local authentication database |

---

# 📂 Project Structure

```text
Weather-Vault/
│
├── index.html          # Login page
├── dashboard.html      # Weather dashboard
├── styles.css          # Shared styling
├── auth.js             # Login authentication
├── dashboard.js        # Weather logic
├── users.json          # Local user database
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-vault.git
```

## 2. Navigate into the project

```bash
cd weather-vault
```

## 3. Start a local server

Because the application loads `users.json` using `fetch()`, it **must** be served from a local web server.

Using Python:

```bash
python3 -m http.server 8000
```

Or:

```bash
python -m http.server 8000
```

---

## 4. Open the application

Visit:

```text
http://localhost:8000
```

---

# 🔑 Test Accounts

| Username | Password |
|----------|----------|
| `admin` | `password123` |
| `student` | `jsbasiç2026` |

---

# 🌐 APIs Used

## Open-Meteo Geocoding API

Used to convert city names into geographic coordinates.

```
https://geocoding-api.open-meteo.com/
```

## Open-Meteo Forecast API

Used to retrieve live weather conditions and forecast data.

```
https://api.open-meteo.com/
```

---

# 🎨 UI Highlights

- Minimal dark interface
- Glassmorphism cards
- Dynamic weather backgrounds
- Smooth transitions
- Responsive layout
- Modern typography
- Weather-driven visual experience

---

# 💡 Learning Outcomes

This project demonstrates:

- Authentication using local JSON data
- Working with the Fetch API
- Asynchronous JavaScript (`async/await`)
- REST API integration
- DOM manipulation
- Conditional rendering
- Responsive web design
- Dynamic UI updates based on application state

---

# 🚧 Future Improvements

- 🔒 Password hashing
- 👤 User registration
- ⭐ Favorite cities
- 📍 Current location support
- 🌅 Sunrise & Sunset data
- 🌧 Hourly forecast
- 🌡 Temperature unit toggle (°C / °F)
- 🌙 Dark & Light theme switch
- 📊 Weather charts

---

# 📄 License

This project is intended for educational and portfolio purposes.

---

## 👨‍💻 Author

**Harshvardhanam**

If you found this project helpful, consider giving it a ⭐ on GitHub.
