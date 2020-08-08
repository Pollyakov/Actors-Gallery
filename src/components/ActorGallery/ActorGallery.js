import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ActorModel from '../../data-model/ActorModel';
import ActorComp from '../ActorComp/ActorComp';
//In ActorGallery render multiple ActorComp components 
//(using map or for loop) and pass the actor object to 
//each ActorComp instance - You should see all the name of all the actors
class ActorGallery extends React.Component {
    constructor(props) {
        super(props);}
    render() {  
            let contentToRender;
            const actorCardRow = this.props.actors.map(actor =><ActorComp actor={actor}/>);
            contentToRender =                     
                    <Table>
                        <tbody>
                            {actorCardRow}
                        </tbody>
                    </Table>
            return (
                <div>        
                <Container>
                    {contentToRender}
                </Container>
                </div>
                   ); 
            }    
        }
export default ActorGallery;
