import {useSelector} from "react-redux";
import useRepositories from "../../hooks/useRepositories";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import {RepositoryTreeItem} from "./RepositoryTreeItem";


export default function RepositoriesTreeView(){
    const currentOrganization = useSelector((state) => state.organizations.value.current)
    const {
        repos,
        requestStatus,
        error
    } = useRepositories(currentOrganization)

    if (requestStatus === REQUEST_STATUS.LOADING) return (<h6>Loading...</h6>)


    return(

        <TreeView
            className="text-white"
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 'auto', color: '255', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {
                Object.entries(repos).map(([key, value]) =>
                    <RepositoryTreeItem id={key} nodeId={key} key={key} repo={value} />
                )
            }
        </TreeView>
    )
}
