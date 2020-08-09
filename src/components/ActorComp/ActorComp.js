import React from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';
class ActorComp  extends React.Component {
    constructor(props) {
        super(props);
    }
        render() {
        return (
        //  <Container>
        <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.actor.img}/>
  <Card.Body>
    <Card.Title>{this.props.actor.fname+ ' ' + this.props.actor.lname}</Card.Title>
      Was born in {this.props.actor.birthday.substr(0,4)}
    <Card.Text>
    <Card.Link href={this.props.actor.IMDBlink}>IMDBlink</Card.Link>
    </Card.Text>
  </Card.Body>
  </Card> 
  </div>
// </Container> 
        );
          }
        }

export default ActorComp;