import '../../resources/styles/filtersbar.css';
import Organization from "./Organization";
import {useSelector, useDispatch} from 'react-redux'
import {setFilters} from "../../redux/gh/filterSlice";

export default function FiltersBar(){
    const filters = useSelector((state) => state.filters.value)
    const dispatch = useDispatch()

    return(
        <div className="container collapse filters-bar bg-dark text-white p-3" id="filtersBar">
            <div className="row">
                <div className="col-2">
                    <Organization/>
                </div>
                <div className="col-10">
                    <input type="checkbox" className="btn-check" id="btn-check-outlined" onChange={(event) => {
                        dispatch(setFilters({
                            my_repos: event.currentTarget.checked
                        }))
                    }} checked={filters.my_repos}/>
                    <label className="btn btn-outline-secondary"
                           htmlFor="btn-check-outlined">Show Only My Repositories</label>
                </div>
            </div>
        </div>
    )
}