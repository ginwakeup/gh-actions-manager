import useRepository from "../../hooks/useRepository";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import ActionList from "../Actions/ActionList";
import {RepositoryProvider} from "../../contexts/RepositoryContext";
import {useSelector} from "react-redux";
import {TreeItem} from "@mui/lab";

export function ActionTreeItem({action, id, nodeId, key}) {
    console.log(action)

    return (
        <div>
            <TreeItem id={id} nodeId={nodeId} key={key} label={action.name}/>
        </div>
    );
}
