import React from 'react';
import './App.css';
import ActorModel from './data-model/ActorModel';


function App() {


const actor1 = new ActorModel ("Ksenia", "Pollyak", 19820119, "/selebs", "skhdbfsd")
let birthdate= actor1.ageOfActor("19820119","YYYYMMDD");
console.log(birthdate);
const actorsData = [];
  return (
    <div>
     <ActorGallery actors={actorsData}/>
    </div>
  );
}

export default App;
