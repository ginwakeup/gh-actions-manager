import '../../resources/styles/repo.css';
import {useDispatch, useSelector} from 'react-redux'
import {RepoCard} from "./RepoCard";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import {useEffect, useState} from "react";
import {getOrganizationRepos, getRepositories} from "../../lib/gh/utils";
import {setRepositories} from "../../redux/core";

function Repositories() {
    const filters = useSelector((state) => state.ui.filters.value)
    const user = useSelector((state) => state.core.user)
    const repos = useSelector((state) => state.core.repositories)
    const octokit = useSelector((state) => state.core.octo)
    const currentOrganization = useSelector((state) => state.core.organizations.current)
    const dispatch = useDispatch()

    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    useEffect(() => {
        async function getData() {
            try {
                if(currentOrganization === null){
                    getRepositories(octokit).then(
                        response => {
                            dispatch(setRepositories(response.data))
                            setRequestStatus(REQUEST_STATUS.SUCCESS);
                        }
                    )
                }
                else{
                    getOrganizationRepos(octokit, currentOrganization.login).then(
                        response => {
                            dispatch(setRepositories(response.data))
                            setRequestStatus(REQUEST_STATUS.SUCCESS);
                        }
                    )
                }
            } catch (e) {
                console.log(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                dispatch(setRepositories({}))
            }
        }

        getData();
    }, [octokit, currentOrganization]);

    if (requestStatus === REQUEST_STATUS.LOADING) return (<h6>Loading...</h6>)

    let filteredRepos = repos;

    // Repositories are not filtered when an organization is selected.
    if (currentOrganization === null){
        console.debug("MyRepos Filter is On.")
        filteredRepos = Object.fromEntries(Object.entries(filteredRepos).filter(([key, value]) => {
            if (filters.my_repos === true){
                return value.owner.login === user.login
            }
            return true
        }));
    }
    return (
        <div className="row flex-row flex-nowrap">
                {
                    Object.entries(filteredRepos).map(([key, value]) =>
                            <RepoCard id={key} repo={value} key={key}/>
                        )
                }
        </div>
    )
}

export default Repositories;
