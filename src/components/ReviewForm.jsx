export default function ReviewForm () {
    return (
        <>
        <form>
            <div className="py-3">
                {/* nome */}
                <label className="form-label" htmlFor="name">Nome</label>
                <input className="form-control" type="text" id="name"/>
                {/* voto */}
                <label className="form-label" htmlFor="vote">Voto</label>
                <input className="form-control" type="number" id="vote"/>
                {/* testo */}
                <label className="form-label" htmlFor="text">La tua recensione</label>
                <textarea className="form-control" type="text" id="text"/>
            </div>
            <button className="btn btn-primary">Invia recensione</button>
        </form>
        </>
    )
}