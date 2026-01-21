import { useEffect, useState } from "react"
import axios from "axios";
import MoviesCard from "../components/MoviesCard";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios.get(`${backendBaseUrl}/api/movies?page=${page}`).then((resp) => { console.log("Data:", resp.data); setMovies(resp.data.results); setTotalPages(resp.data.info.pages)}).catch((err) => { console.log(err) })
    }, [page])

    return (
        <>
            <div className="container">
                <div className="row g-3 justify-content-center">
                    <h1 className="py-4">Lista dei film</h1>
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <MoviesCard movie={movie} />
                        </div>
                    ))}
                    <div className="d-flex justify-content-center align-items-center gap-5 my-4">
                        <button onClick={() => {setPage(page - 1)}}className="btn btn-outline-secondary" disabled={page === 1}>← Indietro</button>
                        <span className="fw-semibold">Pagina {page} / {totalPages}</span>
                        <button onClick={() => {setPage(page + 1)}} className="btn btn-primary" disabled={page === totalPages}>Avanti →</button>
                    </div>
                </div>
            </div>
        </>
    )
}