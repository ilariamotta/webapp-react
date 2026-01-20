export default function MoviesCard({ movie }) {
    return (
        <div className="card h-100">
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-text">
                    {movie.abstract}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><h6>Regista:</h6>{movie.director}</li>
                <li className="list-group-item"><h6>Anno di uscita:</h6>{movie.release_date}</li>
                <li className="list-group-item"><h6>Genre:</h6>{movie.genre}</li>
            </ul>

            <div className="card-body">
                <p>Voto:</p>
                <a href="#" className="card-link">Vedi le recensioni</a>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h6>Aggiunto il:</h6>{movie.created_at}</li>
                </ul>
            </div>
        </div>
    );
}