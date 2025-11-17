import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "La La Land", release_date: "2009" },
    { id: 3, title: "Avengers", release_date: "2023" },
    { id: 4, title: "Happy Gilmore", release_date: "2018" },
  ];

  const handleSearch = (e) => {
    alert(searchQuery);
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
