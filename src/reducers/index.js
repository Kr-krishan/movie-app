// provided by redux to combine reducers
import { combineReducers} from 'redux';

import {
    ADD_MOVIES,ADD_FAVOURITES,
    REMOVE_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
} from '../actions/index';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}


export function movies(state=initialMoviesState,action){   //if nothing is passed in state it will take this default empty array
    console.log("movies Reducer");
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }

        case ADD_FAVOURITES:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }

        case REMOVE_FAVOURITES:
            const filteredArray=state.favourites.filter(movie=>
                movie.Title!==action.movie.Title
            );

            return{
                ...state,
                favourites:filteredArray
            }
        
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie,...state.list]
            }

        default:
            return state;
    }
}

//adding more reducers (only one reducer can have default export)

//search reducer
const initialSearchState={
    result:{},
    showSearchResults:false
}

export function search(state=initialSearchState,action){
    // ADD_SEARCH_RESULT
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}

//root reducer containing both of above reducers
// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// }

// export default function rootReducer(state=initialRootState,action){
//     console.log("Root Reducer");
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }


// provided by redux to combine reducers
export default combineReducers({
    movies:movies,
    search:search
});
