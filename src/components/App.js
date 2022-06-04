import Repos from "./Repos";
import ActionRunsList from "./ActionRunsList"
import {Col, Container, Row} from "react-bootstrap";

export default function App(){
    return (
        <Container>
            <Row>
                <Col>
                    <Repos/>
                </Col>
                <Col>
                    <ActionRunsList/>
                </Col>
            </Row>
        </Container>
    );
}
