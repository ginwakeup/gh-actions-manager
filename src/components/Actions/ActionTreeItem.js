/**
 * The ActionTreeItem represents an Action item living under a RepositoryTreeItem inside a RepositoriesTreeView.
 * This View is rendered in the Repositories section and displays a tree with all the repositories and their actions in the selected Organization.
 */
import {TreeItem} from "@mui/lab";
import {useDispatch} from "react-redux";
import {setSelectedAction, setSelectedRepo} from "../../redux/editor";
import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";

/**
 * React component for ActionTreeItem. It simply displays the Action name, but when selected it will set the current selected Action in redux state.
 * This state change will make the UI update to display the Action Code in the central Code Editor.
 * @param action
 * @param id
 * @param nodeId
 * @returns {JSX.Element}
 * @constructor
 */
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
