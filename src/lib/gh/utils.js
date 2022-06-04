import {Octokit} from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_PAT
})

export async function getRepositories(){
    return await octokit.rest.repos.listForAuthenticatedUser();
}

export async function dispatchHandler(owner, repo, branch, workflow_id) {
    return await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
        owner: owner.login,
        repo: repo,
        workflow_id: workflow_id,
        ref: branch.name,
        inputs: {
        }
    })
}

export async function getBranches(owner, repo) {
    return await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: owner.login,
        repo: repo
    })
}

export async function getWorkflows(owner, repo){
    return await octokit.request(`GET /repos/{owner}/{repo}/actions/workflows`, {
        owner: owner.login,
        repo: repo
    })
}