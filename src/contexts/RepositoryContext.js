import {createContext} from "react";

const RepositoryContext = createContext();

function RepositoryProvider({children, repository, branch, branches, actions}){
    return (
        <RepositoryContext.Provider value={{ repository, branch, branches, actions}}>
            {children}
        </RepositoryContext.Provider>
    )
}

export { RepositoryContext, RepositoryProvider };
