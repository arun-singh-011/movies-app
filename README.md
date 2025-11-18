🎬 Movies App — React + Vite

A sleek movie discovery app built with React, Vite, and The Movie Database (TMDB) API.
Users can browse popular movies, search for films, and save their favorite titles — all in a clean, responsive UI.

🔗 Live Demo: https://movies-app-puce-six.vercel.app/

🚀 Features
🔍 Search Movies

Search for any movie using live TMDB API results.

🎞️ Browse Popular Movies

View trending & popular movies with poster thumbnails.

❤️ Add to Favorites

Save movies to your Favorites page using React Context.

⚛️ Built With Modern Tools

React + Vite (Fast development & build)

React Router (Navigation)

Context API (Global state for favorites)

CSS Modules (Styling)

Vercel (Deployment)

🛠️ Tech Stack

Frontend: React, Vite

State Management: React Context

Routing: React Router DOM

API: TMDB (The Movie Database)

Deployment: Vercel

📁 Project Structure
src/
 ├── components/
 │    └── MovieCard.jsx
 │    └── Navbar.jsx
 ├── context/
 │    └── MovieContext.jsx
 ├── pages/
 │    └── Home.jsx
 │    └── Favorites.jsx
 ├── css/
 │    └── App.css
 │    └── Favorites.css
 │    └── Home.css
 │    └── index.css
 │    └── Navbar.css
 |── App.jsx
 └── main.jsx

🔑 Environment Variables

Create a .env file in the root:

VITE_API_KEY=your_tmdb_api_key_here


Restart dev server after editing.

📦 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/yourusername/movies-app.git
cd movies-app

2️⃣ Install dependencies
npm install

3️⃣ Start dev server
npm run dev

4️⃣ Build for production
npm run build

📜 License

This project is open-source and free to use.
