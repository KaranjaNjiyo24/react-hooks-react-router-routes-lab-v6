import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <>
      <NavBar />
      <main>
        <h1>{movie.title}</h1>
        <p>Duration: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
