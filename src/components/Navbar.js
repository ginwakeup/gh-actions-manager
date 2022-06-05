import Organization from "./Filters/Organization";

export default function Navbar(){
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <button className="btn btn-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#filtersBar" aria-expanded="false" aria-controls="filtersBar">
                Filters
            </button>
            <a className="navbar-brand col me-0 px-3" href="#">Github Actions Manager</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header>
    );
}
