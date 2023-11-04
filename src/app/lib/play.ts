import { createSlice } from '@reduxjs/toolkit'

let playButtonStatus = false

export const playButton = createSlice({
    name: "playButton",
    initialState: {value: {active: false}},
    reducers: {
        togglePlayButton: (state, action) => {
            state.value = !playButtonStatus
        }
    }
})

export default playButton.reducer;