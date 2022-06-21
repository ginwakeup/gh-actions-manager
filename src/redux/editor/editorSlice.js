import { createSlice } from '@reduxjs/toolkit'

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        value: {
            "code": "",
            "action": {}
        },
    },
    reducers: {
        setCode: (state, action) => {
            state.value.code = action.payload
        },
        setAction: (state, action) => {
            state.value.action = action.payload
        },
    },
})

export const { setCode, setAction } = editorSlice.actions

export default editorSlice.reducer
