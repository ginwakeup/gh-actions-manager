import '../../resources/styles/filtersbar.css';
import Filters from "./Filters";

export default function FiltersBar(){

    return(
        <div className="container collapse filters-bar bg-dark text-white p-3" id="filtersBar">
            <div className="row">
                <div className="col-10">
                    <Filters/>
                </div>
            </div>
        </div>
    )
}