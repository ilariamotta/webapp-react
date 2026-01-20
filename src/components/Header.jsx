import { NavLink } from "react-router-dom"

export default function Header({ nomeApp }) {
    const headerLinks = [
        { title: "Home", path: "/" },
        { title: "Movies", path: "/movies" },
    ]
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{nomeApp || "DefaultApp"}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {headerLinks.map((link, index) => {
                                return <li className="nav-item" key={index}>
                                    <NavLink className="nav-link active" aria-current="page" to={link.path}>{link.title}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}