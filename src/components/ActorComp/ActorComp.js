import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';

//Create an ActorComp component that receives an actor object as prop and renders its name

class ActorComp  extends React.Component {
    constructor(props) {
        super(props);
    }
        render() {
        <div>
        <img src={this.props.actor.img}></img>
        <a className="actor-comp" href={this.props.actor.imdb}> {this.props.actor.fname+ ' ' + this.props.actor.lname}</a>
        </div>
          }
        }

export default ActorComp;