import {useDispatch, useSelector} from "react-redux";
import OrganizationItem from "./OrganizationItem";
import {useEffect} from "react";
import {getOrganizations} from "../../lib/gh/utils";
import {setCurrentOrganization, setOrganizations} from "../../redux/core";

function OrganizationDropdown() {
    const octokit = useSelector((state) => state.core.octo)
    const organizations = useSelector((state) => state.core.organizations.list);
    const currentOrganization = useSelector((state) => state.core.organizations.current);
    const dispatch = useDispatch();

    useEffect(() => {
        getOrganizations(octokit).then(
            response => {
                dispatch(setOrganizations(response.data))
            }
        )
    }, [octokit, dispatch])

    return (
        <div className="dropdown show">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="orgDropBtn"
                    data-bs-toggle="dropdown" aria-expanded="false">
                {currentOrganization == null ? "Organization" : currentOrganization.login}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="orgDropBtn">
                <li><button className="dropdown-item" onClick={() => {
                    console.debug(`Set Current Organization to All`);
                    dispatch(setCurrentOrganization(null));

                }}>All</button></li>
                {
                    Object.entries(organizations).map(([key, value]) =>
                        <OrganizationItem id={key} organization={value} key={key}/>
                    )
                }
            </ul>
        </div>
    )
}

export default OrganizationDropdown;
