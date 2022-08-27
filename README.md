# GitHub Actions Manager

[![Docker Image CI](https://github.com/ginwakeup/gh-actions-manager/actions/workflows/deploy-docker.yaml/badge.svg?branch=dev)](https://github.com/ginwakeup/gh-actions-manager/actions/workflows/deploy-docker.yaml)

GHAM is a Web Application that can be used to manage Organizations Actions.

![Alt text](/documentation/images/home.png?raw=true "Home")

## Features
Currently, the viewer only supports:
- :octocat: Visualize all your repositories (based on what PAT you provided)
- :car: Visualize all the runs for a selected Action
- :rocket: Dispatch a Selected Action
- :seedling: Visualize a tree with repositories of the selected Org and their actions
  - :book: Select an action and visualize its code
  - :pencil: Edit the code and push it to GitHub.

![Alt text](/documentation/images/repositories_tree.png?raw=true "Home")


## Execution
`npm start`

## Docker
### Environment
You need to provide a PAT to access to your repositories.

#### Env File
Create a .env file in the repository root before building and add your PAT:

`REACT_APP_GH_PAT="<pat_here>"`

then simply build and start the docker container.

### Development

#### Build
`docker-compose -f docker-compose.dev.yaml build`

#### Run
`docker-compose -f docker-compose.dev.yaml up`

