import {useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";


export default function useActionRuns(action, branch) {
    const [runs, setRuns] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    return {
        runs,
        setRuns,
        requestStatus,
        error
    };
}
