import {useEffect, useState} from "react";
import {Octokit} from "@octokit/rest";

export default function useRepository(repositoryName, repositoryOwner) {
    const [actions, setActions] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const oct = await new Octokit({
                    auth: process.env.NEXT_PUBLIC_GH_PAT,
                });
                const act = await oct.actions.listRepoWorkflows(repositoryOwner, repositoryName)
                setActions(act);

            } catch (e) {
                console.log(e);
                setError(e);
            }
        }

        getData();
    }, []);

    return {
        actions,
        error
    };
}
