import {useEffect, useState} from "react";
import {Octokit} from "@octokit/rest";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}
export default function useRepositories() {
    const [repositories, setRepositories] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const oct = await new Octokit({
                    auth: process.env.REACT_APP_GH_PAT,
                });
                const repositories = await oct.rest.repos.listForAuthenticatedUser();
                setRepositories(repositories.data);
                setRequestStatus(REQUEST_STATUS.SUCCESS);

            } catch (e) {
                console.log(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }

        getData();
    }, []);

    return {
        repositories,
        requestStatus,
        error
    };
}
