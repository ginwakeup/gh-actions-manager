import {useState} from "react";
import {Octokit} from "@octokit/rest";

function useOcto() {
    const [octo, setOcto] = useState();
    const [error, setError] = useState();

    try {
        const oct = new Octokit({
            auth: process.env.GH_PAT,
        });
        setOcto(oct);

    } catch (e) {
        console.log(e);
        setError(e);
    }

    return {
        octo,
        error
    };
}

export default useOcto;