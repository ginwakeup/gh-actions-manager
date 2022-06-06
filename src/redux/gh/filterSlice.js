import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        value: {
            "my_repos": true
        },
    },
    reducers: {
        setFilters: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setFilters } = filterSlice.actions

export default filterSlice.reducer
