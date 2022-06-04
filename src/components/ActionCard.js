import {Col, Container, Row} from "react-bootstrap";
import {useContext} from "react";
import {RepositoryContext} from "../contexts/RepositoryContext";
import {dispatchHandler} from "../lib/gh/utils";

import {useDispatch} from 'react-redux'
import {setAction} from "../redux/gh/actionsSlice";

function ActionCard({action}) {
    const {repository, branch} = useContext(RepositoryContext);

    const dispatch = useDispatch()

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
                    }}>Dispatch
                    </button>
                </Col>
                <Col>
                    <button onClick={() => {
                        dispatch(setAction({
                            action: action,
                            owner: repository.owner,
                            repo: repository
                        }))
                    }}>Runs
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default ActionCard;
