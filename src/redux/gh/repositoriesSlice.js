import { createSlice } from '@reduxjs/toolkit'

export const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: {
        value: {},
    },
    reducers: {
        setRepositories: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setRepositories } = repositoriesSlice.actions

export default repositoriesSlice.reducer
