import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';


import {data} from '../data';
import { addMovies } from '../actions/index';

class App extends React.Component {

  componentDidMount(){
    const{store}=this.props;
    //make an api call

    //subscribe action 
    store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    });

    //dispatch action
    store.dispatch(addMovies(data));

    console.log("STATE",store.getState());
  }

  isMovieFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();

    const index=favourites.indexOf(movie);

    if(index!==-1){
      //movie found
      return true;
    }
    return false;
    
  }

  render(){
    const {list}=this.props.store.getState();   // {list=[],favourites=[]}
    console.log("RENDER",this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
        
          <div className="list">
            {list.map((movie,index)=>(
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch} i
                isFavourite={this.isMovieFavourite(movie)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
