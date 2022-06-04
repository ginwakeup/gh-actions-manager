# GitHub Actions Manager

GHAM is a Web Application that can be used to manage Organizations Actions.

## Features
Currently, the viewer only supports:
- Visualize all your repositories (based on what PAT you provided)
- Visualize all the runs for a selected Action
- Dispatch a Selected Action

## Docker
### Environment
You need to provide a PAT to access to your repositories.

#### Env File
Create a .env file in the repository root before building and add your PAT:

`REACT_APP_GH_PAT="<pat_here>"`

then simply build and strunart the docker container.

### Development

#### Build
`docker-compose -f docker-compose.dev.yaml build`

#### Run
`docker-compose -f docker-compose.dev.yaml up`

