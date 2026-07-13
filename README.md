# Weather Vault

A sleek, minimally dark weather experience that starts with a real login gate and opens into a live city dashboard. Users sign in through a local JSON database, search for a city, and get current conditions, a 3-day forecast, and a weather-responsive background that shifts with the forecast.

## Preview

Weather Vault is designed to feel calm, focused, and polished. The interface leans into deep neutrals, soft glass panels, and bright weather accents so the data stands out without losing the dark aesthetic.

## What It Does

- Validates login credentials by fetching local data from `users.json`
- Redirects authenticated users from `index.html` to `dashboard.html`
- Fetches live geocoding and forecast data from Open-Meteo
- Shows current weather, humidity, wind, and high/low values
- Renders a 3-day forecast using template-driven DOM updates
- Changes the page background to match the weather state: sunny, cloudy, rainy, snowy, or stormy

## Tech Stack

- HTML5 for semantic structure
- CSS3 for responsive layout, glassmorphism-style cards, and atmosphere-driven theming
- Vanilla JavaScript for DOM handling, async fetch requests, and conditional UI updates
- Local JSON data for login validation
- Open-Meteo APIs for live weather and forecast data

## Project Structure

- `index.html` - login screen
- `dashboard.html` - weather dashboard
- `auth.js` - credential validation and redirect logic
- `dashboard.js` - weather fetch, render, and background state handling
- `styles.css` - shared design system and responsive styling
- `users.json` - local credential store used by the login screen

## How To Run

This project must be served from a local web server because the login flow uses `fetch()` to read `users.json`.

1. Open a terminal in the project folder.
2. Start a local server:

```bash
python3 -m http.server 8000
```

3. Open the app in your browser:

```text
http://localhost:8000
```

## Test Accounts

Use one of the following credential pairs:

- `admin / password123`
- `student / jsbasiç2026`

## Submission Notes

- The app includes a `.gitignore` for local and editor noise.
- The repository is already initialized and ready for GitHub submission.
- The Git history contains multiple meaningful commits that reflect the build process.

## Why This Project Stands Out

This is not just a static weather card. It starts with authentication, uses fetched local data for login validation, and then turns the dashboard into a living interface that reacts to real forecast conditions. The result is a compact project that still demonstrates HTML structure, CSS design, JavaScript state handling, and API integration in one clean flow.
