import { useState } from "react";
import axios from "axios";

    const initialFormValue = {
        name: "",
        vote: 0,
        text: "",
    };

export default function ReviewForm ({movieId, aggiornamentoReviews}) {
    const [formData, setFormData] = useState(initialFormValue);

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    function updateFormData(event) {
        const value = event.target.value;
        const key = event.target.name;

        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${backendBaseUrl}/api/movies/${movieId}/reviews`, formData).then(() => {aggiornamentoReviews(); setFormData(initialFormValue)}).catch((err) => {alert(err.response.data.message)})

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="py-3">
                {/* nome */}
                <label className="form-label" htmlFor="name">Nome</label>
                <input className="form-control" type="text" id="name" value={formData.name} onChange={updateFormData} name="name" required/>
                {/* voto */}
                <label className="form-label" htmlFor="vote">Voto</label>
                <input className="form-control" type="number" id="vote" value={formData.vote} onChange={updateFormData} name="vote" min="1" max="5"  required/>
                {/* testo */}
                <label className="form-label" htmlFor="text">La tua recensione</label>
                <textarea className="form-control" type="text" id="text" value={formData.text} onChange={updateFormData} name="text"/>
            </div>
            <button className="btn btn-primary">Invia recensione</button>
        </form>
        </>
    )
}