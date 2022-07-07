import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="col-4 mt-5 mb-5">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" to="/add">Add Product</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" to="/display">Display Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;