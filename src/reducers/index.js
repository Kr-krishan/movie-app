// provided by redux to combine reducers
import { combineReducers} from 'redux';

import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions/index';

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

        default:
            return state;
    }
}

//adding more reducers (only one reducer can have default export)

//search reducer
const initialSearchState={
    result:{}
}

export function search(state=initialSearchState,action){
    console.log("search Reducer");
    return state;
}

//root reducer containing both of above reducers
const initialRootState={
    movies:initialMoviesState,
    search:initialSearchState
}

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
