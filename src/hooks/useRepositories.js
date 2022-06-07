import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import {getOrganizationRepos, getRepositories} from "../lib/gh/utils";
import {useSelector} from "react-redux";


export default function useRepositories() {
    const [repos, setRepos] = useState();
    const currentOrganization = useSelector((state) => state.organizations.value.current)
    const octokit = useSelector((state) => state.octo.value)

    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                console.log(currentOrganization)
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
    }, [octokit]);

    return {
        repos,
        requestStatus,
        error
    };
}
