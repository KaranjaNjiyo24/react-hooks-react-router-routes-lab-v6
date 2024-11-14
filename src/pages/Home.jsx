import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
