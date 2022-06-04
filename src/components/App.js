import Repos from "./Repos";
import ActionRuns from "./ActionRuns"
import {Col, Container, Row} from "react-bootstrap";

export default function App(){
    return (
        <Container>
            <Row>
                <Col>
                    <Repos/>
                </Col>
                <Col>
                    <ActionRuns/>
                </Col>
            </Row>
        </Container>
    );
}
