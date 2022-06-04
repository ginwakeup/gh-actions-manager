import {Card} from "react-bootstrap";

function ActionRunCard({actionRun}){
    return(
        <Card>
            <Card.Body>
                <div>Action Name: {actionRun.name}</div>
                <div>Status: {actionRun.status}</div>
                <div>Updated At: {actionRun.updated_at}</div>
                <div>Conclusion: {actionRun.conclusion}</div>
            </Card.Body>
        </Card>
    )
}

export default ActionRunCard;
