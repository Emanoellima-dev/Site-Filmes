import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }){
  return (
   <div className="movie-card">
     <img src={imageUrl + movie.poster_path} alt={movie.title}/>
     <h2>{movie.title}</h2>
     <p>
       <FaStar/> {movie.vote_average}
     </p>
     {showLink && <Link to={`/movie/${movie.id}`} className="Link">Detalhes</Link>}
     <footer>icon by "Hilmy Abiyyu Asa" on freeicons.io</footer>
   </div>
  )
}
