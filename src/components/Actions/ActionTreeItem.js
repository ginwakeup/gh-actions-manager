import {TreeItem} from "@mui/lab";
import {useDispatch} from "react-redux";
import {setAction} from "../../redux/editor/editorSlice";

export function ActionTreeItem({action, id, nodeId}) {
    const dispatch = useDispatch()

    return (
        <div>
            <TreeItem onClick={()=>{
                dispatch(setAction(action))
            }} id={id} nodeId={nodeId} label={action.name}/>
        </div>
    );
}
