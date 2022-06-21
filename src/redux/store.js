import {configureStore} from '@reduxjs/toolkit';
import repositoriesReducer from "./gh/repositoriesSlice"
import filterReducer from "./gh/filterSlice"
import userReducer from "./gh/userSlice"
import octoReducer from "./gh/octoSlice"
import organizationReducer from "./gh/organizationSlice";
import editorReducer from "./editor/editorSlice";

const reducer = {
    repositories: repositoriesReducer,
    filters: filterReducer,
    user: userReducer,
    octo: octoReducer,
    organizations: organizationReducer,
    editor: editorReducer
}

export default function configureAppStore(preloadedState) {
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }),
        preloadedState
    })
}
