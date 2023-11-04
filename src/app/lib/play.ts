import { createSlice } from '@reduxjs/toolkit'

interface active {
    value: string,
}

const initialState: active = {
    value: "play_arrow",
}

export const playButton = createSlice({
    name: "playButton",
    initialState,
    reducers: {
        togglePlayButton: (state) => {
            state.value = initialState.value === "play_arrow" ? "pause" : "play_arrow"
        }
    }
})

export const { togglePlayButton } = playButton.actions;

export default playButton.reducer;