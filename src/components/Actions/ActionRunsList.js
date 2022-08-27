import ActionRunCard from "./ActionRunCard";

/**
 * List of Action Runs. Each item in this list shows the status and info of a single Action Run.
 * @param runs
 * @returns {JSX.Element}
 * @constructor
 */
function ActionRunsList({runs}) {
    return (
        <div>
            {
                runs.map((run) =>
                    <ActionRunCard actionRun={run} key={run.id}/>
                )
            }
        </div>
    )
}

export default ActionRunsList;
