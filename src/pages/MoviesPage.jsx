import { useEffect, useState } from "react"
import axios from "axios";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    useEffect(()=> {
        console.log("Chiamo Api");
        axios.get("http://localhost:3000/api/movies").then((resp) => {console.log("Data:", resp.data); setMovies(resp.data.results)}).catch((err) =>{console.log(err)})
    }, [])
    return (
        <>
        <h1>Lista dei film</h1>
        <ul>
            {movies.map((movie)=>(
                <li key={movie.id}>{movie.title}</li>
            ))}        
            </ul>
            </>
    )
}