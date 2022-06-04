import {Accordion} from "react-bootstrap";
import useRepository from "../hooks/useRepository";
import {REQUEST_STATUS} from "../lib/const/requestStatus";
import ActionList from "./ActionList";
import {RepositoryProvider} from "../contexts/RepositoryContext";
import {Branches} from "./Branches";

export function Repo({id, repo}) {
    const {
        actions,
        requestStatus,
        branches,
        branch,
        setBranch,
    } = useRepository(repo);

    if (requestStatus === REQUEST_STATUS.LOADING) return (<div>Loading...</div>)

    return (
        <RepositoryProvider repository={repo} branch={branch} branches={branches} actions={actions}>
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{repo.name}</Accordion.Header>
                <Accordion.Body>
                    <div>
                        {repo.description}
                        {branch != null
                            ? <div>Current Branch: {branch.name}</div>
                            : <div>Current Branch: None</div>
                        }
                        <Branches onClick={setBranch}/>
                        {actions.length>=1
                            ? <ActionList/>
                            : <></>
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </RepositoryProvider>
    );
}
