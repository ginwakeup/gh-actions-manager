import '../../resources/styles/filtersbar.css';
import Organization from "./Organization";

export default function FiltersBar(){
    return(
        <div className="container collapse filters-bar bg-dark text-white p-3" id="filtersBar">
            <div className="row">
                <div className="col-2">
                    <Organization/>
                </div>
                <div className="col-10">
                    <input type="checkbox" className="btn-check" id="btn-check-2-outlined"/>
                    <label className="btn btn-outline-secondary"
                           htmlFor="btn-check-2-outlined">Show Only My Repositories</label>
                </div>
            </div>
        </div>
    )
}