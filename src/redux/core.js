import { createSlice } from '@reduxjs/toolkit'

export const coreSlice = createSlice({
    name: 'core',
    initialState: {
        repositories: {},
        organizations: {
            current: null,
            list : []
        },
        user: {},
        octo: {}
    },
    reducers: {
        setRepositories: (state, action) => {
            state.repositories = action.payload
        },
        setCurrentOrganization: (state, action) => {
            state.organizations.current = action.payload;
        },

        setOrganizations: (state, action) => {
            state.organizations.list = action.payload;
        },

        setOcto: (state, action) => {
            state.octo = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const { setRepositories, setOrganizations, setCurrentOrganization, setOcto, setUser } = coreSlice.actions

export default coreSlice.reducer
