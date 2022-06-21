import {configureStore} from '@reduxjs/toolkit';
import coreReducer from "./core"
import uiReducer from "./ui"
import editorReducer from "./editor"

const reducer = {
    core: coreReducer,
    ui: uiReducer,
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
