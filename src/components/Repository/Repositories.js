import '../../resources/styles/repo.css';

import {RepoCard} from "./RepoCard";
import {setRepositories} from "../../redux/gh/repositoriesSlice";

import {useSelector, useDispatch} from 'react-redux'
import {getRepositories} from "../../lib/gh/utils";
import {useEffect} from "react";

function Repositories() {
    const repositories = useSelector((state) => state.repositories.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getRepositories().then(
            response => dispatch(setRepositories(response.data))
        )
    }, [dispatch])

    return (
        <div className="row flex-row flex-nowrap">
                {
                    Object.entries(repositories)
                        .map(([key, value]) =>
                            <RepoCard id={key} repo={value} key={key}/>
                        )
                }
        </div>
    )
}

export default Repositories;
