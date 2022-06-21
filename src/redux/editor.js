import { createSlice } from '@reduxjs/toolkit'

export const editor = createSlice({
    name: 'editor',
    initialState: {
        code: "",
        selectedRepo: null,
        selectedAction: null,
        fileSha: null
    },
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload
        },
        setSelectedRepo: (state, action) => {
            state.selectedRepo = action.payload
        },
        setSelectedAction: (state, action) => {
            state.selectedAction = action.payload
        },
        setFileSha: (state, action) => {
            state.fileSha = action.payload
        },
    },
})

export const { setCode, setSelectedRepo, setSelectedAction, setFileSha } = editor.actions

export default editor.reducer
