import Repositories from "./Repository/Repositories";
import Navbar from "./Nav/Navbar";

export default function App(){
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar/>
            </div>
            <div className="row m-5 overflow-auto">
                <Repositories/>
            </div>
        </div>
    );
}
