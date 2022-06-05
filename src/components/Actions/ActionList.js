import ActionCard from "./ActionCard";
import {useContext} from "react";
import {RepositoryContext} from "../../contexts/RepositoryContext";

function ActionsList() {
    const {actions} = useContext(RepositoryContext);

    return (
        <div className="container m-0 p-0">
            <div className="row mb-4">
                <span className="badge bg-primary rounded-pill">Actions</span>
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

export default ActionsList;
