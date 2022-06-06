import '../../resources/styles/repo.css';

import {setRepositories} from "../../redux/gh/repositoriesSlice";

import {useSelector, useDispatch} from 'react-redux'
import {getRepositories} from "../../lib/gh/utils";
import {useEffect} from "react";
import {RepoCard} from "./RepoCard";

function Repositories() {
    const filters = useSelector((state) => state.filters.value)
    const octokit = useSelector((state) => state.octo.value)
    let repositories = useSelector((state) => state.repositories.value)
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getRepositories(octokit).then(
            response => dispatch(setRepositories(response.data))
        )
    }, [octokit, dispatch])

    let filteredRepos = repositories;

    if (filters.my_repos === true){
        console.debug("MyRepos Filter is On.")
        filteredRepos = Object.fromEntries(Object.entries(filteredRepos).filter(([key, value]) => {
            return value.owner.login === user.login
        }));
        repositories = filteredRepos;
    }
    return (
        <div className="row flex-row flex-nowrap">
                {
                    Object.entries(repositories).map(([key, value]) =>
                            <RepoCard id={key} repo={value} key={key}/>
                        )
                }
        </div>
    )
}

export default Repositories;
