import Repositories from "./Repository/Repositories";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function App() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid overflow-auto">
                <div className="row">
                    <Sidebar/>
                    <main className="col">
                        <div
                            className="d-flex">
                            <div className="row m-5 overflow-scroll">
                                <Repositories/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
