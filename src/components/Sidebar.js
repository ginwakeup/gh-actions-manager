import '../resources/styles/sidebar.css';
import Organizations from "./Filters/Organization";

export default function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start bg-dark text-light" tabIndex="-1" id="filtersOffCanvas" data-bs-keyboard="false"
             data-bs-backdrop="false" aria-labelledby="filtersOffCanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="filtersOffCanvasLabel">Filters</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"/>
            </div>

            <div className="offcanvas-body">
                <div id="sidebar">
                    <div className="nav flex-column py-3">
                        <Organizations/>
                        <li className="nav-item sidebar-item">
                            <input type="checkbox" className="btn-check" id="btn-check-2-outlined"/>
                            <label className="btn btn-outline-secondary"
                                   htmlFor="btn-check-2-outlined">Show Only My Repositories</label>

                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}