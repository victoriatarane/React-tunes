import { csrfFetch } from './csrf';

const BROWSE = 'browse/ARTIST';


// const load = list => ({ // action creator
//     type: LOAD,
//     list,
// });

const selectArtist = (artist) => {
    return {
        type: BROWSE,
        artist,
    }
}

export const getArtist = () => async dispatch => {
    const res = await csrfFetch(`/api/songs`);
    if (res.ok) {
        const list = await res.json();
        dispatch(selectArtist(list));
        return list;
    }
}

const artistReducer = (state = {}, action) => {
    switch (action.type) {
        case BROWSE: {
            const allSongs = {};
            let artist = { ...state };
            action.list.forEach(song => {
                if (song.artistId === artist.artist.id) {
                    allSongs[song.id] = song;
                }
            })
                return {
                    ...state,
                    allSongs,
                    list: action.list,
                    }
                }
                default:
                    return state;
    }
}

export default artistReducer;