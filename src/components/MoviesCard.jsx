export default function MoviesCard({ movie }) {
    const baseURL = "http://localhost:3000";
    return (
        <div className="card h-100">
            <img src={`http://localhost:3000/image/${movie.image}`} className="card-img-top" alt={movie.title} style={{ height: "600px", objectFit: "cover" }}/>
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-text">
                    {movie.abstract}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="fw-semibold">Regista: </span>{movie.director}</li>
                <li className="list-group-item"><span className="fw-semibold">Anno di uscita: </span>{movie.release_year}</li>
                <li className="list-group-item"><span className="fw-semibold">Genere: </span>{movie.genre}</li>
            </ul>

            <div className="card-body">
                <div className="d-flex justify-content-between"><p className="fw-semibold">Voto:</p>
                <a href="#" className="card-link">Vedi le recensioni</a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-1 align-items-center"><span>Aggiunto il: </span>{movie.created_at}</li>
                </ul>
            </div>
        </div>
    );
}