import {Link} from "react-router-dom";

import OrganizationDropdown from "./OrganizationDropdown";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Github Actions Manager</Link>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Repositories</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/actions_edit">Actions</Link>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-secondary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#filtersBar" aria-expanded="false" aria-controls="filtersBar">
                            Filters
                        </button>
                    </li>
                </ul>

                <div className="d-flex m-3">
                    <OrganizationDropdown/>
                </div>
            </div>
        </nav>
    );
}
