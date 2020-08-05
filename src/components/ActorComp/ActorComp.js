import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';

//Create an ActorComp component that receives an actor object as prop and renders its name

class ActorComp  extends React.Component {
    constructor(props) {
        super(props);
    }
        render() {
            return <h1>{this.props.actor.fname}</h1>;
          }
        }





export default ActorComp;