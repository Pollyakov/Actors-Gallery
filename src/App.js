import React from 'react';
import './App.css';
import ActorModel from './data-model/ActorModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorGallery from './components/ActorGallery/ActorGallery';
import ActorComp from './components/ActorComp/ActorComp';
import axios from 'axios';

class App extends React.Component {
  constructor (props){
    super(props);
    // const actorsData = [];
    // actorsData.push(new ActorModel("Natalie", "Portman", "19810609", "https://www.imdb.com/name/nm0000204/?ref_=tt_cl_t3", "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_SY1000_SX746_AL_.jpg"));
    // actorsData.push(new ActorModel("Jean", "Reno", "19483007", "https://www.imdb.com/name/nm0000606/?ref_=tt_cl_t1",  "https://m.media-amazon.com/images/M/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_UX214_CR0,0,214,317_AL_.jpg"));
    // actorsData.push(new ActorModel("Joaquin", "Phoenix", "19742810", "https://www.imdb.com/name/nm0001618/", "https://m.media-amazon.com/images/M/MV5BZGMyY2Q4NTEtMWVkZS00NzcwLTkzNmQtYzBlMWZhZGNhMDhkXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UX214_CR0,0,214,317_AL_.jpg"));
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
    </div>
  );
}
}

export default App;
