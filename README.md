# Weather Vault

A minimally dark weather dashboard project with a login screen backed by `users.json` and a city-based forecast dashboard.

## Features

- Login form that validates credentials by fetching local `users.json`
- Redirect to `dashboard.html` after successful sign-in
- Open weather data fetched from Open-Meteo based on searched city
- Current conditions, humidity, wind, high/low, and a 3-day forecast
- Weather-driven background states for sunny, cloudy, rainy, snowy, and stormy conditions

## Local run

Because the login flow uses `fetch()` for local files, run this project from a local web server instead of opening the HTML file directly.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Test users

- `admin / password123`
- `student / jsbasiç2026`
