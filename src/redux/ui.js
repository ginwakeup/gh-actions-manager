import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'co',
    initialState: {
        value: {
            "my_repos": true
        }
    },
    reducers: {
        setFilters: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setFilters } = uiSlice.actions

export default uiSlice.reducer
