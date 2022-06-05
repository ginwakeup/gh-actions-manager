import Organization from "./Filters/Organization";

export default function Navbar(){
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#filtersOffCanvas" aria-controls="offcanvasExample">Filters
            </button>

            <a className="navbar-brand col me-0 px-3" href="#">Github Actions Manager</a>
        </header>
    );
}
