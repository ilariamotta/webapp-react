import { useEffect, useState } from "react"
import axios from "axios";
import MoviesCard from "../components/MoviesCard";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        console.log("Chiamo Api");
        axios.get("http://localhost:3000/api/movies").then((resp) => { console.log("Data:", resp.data); setMovies(resp.data.results) }).catch((err) => { console.log(err) })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row g-3">
                    <h1 className="py-4">Lista dei film</h1>
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <MoviesCard movie={movie} />
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}