import useRepository from "../../hooks/useRepository";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import {RepositoryProvider} from "../../contexts/RepositoryContext";
import {useSelector} from "react-redux";
import {TreeItem} from "@mui/lab";
import {ActionTreeItem} from "../Actions/ActionTreeItem";

export function RepositoryTreeItem({repo, id, nodeId}) {
    const octokit = useSelector((state) => state.core.octo)

    const {
        actions,
        requestStatus,
        branches,
        branch,
    } = useRepository(octokit, repo);

    if (requestStatus === REQUEST_STATUS.LOADING) return (<div>Loading...</div>)

    return (
        <RepositoryProvider repository={repo} branch={branch} branches={branches} actions={actions}>
            <TreeItem id={id} nodeId={nodeId} label={repo.name}>
                {
                    Object.entries(actions).map(([k, value]) =>
                        <ActionTreeItem id={value.id.toString()} key={value.id.toString()} nodeId={value.id.toString()} action={value} />
                    )
                }
            </TreeItem>
        </RepositoryProvider>
    );
}
