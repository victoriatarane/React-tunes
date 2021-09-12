import { csrfFetch } from './csrf';
// import { createStore, combineReducers} from 'redux';

const LOAD = 'songs/LOAD'; // action type
const ADD_LIKE = 'song/ADD_LIKE';
const ADD_TO_PLAYLIST = 'song/ADD_TO_PLAYLIST';
const ADD_REVIEW = 'song/REVIEW';
// const EDIT_REVIEW = 'song/EDIT_REVIEW';
const DELETE_REVIEW = 'song/DELETE_REVIEW';

const load = list => ({ // action creator
    type: LOAD,
    list,
});

const addLike = (like) => {
    return {
        type: ADD_LIKE,
        like,
    }
};
// const addSong = (song) => {
//     return {
//         type: ADD_TO_PLAYLIST,
//         song,
//     }
// }

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review,
    }
}

// const edit = (review) => ({
//     type: EDIT_REVIEW,
//     review,
// });

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    payload: reviewId
})

export const getSongs = () => async dispatch => {
    const response = await csrfFetch(`/api/songs`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
}

// export const addPlaylistSongs = (payload) => async dispatch => {
//     const res = await csrfFetch(`/api/songs/add/${payload.songId}/playlist`, {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(payload),
//     })
//     console.log("RES", res)
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(addSong(data.songId));
//         return data;
//     }
// }

export const likeSong = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/songs/${payload.songId}/like`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),        
    })
    if (res.ok){
        const data = await res.json();
    
        dispatch(addLike(data));
        return data;
    }
}

export const leaveReview = (payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${payload.songId}/review`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (res.ok){
        const data = await res.json();
        dispatch(addReview(data.newReview));
        return data;
    }
}

export const deleteReviews = (reviewId) => async (dispatch) => {
    // console.log(reviewId)
    const res = await csrfFetch(`/api/songs/${reviewId}/review`, {
        method: "DELETE",
        // headers: {
        //     "Content-Type": 'application/json',
        // },
        // body: JSON.stringify(reviewId),
    });
    if (res.ok) {
        // const data = await res.json();
        dispatch(deleteReview(reviewId))
        // if (data.errors) {
        //     return;
        // }
    }
}

const songReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case LOAD: {
            const allSongs = {};
            action.list.forEach(song => {
                allSongs[song.id] = song;
            })
            return {
                ...state, 
                ...allSongs,
                list: action.list,
            } 
        }
        case ADD_TO_PLAYLIST: {
            let playlist = { ...state };
            playlist.songs = action.song;
            return playlist;
        }
        case (ADD_LIKE):
            let likes = { ...state };
            likes.like = action;
            return likes;
        case (ADD_REVIEW):
            let reviews = { ...state };
            // reviews.author = user.findById[reviews.userId].username;
            reviews.review = action.review;
            return reviews;
        // case (EDIT_REVIEW): {
        //     return {
        //         ...state,
        //         [action.review.id]: action.review,
        //     }
        // }
        case (DELETE_REVIEW): 
            newState = { ...state };
            newState.review = [...state.review];
            let index = newState.review.findIndex((review) => review.id === action.payload.id)
            newState.review.splice(index, 1)
            return newState;
            // const newState = { ...state };
            // delete newState[action.reviewId];
            // return newState;
        default:
            return state;
    }
}

export default songReducer;