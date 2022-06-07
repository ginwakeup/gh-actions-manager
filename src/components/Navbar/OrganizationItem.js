import {setCurrentOrganization} from "../../redux/gh/organizationSlice";
import {useDispatch} from "react-redux";

export default function OrganizationItem({organization}){
    const dispatch = useDispatch();

    return(
        <li><button className="dropdown-item" onClick={() => {
            console.debug(`Set Current Organization to ${organization.login}`);
            dispatch(setCurrentOrganization(organization));
        }}>{organization.login}</button></li>
    )
}