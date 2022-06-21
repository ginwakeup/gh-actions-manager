import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {getOrganizationRepos, getRepositories} from "../lib/gh/utils";
import {useSelector} from "react-redux";


export default function useRepositories(currentOrganization) {
    const [repos, setRepos] = useState();
    const octokit = useSelector((state) => state.core.octo)

    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                if(currentOrganization === null){
                    getRepositories(octokit).then(
                        response => {
                            setRepos(response.data)
                            setRequestStatus(REQUEST_STATUS.SUCCESS);
                        }
                    )
                }
                else{
                    getOrganizationRepos(octokit, currentOrganization.login).then(
                        response => {
                            setRepos(response.data)
                            setRequestStatus(REQUEST_STATUS.SUCCESS);
                        }
                    )
                }
            } catch (e) {
                console.log(e);
                setError(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setRepos({});
            }
        }

        getData();
    }, [octokit, currentOrganization]);

    return {
        repos,
        requestStatus,
        error
    };
}
