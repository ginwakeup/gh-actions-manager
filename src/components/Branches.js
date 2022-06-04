import {Dropdown} from "react-bootstrap";
import {useContext} from "react";
import {RepositoryContext} from "../contexts/RepositoryContext";
import Branch from "./Branch";

export function Branches({onClick}) {
    const {branches} = useContext(RepositoryContext);
    if (branches == null) return (<></>)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Branches
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    branches.map((branch) =>
                        <Branch branch={branch} key={branch.name} onClick={onClick}/>
                    )}
            </Dropdown.Menu>
        </Dropdown>
    )
}
