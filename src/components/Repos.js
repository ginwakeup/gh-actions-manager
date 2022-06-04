import useRepositories from "../hooks/useRepositories";
import {Repo} from "./Repo";
import {Accordion} from "react-bootstrap";
import {REQUEST_STATUS} from "../lib/const/requestStatus";

function Repos() {
    const {
        repositories,
        requestStatus
    } = useRepositories();

    if (requestStatus === REQUEST_STATUS.LOADING) return (<div>Loading...</div>)

    return (
        <Accordion defaultActiveKey={['0']}>
            <div>
                {
                    Object.entries(repositories)
                        .map(([key, value]) =>
                            <div className="card col-4 cardmin margintopbottom20" key={key}>
                                <Repo id={key} repo={value}/>
                            </div>
                        )
                }
            </div>
        </Accordion>
    )
}

export default Repos;
