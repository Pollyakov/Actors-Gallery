import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';

//Create an ActorComp component that receives an actor object as prop and renders its name

class ActorComp  extends React.Component {
    constructor(props) {
        super(props);
    }
        render() {
        return (
        <div>
        <img src={this.props.actor.img}></img>
        <a className="actor-comp" href={this.props.actor.IMDBlink}> {this.props.actor.fname+ ' ' + this.props.actor.lname}</a>
        <h1>Was born in {this.props.actor.birthday.substr(0,4)}</h1>
        </div>
        );
          }
        }

export default ActorComp;