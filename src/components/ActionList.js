import ActionCard from "./ActionCard";
import {useContext} from "react";
import {RepositoryContext} from "../contexts/RepositoryContext";

function ActionsList() {
    const {actions} = useContext(RepositoryContext);

    return (
        <div>
            {
                actions
                    .map((action) =>
                        <ActionCard action={action} key={action.id}/>
                    )
            }
        </div>
    )
}

export default ActionsList;
