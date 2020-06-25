export default function movies(state=[],action){   //if nothing is passed in state it will take this default empty array
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}