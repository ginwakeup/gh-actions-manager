import '../../resources/styles/repo.css';

import useRepository from "../../hooks/useRepository";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import ActionList from "../Actions/ActionList";
import {RepositoryProvider} from "../../contexts/RepositoryContext";

export function RepoCard({repo}) {
    const {
        actions,
        requestStatus,
        branches,
        branch,
    } = useRepository(repo);

    if (requestStatus === REQUEST_STATUS.LOADING) return (<div>Loading...</div>)

    return (
        <RepositoryProvider repository={repo} branch={branch} branches={branches} actions={actions}>
            <div className="col-3">
                <div className="card repo-card text-white">
                    <div className="card-body">
                        <h4 className="card-title">{repo.name}</h4>
                        <p7 className="card-text">{repo.description}</p7>
                        <hr className="mt-5"/>
                        <ActionList/>
                    </div>
                </div>
            </div>
        </RepositoryProvider>
    );
}