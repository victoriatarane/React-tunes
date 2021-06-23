import { csrfFetch } from './csrf';
// import { createStore, combineReducers} from 'redux';

const LOAD = 'songs/LOAD'; // action type
const LIKES = 'songs/LIKES';

const load = list => ({ // action creator
    type: LOAD,
    list,
});

const likes = list => ({
    type: LIKES,
    likeNum: list.length,
})

export const getSongs = () => async dispatch => {
    const response = await csrfFetch(`/api/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
}

const songReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD: {
            const allSongs = {};
            action.list.forEach(song => {
                allSongs[song.id] = song;
            })
            return {
                ...allSongs,
                state, 
                list: action.list,
            } 
        }
        // case LIKES: {
            
        // }
        default:
            return state;
    }
}


// {
//     const allPokemon = {};
//     action.list.forEach(pokemon => {
//         allPokemon[pokemon.id] = pokemon;
//     });
//     return {
//         ...allPokemon,
//         ...state,
//         list: sortList(action.list),
//     };
// }


//thunk action to get a single Song (songId)
// const fetchSong = (songId) => async (dispatch) => {
//     const res = await csrfFetch(`/api/song/${songId}`);
//     const data = await res.json();
// }

export default songReducer;