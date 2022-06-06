import ActionRunCard from "./ActionRunCard";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import {useEffect, useState, useContext} from "react";
import {getWorkflowRuns} from "../../lib/gh/utils";
import {RepositoryContext} from "../../contexts/RepositoryContext";
import {useSelector} from "react-redux";

function ActionRunsList({action}) {
    const octokit = useSelector((state) => state.octo.value)

    const [runs, setRuns] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const {repository} = useContext(RepositoryContext);
    useEffect(() => {

        async function getData() {
            try {
                if (action != null){
                    const actionFileNames = action.path.split("/")
                    const actionFileName = actionFileNames[actionFileNames.length - 1]
                    const result = await getWorkflowRuns(octokit, repository.owner, repository.name, actionFileName)
                    setRequestStatus(REQUEST_STATUS.SUCCESS);
                    setRuns(result.data.workflow_runs);
                }
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
            }
        }

        getData();
    }, [octokit, repository, action])

    if (requestStatus === REQUEST_STATUS.LOADING) return (<h6>Loading...</h6>)
    if (requestStatus === REQUEST_STATUS.FAILURE) return (<h6>Can't fetch runs.</h6>)

    return (
        <div>
            {
                runs.map((run) =>
                    <ActionRunCard actionRun={run} key={run.id}/>
                )
            }
        </div>
    )
}

export default ActionRunsList;
