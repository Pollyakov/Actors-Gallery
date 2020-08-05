import React from 'react';
import { Container, Table } from 'react-bootstrap';

import ActorModel from '../../data-model/ActorModel';

class ActorGallery extends React.Component {
    constructor(props) {
        super(props);}
    render() {  
            let contentToRender;
                const actorCardRow = this.props.actors.map(ActorModel =>
                    <tr >
                        <td>{ActorModel.fname}</td>
                        <td>{ActorModel.lname}</td>
                        <td>{ActorModel.birthday}</td>
                        <td><a target="_blank" href={ActorModel.IMDBlink}>{ActorModel.IMDBlink}</a></td>
                        <td><img src={ActorModel.img}></img></td>
                        {/* //<td>{ActorModel.AgeofActor()}</td> */}
                    </tr>);
                contentToRender =                     
                    <Table>
                        <tbody>
                            {actorCardRow}
                        </tbody>
                    </Table>
                    return (
                <Container>
                    {contentToRender}
                </Container>
            ); 
            }    
        }
export default ActorGallery;
