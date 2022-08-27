/**
 * The ActionList shows a list of Actions for a repository.
 */
import ActionCard from "./ActionCard";
import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";

/**
 * React Component for the Action List. For each Action in the repository, an ActionCard is displayed.
 * @returns {JSX.Element}
 * @constructor
 */
function ActionList() {
    const {actions} = useContext(RepositoryContext);

    return (
        <div className="container m-0 p-0">
            <div className="row mb-4">
                <div className="col-8">
                    <span className="badge bg-primary rounded-pill">Actions</span>
                </div>
            </div>

            <div className="row">
                {
                    actions
                        .map((action) =>
                            <ActionCard action={action} key={action.id}/>
                        )
                }
            </div>
        </div>
    )
}

export default ActionList;
