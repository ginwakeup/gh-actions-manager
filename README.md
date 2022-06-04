# GitHub Actions Manager

GHAM is a Web Application that can be used to manage Organizations Actions.

## Docker
### Environment
You need to provide a PAT to access to your repositories.

#### Env File
Create a .env file in the repository root before building, then simply start the docker container.

### Development

#### Build
`docker-compose -f docker-compose.dev.yaml build`

#### Run
`docker-compose -f docker-compose.dev.yaml up`

