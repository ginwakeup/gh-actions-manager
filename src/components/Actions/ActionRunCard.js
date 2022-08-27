/**
 * An ActionRunCard item displays information regarding a single run for an Action.
 */
import {rerunWorkflow} from "../../lib/gh/utils";
import {useSelector} from "react-redux";
import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";

/**
 * The ActionRunCard component displays the current status of an Action on GitHub.
 * Unfortunately, due to the delay in GitHub API, what's showed here might not be run-time.
 * @param actionRun
 * @returns {JSX.Element}
 * @constructor
 */
function ActionRunCard({actionRun}) {
    const octokit = useSelector((state) => state.core.octo)
    const {repository} = useContext(RepositoryContext);

    let conclusionBadge = null;

    switch (actionRun.conclusion) {
        case "failure":
            conclusionBadge = <div className="badge bg-danger">Failed</div>;
            break;

        case "success":
            conclusionBadge = <div className="badge bg-success">Success</div>;
            break;

        case "cancelled":
            conclusionBadge = <div className="badge bg-secondary">Cancelled</div>;
            break;

        default:
            conclusionBadge = <div className="badge bg-warning">{actionRun.conclusion}</div>;
    }

    let statusBadge = null;

    switch (actionRun.status) {
        case "in_progress":
            statusBadge = <div className="badge bg-primary">In Progress</div>;
            break;

        case "completed":
            statusBadge = <div className="badge bg-success">Success</div>;
            break;

        default:
            statusBadge = <div className="badge bg-warning">{actionRun.status}</div>;
    }

    return (
        <div className="card action-run-card">
            <div className="card-body">
                <div className="row">
                    <div>Action Name: {actionRun.name}</div>
                    <div>Status: {statusBadge}</div>
                    <div>Updated At: {actionRun.updated_at}</div>
                    <div>Conclusion: {conclusionBadge} </div>
                </div>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary m-2" onClick={() => {
                        rerunWorkflow(
                            octokit,
                            repository.owner,
                            repository.name,
                            actionRun.id
                        )
                    }}>
                        Rerun
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActionRunCard;
