import React from 'react';
// import MovieModel from './data-model/MovieModel';
import MovieModel from '../../data-model/MovieModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveSearchBox from '../LiveSearchBox/LiveSearchBox';


class MovieComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
       smthing: "",
    }
  }
   

  render() {
      return( <div>
          <LiveSearchBox/>
      </div>
         
       );
  }

  
}

export default MovieComponent;