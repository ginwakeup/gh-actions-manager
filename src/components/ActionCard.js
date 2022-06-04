import {Col, Container, Row} from "react-bootstrap";
import {useContext} from "react";
import {RepositoryContext} from "../contexts/RepositoryContext";
import {dispatchHandler} from "../lib/gh/utils";

function ActionCard({action}) {
    const {repository, branch} = useContext(RepositoryContext);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div>{action.name}</div>
                </Col>
                <Col>
                    <button onClick={(e) => {
                        dispatchHandler(
                            repository.owner,
                            repository.name,
                            branch,
                            action.id,
                        )
                    }}>Dispatch</button>
                </Col>
                <Col>
                    <button>Runs</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ActionCard;
