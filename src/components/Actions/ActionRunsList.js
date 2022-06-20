import ActionRunCard from "./ActionRunCard";

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
