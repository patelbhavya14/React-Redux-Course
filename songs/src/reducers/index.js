import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tujhe kitna chahne lage", duration: "4:05" },
    { title: "Afreen Afreen", duration: "5:55" },
    { title: "Kabhie Kabhie mere dil me", duration: "2:55" },
    { title: "Kuch Kuch hota hai", duration: "6:25" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
