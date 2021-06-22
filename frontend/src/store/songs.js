import { csrfFetch } from './csrf';

const LOAD = 'songs/LOAD'; // action type

const load = list => ({ // action creator
    type: LOAD,
    list,
})

export const getSongs = () => async dispatch => {
    const response = await csrfFetch(`/api/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
}

const songReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD: {
            return {
                ...state,
            } 

        }
    }
}


//thunk action to get a single Song (songId)
// const fetchSong = (songId) => async (dispatch) => {
//     const res = await csrfFetch(`/api/song/${songId}`);
//     const data = await res.json();
// }