/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track, TracksResponse } from "../../models/TrackResponse";

interface PlayerState {
  currentSongs: Track[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Track;
  genreListId: string;
}

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {} as Track,
  genreListId: "",
};

export interface SetActiveSong {
  tracks: Track[];
  track: Track;
  index: number;
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<SetActiveSong>) => {
      state.activeSong = action.payload.track;
      state.currentSongs = action.payload.tracks;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    changeSong: (state, action: PayloadAction<number>) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, changeSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
