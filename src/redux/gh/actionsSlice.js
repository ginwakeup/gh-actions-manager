import { createSlice } from '@reduxjs/toolkit'

export const actionsSlice = createSlice({
    name: 'action',
    initialState: {
        value: {
            action: {},
            repo: {}
        },
    },
    reducers: {
        setAction: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setAction } = actionsSlice.actions

export default actionsSlice.reducer
