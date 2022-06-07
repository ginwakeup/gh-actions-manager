import {setFilters} from "../../redux/gh/filterSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Filters() {
    const filters = useSelector((state) => state.filters.value)
    const dispatch = useDispatch()

    return (
        <div>
            <input type="checkbox" className="btn-check" id="btn-check-outlined" onChange={(event) => {
                dispatch(setFilters({
                    my_repos: event.currentTarget.checked
                }))
            }} checked={filters.my_repos}/>
            <label className="btn btn-outline-secondary"
                   htmlFor="btn-check-outlined">Show Only My Repositories</label>
        </div>
    )
}