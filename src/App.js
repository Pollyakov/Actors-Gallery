import React from 'react';
import './App.css';
import ActorModel from './data-model/ActorModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorGallery from './components/ActorGallery/ActorGallery';
import ActorComp from './components/ActorComp/ActorComp';

  

function App() {
const actor1 = new ActorModel("Natalie", "Portman", "19810609", "https://www.imdb.com/name/nm0000204/?ref_=tt_cl_t3", "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_SY1000_SX746_AL_.jpg")
const actor2 = new ActorModel("Jean", "Reno", "19483007", "https://www.imdb.com/name/nm0000606/?ref_=tt_cl_t1",  "https://m.media-amazon.com/images/M/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_UX214_CR0,0,214,317_AL_.jpg")
const actor3 = new ActorModel("Natalie", "Portman", "19810609", "https://www.imdb.com/name/nm0000204/?ref_=tt_cl_t3", "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_SY1000_SX746_AL_.jpg")

// function getD(mydatevariable) {
//   var d = new Date(mydatevariable);
//   var month = d.getMonth()+1;
//   var day   = d.getDate();
//   var year  = d.getFullYear();
//   var wholedate = ( month + "-" + day + "-" + year);
//   return wholedate;
//   }
const actorsData = [actor1, actor2, actor3];
// let actorData = [<ActorComp/>, <ActorComp/>, <ActorComp/>];
  return (
    <div>
      {/* <ActorComp actor={actor1}/> */}
     <ActorGallery actors={actorsData}/>
    </div>
  );
}

export default App;
