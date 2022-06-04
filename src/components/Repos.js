import {Repo} from "./Repo";
import {Accordion} from "react-bootstrap";
import {setRepositories} from "../redux/gh/repositoriesSlice";

import { useSelector, useDispatch } from 'react-redux'
import {getRepositories} from "../lib/gh/utils";
import {useEffect} from "react";

function Repos() {
    const repositories = useSelector((state) => state.repositories.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getRepositories().then(
            response => dispatch(setRepositories(response.data))
        )
    },[dispatch])

    return (
        <Accordion defaultActiveKey={['0']}>
            <div>
                {
                    Object.entries(repositories)
                        .map(([key, value]) =>
                            <div key={key}>
                                <Repo id={key} repo={value}/>
                            </div>
                        )
                }
            </div>
        </Accordion>
    )
}

export default Repos;
