import {Dropdown} from "react-bootstrap";

export default function Branch({branch, onClick}){
    return(
        <Dropdown.Item href="#/action-1" onClick={() => {
            onClick(branch);
        }}>{branch.name}
        </Dropdown.Item>
    )
}