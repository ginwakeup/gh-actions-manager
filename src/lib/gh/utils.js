import {Octokit} from "@octokit/rest";

export function initOcto(){
    return new Octokit({
        auth: process.env.REACT_APP_GH_PAT,
        accept: "application/vnd.github.v3+json"
    })
}

export async function getOrganizations(octokit){
    console.debug("GH API CALL: Getting Organizations For User")

    return octokit.rest.orgs.listForAuthenticatedUser();
}

export async function getOrganizationRepos(octokit, orgName){
    console.debug("GH API CALL: Getting Repos for Org")
    return await octokit.request('GET /orgs/{orgName}/repos', {
        orgName: orgName
    })
}

export async function getAuthenticatedUser(octokit){
    console.debug("GH API CALL: Getting Authenticated User")

    return await octokit.rest.users.getAuthenticated();
}

export async function getRepositories(octokit){
    console.debug("GH API CALL: Repositories")

    return await octokit.rest.repos.listForAuthenticatedUser();
}

export async function dispatchAction(octokit, owner, repo, branch, workflow_id) {
    console.debug("GH API CALL: Dispatching Action")

    return await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
        owner: owner.login,
        repo: repo,
        workflow_id: workflow_id,
        ref: branch.name,
        inputs: {
        }
    })
}

export async function rerunWorkflow(octokit, owner, repo, run_id) {
    console.debug("GH API CALL: Rerun Workflow")

    return await octokit.request('POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun', {
        owner: owner.login,
        repo: repo,
        run_id: run_id,
    })
}

export async function getBranches(octokit, owner, repo) {
    console.debug("GH API CALL: Getting Branches")

    return await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: owner.login,
        repo: repo
    })
}

export async function getWorkflows(octokit, owner, repo){
    console.debug("GH API CALL: Getting Workflows")

    return await octokit.request(`GET /repos/{owner}/{repo}/actions/workflows`, {
        owner: owner.login,
        repo: repo
    })
}

export async function getWorkflowRuns(octokit, owner, repo, workflow_id){
    console.debug("GH API CALL: Getting Workflow Runs")

    return await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
        owner: owner.login,
        repo: repo,
        workflow_id: workflow_id
    })
}

export async function getContent(octokit, owner, repo, file_path){
    console.debug("GH API CALL: Getting file content")

    return await octokit.request('GET /repos/{owner}/{repo}/actions/{file_path}', {
        owner: owner.login,
        repo: repo,
        file_path: file_path
    })
}
