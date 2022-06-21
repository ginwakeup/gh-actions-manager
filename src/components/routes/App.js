import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import Repositories from "../Repository/Repositories";
import Navbar from "../Navbar/Navbar";
import FiltersBar from "../Filters/FiltersBar";
import {setUser} from "../../redux/gh/userSlice";
import {getAuthenticatedUser} from "../../lib/gh/utils";
import {BrowserRouter} from "react-router-dom";
import Layout from "../Layout";

export default function App() {
    const octokit = useSelector((state) => state.octo.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getAuthenticatedUser(octokit).then(
            response => {
                dispatch(setUser(response.data))
            }
        );
    }, [octokit, dispatch])

    return (
        <div>
            <Layout>
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
            </Layout>
        </div>
    );
}
