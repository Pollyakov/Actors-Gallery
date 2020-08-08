import React from 'react';
import { Container, Table, Col, Row } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';
import ActorComp from '../ActorComp/ActorComp';
//In ActorGallery render multiple ActorComp components 
//(using map or for loop) and pass the actor object to 
//each ActorComp instance - You should see all the name of all the actors
class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        }
        handleOnchange = (event) => {
            this.setState({
                value: event.target.value,
            });
        }
        
    render() { 
        // {names.filter(name => name.includes('J')).map(filteredName => (
            const filterActor = this.props.actors.filter((actor)=>
                actor.fname.includes(this.state.value));
                
      
            const actorCardRow = this.props.actors.map(actor =>
            <Col lg={true}><ActorComp actor={actor}  key={actor.toString()}/></Col>);
            return (
                <div>   
                <input type="search" value={this.state.value} onChange={(event)=>this.handleOnchange(event)}></input>     
                <Container>
                        <Row>
                            {actorCardRow}
                            {console.log(this.state.value)}
                        </Row>
                </Container>
                </div>
                   ); 
            }    
        }
export default ActorGallery;
