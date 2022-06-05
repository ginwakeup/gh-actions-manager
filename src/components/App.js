import Repositories from "./Repository/Repositories";
import Navbar from "./Navbar";
import FiltersBar from "./Filters/FiltersBar";

export default function App() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid overflow-auto">
                <div className="row">
                    <FiltersBar/>
                    <main className="row">
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
