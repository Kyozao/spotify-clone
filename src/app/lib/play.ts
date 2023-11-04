import { createSlice } from '@reduxjs/toolkit'

interface status {
    value: string,
}

const initialState: status = {
    value: "play_arrow",
}

export const playButton = createSlice({
    name: "playButton",
    initialState,
    reducers: {
        togglePlayButton: (state) => {
            state.value = state.value === "play_arrow" ? "pause" : "play_arrow"
        }
    }
})

export const { togglePlayButton } = playButton.actions;

export default playButton.reducer;