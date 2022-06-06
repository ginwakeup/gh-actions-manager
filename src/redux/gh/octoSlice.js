import { createSlice } from '@reduxjs/toolkit'

export const octoSlice = createSlice({
    name: 'octo',
    initialState: {
        value: {},
    },
    reducers: {
        setOcto: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setOcto } = octoSlice.actions

export default octoSlice.reducer
