import React from 'react';
import './App.css';
import ActorModel from './data-model/ActorModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorGallery from './components/ActorGallery/ActorGallery';
import ActorComp from './components/ActorComp/ActorComp';
import axios from 'axios';
import MovieComponent from './components/MovieComponent/MovieComponent';


class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      actors: []
    }
  }
  componentDidMount(){
    axios.get("actorsData.json").then(response=> {
      this.setState({
        actors: response.data.map(plainActor=> 
          new ActorModel(plainActor.fname, plainActor.lname, plainActor.birthday, plainActor.IMDBlink, plainActor.img))
      })
    })
  }

  render(){
     return (
    <div>
     <ActorGallery actors={this.state.actors}/>
     <MovieComponent/>
    </div>
  );
 }
}

export default App;
