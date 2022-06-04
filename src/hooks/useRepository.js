import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {getBranches, getWorkflows} from "../lib/gh/utils";


export default function useRepository(repository) {
    const [actions, setActions] = useState();
    const [branches, setBranches] = useState();
    const [branch, setBranch] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const act = await getWorkflows(repository.owner, repository.name)
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setActions(act.data.workflows);

                const brs = await getBranches(repository.owner, repository.name);

                if (brs != null) {
                    setBranches(brs.data);
                    setBranch(brs.data[0]);
                }

            } catch (e) {
                console.log(e);
                setError(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setActions({});
            }
        }

        getData();
    }, [repository]);

    return {
        actions,
        requestStatus,
        branches,
        branch,
        setBranch,
        error
    };
}
