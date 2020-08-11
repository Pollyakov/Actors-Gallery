import React from 'react';
import { Container, Table, Col, Row, Form } from 'react-bootstrap';
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
                value: event.target.value
            });
        }
    render() 
            {
            const filteredCards = this.props.actors.filter(actor=>
                actor.fname.includes(this.state.value)).map(filteredCard =>
                        ( 
                    <Col lg={3} md={4} sm={6}><ActorComp actor={filteredCard} key={filteredCard.toString()}/></Col>
                        ))        
            return (  
                <div>
                <Container> 
                <input type="search" value={this.state.value} onChange={(event)=>this.handleOnchange(event)}></input>        
                        {/* <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Search" ControlInput value={this.state.value.toLowerCase()} onChange={(event)=>this.handleOnchange(event)}>
                        </Form.Control>
                        </Form.Group> */}
                        <Row>
                            {filteredCards} 
                        </Row>
                </Container>
                </div>
                   ); 
            }    
}         
export default ActorGallery;
