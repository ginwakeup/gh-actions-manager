import {useSelector} from "react-redux";
import OrganizationDropdown from "./OrganizationDropdown";

export default function Navbar(){
    const currentOrganization = useSelector((state) => state.organizations.current);

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-nowrap p-0 shadow justify-content-between">
            <button className="btn btn-secondary d-flex m-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#filtersBar" aria-expanded="false" aria-controls="filtersBar">
                Filters
            </button>

            <a className="navbar-brand d-flex me-0 px-3" href="#"><h2>Github Actions Manager</h2></a>

            <div className="d-flex m-3">
                <OrganizationDropdown/>
            </div>

        </header>
    );
}
