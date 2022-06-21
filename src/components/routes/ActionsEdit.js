import Layout from "../Layout";
import RepositoriesTreeView from "../Repository/RepositoriesTreeView";
import CodeEditor from "../Editor/CodeEditor";

function ActionsEdit() {
    return (
        <Layout>
            <div className="row">
                <div className="col-3">
                    <RepositoriesTreeView/>
                </div>
                <div className="col">
                    <CodeEditor/>
                </div>
            </div>
        </Layout>
    )
}

export default ActionsEdit;
