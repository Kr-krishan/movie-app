
// action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';


//action creators
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
};

export function addFavourites(movie){
    return {
        type:ADD_FAVOURITES,
        movie
    }
};

export function removeFavourites(movie){
    return {
        type:REMOVE_FAVOURITES,
        movie
    }
};

export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
};

export function addMovieToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    }
};
