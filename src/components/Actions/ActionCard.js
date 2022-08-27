/**
 * An ActionCard represents the rendering element for an Action on GitHub.
 * It also shows buttons to dispatch and show runs.
 *
 */
import '../../resources/styles/action.css';

import {useContext, useEffect, useState} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";
import {dispatchAction, getWorkflowRuns} from "../../lib/gh/utils";

import ActionRunsList from "./ActionRunsList";
import {useSelector} from "react-redux";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";

/**
 * ActionCard react component.
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
function ActionCard({action}) {
    const {repository, branch} = useContext(RepositoryContext);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const octokit = useSelector((state) => state.core.octo)
    const [runs, setRuns] = useState();

    /**
     * Updates the list of Action runs by calling the GitHub API again.
     * Unfortunately, due to the nature of GitHub, this might not always show what's running in real-time.
     * @returns {Promise<void>}
     */
    async function updateRuns(){
        const actionFileNames = action.path.split("/")
        const actionFileName = actionFileNames[actionFileNames.length - 1]
        const result = await getWorkflowRuns(octokit, repository.owner, repository.name, actionFileName)
        console.debug(result);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setRuns(result.data.workflow_runs);
    }

    useEffect(() => {
        async function getRuns(){
            await updateRuns();
        }
        getRuns();
    }, [octokit, action])

    if (requestStatus === REQUEST_STATUS.LOADING) return (<h6>Loading...</h6>)
    if (requestStatus === REQUEST_STATUS.FAILURE) return (<h6>Can't fetch runs.</h6>)

    return (
        <div className="card container mb-2 action-card">
            <div className="card-body">
                <div className="row mb-4 mt-4">
                    <div className="col-5">
                        <a href={action.html_url} className="btn btn-primary">{action.name}</a>
                    </div>
                    <div className="col-6">
                        <div className="btn-group" role="group" aria-label="Actions Control">
                            <button className="btn btn-success" onClick={(e) => {
                                dispatchAction(
                                    octokit,
                                    repository.owner,
                                    repository.name,
                                    branch,
                                    action.id,
                                )
                            }}>
                                Dispatch
                            </button>

                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#runs-${action.id}`} aria-expanded="false"
                                    aria-controls={`runs-${action.id}`}>
                                Runs
                            </button>

                            <button className="btn btn-primary" type="button" onClick={async () => {
                                await updateRuns();
                            }}>
                                Refresh
                            </button>
                        </div>

                    </div>
                </div>
                <div className="collapse" id={`runs-${action.id}`}>
                    <ActionRunsList runs={runs}/>
                </div>
            </div>
        </div>
    )
}

export default ActionCard;
