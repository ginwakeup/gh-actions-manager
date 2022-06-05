function ActionRunCard({actionRun}) {
    let conclusionBadge = null;

    switch (actionRun.conclusion) {
        case "failure":
            conclusionBadge = <div className="badge bg-danger">Failed</div>;
            break;

        case "success":
            conclusionBadge = <div className="badge bg-success">Success</div>;
            break;

        case "cancelled":
            conclusionBadge = <div className="badge bg-secondary">Cancelled</div>;
            break;

        default:
            conclusionBadge = <div className="badge bg-warning">{actionRun.conclusion}</div>;
    }

    let statusBadge = null;

    switch (actionRun.status) {
        case "in_progress":
            statusBadge = <div className="badge bg-primary">In Progress</div>;
            break;

        case "completed":
            statusBadge = <div className="badge bg-success">Success</div>;
            break;

        default:
            statusBadge = <div className="badge bg-warning">{actionRun.status}</div>;
    }

    return (
        <div className="card action-run-card">
            <div className="card-body">
                <div>Action Name: {actionRun.name}</div>
                <div>Status: {statusBadge}</div>
                <div>Updated At: {actionRun.updated_at}</div>
                <div>Conclusion: {conclusionBadge} </div>
            </div>
        </div>
    )
}

export default ActionRunCard;
