import NoImage from "../assets/images/No-Photo-Available.jpg";
import { Link } from "react-router-dom"

export default function MoviesCard({ movie }) {
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
    return (
        <div className="card h-100">
            <img src={movie.image !== null ? `${backendBaseUrl}/image/${movie.image}` : NoImage} className="card-img-top" alt={movie.title} style={{ height: "600px", objectFit: "cover" }}/>
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-text">
                    {movie.abstract}
                </p>
            </div>
            <ul className="list-group list-group-flush py-4">
                <li className="list-group-item"><span className="fw-semibold">Regista: </span>{movie.director}</li>
                <li className="list-group-item"><span className="fw-semibold">Anno di uscita: </span>{movie.release_year}</li>
                <li className="list-group-item"><span className="fw-semibold">Genere: </span>{movie.genre}</li>
            </ul>

            <div className="card-body">
                <div className="d-flex justify-content-between py-3"><p className="fw-semibold">Voto: {Number(movie.avg_vote.toFixed(1))}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary btn-sm">Vedi le recensioni</Link>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-1 align-items-center"><span>Aggiunto il: </span>{movie.created_at}</li>
                </ul>
            </div>
        </div>
    );
}