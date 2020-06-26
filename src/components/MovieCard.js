import React from 'react';
import {addFavourites,removeFavourites} from '../actions';

class MovieCard extends React.Component {

    handleFavouriteClick=()=>{
        const {movie}=this.props;

        this.props.dispatch(addFavourites(movie));
    }

    handleUnFavouriteClick=()=>{
        const {movie}=this.props;

        this.props.dispatch(removeFavourites(movie));
    }

	render(){
        // console.log(this.props);
        const {movie}=this.props;
		return (
		    <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title} </div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>

                        {this.props.isFavourite
                         ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourites</button>
                         :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourites</button>
                        }
                    </div>
                </div>
		    	
		    </div>
		);
	}
  
}

export default MovieCard;
