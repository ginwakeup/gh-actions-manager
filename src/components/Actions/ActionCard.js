import '../../resources/styles/action.css';

import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";
import {dispatchHandler} from "../../lib/gh/utils";

import ActionRunsList from "./ActionRunsList";

function ActionCard({action}) {
    const {repository, branch} = useContext(RepositoryContext);

    return (
        <div className="container mb-2 action-card">
            <div className="row mb-4 mt-4">
                <div className="col-6">
                    <div>{action.name}</div>
                </div>
                <div className="col-2">
                    <div className="btn-group" role="group" aria-label="Actions Control">
                        <button className="btn btn-success" onClick={(e) => {
                            dispatchHandler(
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

                    </div>

                </div>
            </div>
            <div className="collapse" id={`runs-${action.id}`}>
                <ActionRunsList action={action}/>
            </div>
        </div>
    )
}

export default ActionCard;
