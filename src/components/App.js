import Repositories from "./Repository/Repositories";
import Navbar from "./Navbar";
import FiltersBar from "./Filters/FiltersBar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/gh/userSlice";
import {getAuthenticatedUser} from "../lib/gh/utils";

export default function App() {
    const octokit = useSelector((state) => state.octo.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getAuthenticatedUser(octokit).then(
            response => {
                dispatch(setUser(response.data))
            }
        )

    }, [dispatch])

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
