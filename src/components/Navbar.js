import React from 'react';
// import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';
import {StoreContext} from '../index';
// import {connect} from '../index';
import {connect} from 'react-redux';


class Navbar extends React.Component{

	constructor(props){
		super(props);
		//console.log(props);
		this.state={
			searchText:''
		};
	}

	handleAddToMovies=(movie)=>{
		this.props.dispatch(addMovieToList(movie));
		this.setState({
			showSearchResults:false
		});
	}

	handleSearch=()=>{
		const {searchText}=this.state;

		this.props.dispatch(handleMovieSearch(searchText));
	};

	handleChange=(e)=>{
		this.setState({
			searchText:e.target.value
		})
	};

	render(){
		// console.log(this.props);
		// const {showSearchResults}=this.state;
		const {result:movie,showSearchResults}=this.props.search;
		// console.log("nav movie",result);
		//console.log("navbar state",this.state);
		return (
		    <div className="nav">
		    	<div className="search-container">
                    <input onChange={this.handleChange}/> 
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>  

					{showSearchResults && 
						<div className="search-results">
							<div className="search-result">
								<img src={movie.Poster} alt="search-pic"/>
								<div className="movie-info">
									<span>{movie.Title}</span>
									<button onClick={()=> this.handleAddToMovies(movie)}>
										Add to Movies
									</button>
								</div>
							</div>
						</div>
					}
                </div>	
		      
		    </div>
		);
	}
}


//context api used to pass store
// class NavbarWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=>{
//           return <Navbar dispatch={store.dispatch} search={this.props.search}/>
//         }}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.search,
  };
}

const connectComponent=connect(mapStateToProps)(Navbar);

export default connectComponent;
