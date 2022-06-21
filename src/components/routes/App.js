import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import Repositories from "../Repository/Repositories";
import {setUser} from "../../redux/gh/userSlice";
import {getAuthenticatedUser} from "../../lib/gh/utils";
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
                <main className="row">
                    <div
                        className="d-flex">
                        <div className="row m-5 overflow-scroll">
                            <Repositories/>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    );
}
