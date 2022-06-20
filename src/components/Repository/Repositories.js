import '../../resources/styles/repo.css';
import {useSelector} from 'react-redux'
import {RepoCard} from "./RepoCard";
import useRepositories from "../../hooks/useRepositories";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";

function Repositories() {
    const filters = useSelector((state) => state.filters.value)
    const user = useSelector((state) => state.user.value)
    const currentOrganization = useSelector((state) => state.organizations.value.current)

    const {
        repos,
        requestStatus,
        error
    } = useRepositories(currentOrganization)

    if (requestStatus === REQUEST_STATUS.LOADING) return (<h6>Loading...</h6>)

    let filteredRepos = repos;

    // Repositories are not filtered when an organization is selected.
    if (currentOrganization === null){
        console.debug("MyRepos Filter is On.")
        filteredRepos = Object.fromEntries(Object.entries(filteredRepos).filter(([key, value]) => {
            if (filters.my_repos === true){
                return value.owner.login === user.login
            }
            return true
        }));
    }
    return (
        <div className="row flex-row flex-nowrap">
                {
                    Object.entries(filteredRepos).map(([key, value]) =>
                            <RepoCard id={key} repo={value} key={key}/>
                        )
                }
        </div>
    )
}

export default Repositories;
