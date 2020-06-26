import {ADD_MOVIES} from '../actions/index';

const initialMoviesState={
    list:[],
    favourites:[]
}

export default function movies(state=initialMoviesState,action){   //if nothing is passed in state it will take this default empty array
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}