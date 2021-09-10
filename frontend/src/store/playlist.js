import { csrfFetch } from './csrf';
// const asyncHandler = require('express-async-handler');

const LOAD = 'playlist/LOAD';
const ADD_SONG = 'playlist/ADD_SONG';
const DELETE_SONG = 'playlist/DELETE_SONG';

const load = list => ({ // action creator
    type: LOAD,
    list,
});

const addSong = (song) => {
    return {
        type: ADD_SONG,
        song,
    }
}

const deleteSong = (song) => {
    return {
        type: DELETE_SONG,
        song,
    }
}

export const getPlaylistSongs = () => async dispatch => {
    const res = await csrfFetch(`/api/playlist`);
    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
        return list;
    }
}

export const addPlaylistSongs = ({songId}) => async dispatch => {
    const res = await csrfFetch(`/api/playlist/add/${songId}`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(songId),
    })
    if (res.ok){
        const data = await res.json();
        dispatch(addSong(data));
        return data;
    }
}

export const deletePlaylistSongs = ({songId, userId}) => async dispatch => {
    const res = await csrfFetch(`/api/${songId}/playlist`, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({songId, userId}),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteSong(data))
        if (data.errors) {
            return;
        }
    }
}

const playlistReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD: {
            const allSongs = {};
            action.lost.forEach(song => {
                allSongs[song.id] = song;
            })
            return {
                ...state,
                ...allSongs,
                list: action.list,
            }
        }
        case ADD_SONG: {
            let playlist = { ...state };
            playlist.song = action.song;
            return playlist;
        }
        case DELETE_SONG: {
            const newState = { ...state };
            delete newState[action.songId];
            return newState;
        }
        default:
            return state;
    }
}

export default playlistReducer;