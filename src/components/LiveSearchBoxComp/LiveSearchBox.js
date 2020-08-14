import React from 'react';
import './App.css';
import MovieModel from './data-model/MovieModel';
import 'bootstrap/dist/css/bootstrap.min.css';


class LiveSearchBox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
       smthing: "",
    }
  }
   

  render() {
      return( <div>
          Privet!
      </div>
         
       );
  }

  
}

export default LiveSearchBox;