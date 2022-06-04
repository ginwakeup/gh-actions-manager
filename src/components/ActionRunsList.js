import {useSelector} from "react-redux";
import ActionRunCard from "./ActionRunCard";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {useEffect, useState} from "react";
import {getWorkflowRuns} from "../lib/gh/utils";

function ActionRunsList() {
    const [runs, setRuns] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    const action = useSelector((state) => state.action.value)

    useEffect(() => {

        async function getData() {
            try {
                if (action != null){
                    const actionFileNames = action.action.path.split("/")
                    const actionFileName = actionFileNames[actionFileNames.length - 1]
                    const result = await getWorkflowRuns(action.repo.owner, action.repo.name, actionFileName)
                    setRequestStatus(REQUEST_STATUS.SUCCESS);
                    setRuns(result.data.workflow_runs);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getData();
    }, [action])

    if (requestStatus === REQUEST_STATUS.LOADING) return (<div>Loading...</div>)
    if (requestStatus === REQUEST_STATUS.FAILURE) return (<div>Failed.</div>)

    console.log(runs);
    return (
        <div>
            <div>Selected Action: {action.action.name}</div>
            <div>Workflow Runs:</div>

            {
                runs.map((run) =>
                    <ActionRunCard actionRun={run} key={run.id}/>
                )
            }
        </div>
    )
}

export default ActionRunsList;
