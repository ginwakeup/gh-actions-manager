import { createSlice } from '@reduxjs/toolkit'

export const organizationSlice = createSlice({
    name: 'organizations',
    initialState: {
        value: {
            current: null,
            list : {}
        },
    },
    reducers: {
        setCurrentOrganization: (state, action) => {
            state.value.current = action.payload;
        },

        setOrganizations: (state, action) => {
            state.value.list = action.payload;
        },
    },
})

export const { setOrganizations, setCurrentOrganization } = organizationSlice.actions

export default organizationSlice.reducer
