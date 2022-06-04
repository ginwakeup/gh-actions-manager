import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {getBranches} from "../lib/gh/utils";

export default function useBranches(repository) {
    const [branches, setBranches] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const branches = await getBranches(repository.owner, repository.name);
                setBranches(branches.data);
                setRequestStatus(REQUEST_STATUS.SUCCESS);

            } catch (e) {
                console.log(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }

        getData();
    }, [repository.owner, repository.name]);

    return {
        branches,
        requestStatus,
        error
    };
}
