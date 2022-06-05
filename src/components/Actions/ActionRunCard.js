function ActionRunCard({actionRun}) {
    let badge = null;

    switch (actionRun.conclusion) {
        case "failure":
            badge = <div className="badge bg-danger">Failed</div>;
            break;

        case "success":
            badge = <div className="badge bg-success">Success</div>;
            break;

        case "cancelled":
            badge = <div className="badge bg-secondary">Cancelled</div>;
            break;

        default:
            badge = <div className="badge bg-light">Unknown</div>;
    }

    return (
        <div className="card action-run-card">
            <div className="card-body">
                <div>Action Name: {actionRun.name}</div>
                <div>Status: {actionRun.status}</div>
                <div>Updated At: {actionRun.updated_at}</div>
                <div>Conclusion: {badge} </div>
            </div>
        </div>
    )
}

export default ActionRunCard;
