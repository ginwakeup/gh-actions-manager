import {TreeItem} from "@mui/lab";
import {useDispatch} from "react-redux";
import {setSelectedAction, setSelectedRepo} from "../../redux/editor";
import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";

export function ActionTreeItem({action, id, nodeId}) {
    const dispatch = useDispatch()
    const {repository} = useContext(RepositoryContext);

    return (
        <div>
            <TreeItem onClick={()=>{
                dispatch(setSelectedAction(action))
                dispatch(setSelectedRepo(repository))
            }} id={id} nodeId={nodeId} label={action.name}/>
        </div>
    );
}
