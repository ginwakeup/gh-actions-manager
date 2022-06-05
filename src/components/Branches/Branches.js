import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";
import Branch from "./Branch";

export function Branches({onClick}) {
    const {branches} = useContext(RepositoryContext);
    if (branches == null) return (<></>)

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                Branches
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    branches.map((branch) =>
                        <Branch branch={branch} key={branch.name} onClick={onClick}/>
                    )}
            </ul>
        </div>
    )
}
