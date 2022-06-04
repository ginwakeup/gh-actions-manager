import {useSelector} from "react-redux";
import {getWorkflowRuns} from "../lib/gh/utils";
import {Card} from "react-bootstrap";

function ActionRuns() {
    const action = useSelector((state) => state.action.value)

    if(action.action.path == null){
        return(
            <div></div>
        )
    }

    const actionFileNames = action.action.path.split("/")
    const actionFileName = actionFileNames[actionFileNames.length - 1]

    const workflowRuns = getWorkflowRuns(action.owner, action.repo.name, actionFileName)
    console.log(workflowRuns)
    return (
        <div>
            <div>Selected Action: {action.action.name}</div>
            <div>Workflow Runs:</div>

            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>

        </div>
    )
}

export default ActionRuns;
