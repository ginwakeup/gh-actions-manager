import {Accordion} from "react-bootstrap";

export function Repo({id, repo}) {
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{repo.name}</Accordion.Header>
            <Accordion.Body>
                {repo.description}
            </Accordion.Body>
        </Accordion.Item>
    );
}
