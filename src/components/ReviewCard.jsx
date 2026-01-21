export default function ReviewCard({ review }) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header">
                 {review.name}  
                </div>
                <div className="card-body">
                    <h5 className="card-title">Voto:</h5><span>{review.vote}</span>
                    <p className="card-text">{review.text}.</p>
                    <div className="d-flex gap-3 mb-4">
                        <button className="btn btn-outline-success btn-sm"><i className="bi bi-hand-thumbs-up me-2"></i>Mi piace</button>
                        <button className="btn btn-outline-danger btn-sm"><i className="bi bi-hand-thumbs-down me-2"></i>Non mi piace</button> 
                    </div>
                    <p className="fst-italic fs-6">Recensione aggiunta il {review.created_at}</p>
                </div>
            </div>
        </>
    )
}