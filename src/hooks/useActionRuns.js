import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {getWorkflowRuns} from "../lib/gh/utils";
import {useSelector} from "react-redux";


export default function useActionRuns() {
    const [runs, setRuns] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const action = useSelector((state) => state.action.value)
    useEffect(() => {
        async function getData() {
            try {
                const actionFileNames = action.action.path.split("/")
                const actionFileName = actionFileNames[actionFileNames.length - 1]
                const result = await getWorkflowRuns(action.repo.owner, action.repo.name, actionFileName)
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setRuns(result.data.worklow_runs);

            } catch (e) {
                console.log(e);
                setError(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
            }
        }

        getData();
    }, []);

    return {
        runs,
        requestStatus,
        error
    };
}
