import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NoImage from "../assets/images/No-Photo-Available.jpg";

export default function MovieSinglePage() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios.get(`${backendBaseUrl}/api/movies/${id}`).then((resp) => setMovie(resp.data)).catch((err) => console.log(err))
    }, [id])

    return (
        <> <section>
            <div className="container">
                <div className="row">
                    <h1>{movie.title}</h1>
                    <h2>Dettagli</h2>
                    {/* COLONNA LOCANDINA */}
                    <div className="col-12 col-md-4">
                        <img src={movie.image !== null ? `${backendBaseUrl}/image/${movie.image}` : NoImage}
                            alt={movie.title}
                            className="img-fluid rounded shadow"
                            style={{ objectFit: "cover", maxHeight: "600px", width: "100%" }} /></div>
                    {/* COLONNA DETTAGLI */}
                    <div className="col-12 col-md-8">
                        <h4>Sinossi:</h4>
                        <p>{movie.abstract}</p>
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item px-0"><strong>Regista:</strong> {movie.director}</li>
                            <li className="list-group-item px-0"><strong>Anno:</strong> {movie.release_year} </li>
                            <li className="list-group-item px-0"><strong>Genere:</strong> {movie.genre}</li>
                        </ul>
                        {/* recensioni*/}
                        <h3>Recensioni:</h3>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}