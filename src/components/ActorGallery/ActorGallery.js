import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ActorGallery from './components/ActorGallery/ActorGallery';
import ActorModel from '../../data-model/ActorModel';


class ActorGallery extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
            let contentToRender;
                const actorCardRow = this.props.actors.map(ActorModel =>
                    <tr >
                        <td>{ActorModel.fname}</td>
                        <td>{ActorModel.lname}</td>
                        <td>{ActorModel.birthday}</td>
                        <td>{ActorModel.IMDBlink}</td>
                        <td>{ActorModel.img}</td>
                        //<td>{ActorModel.AgeofActor()}</td>
                    </tr>);
    
                contentToRender =                     
                    <table class="table">
                        <tbody>
                            {actorCardRow}
                        </tbody>
                    </table>
            }
    
            return (
                <div class="container">
                    {contentToRender}
                </div>
            );
        }
    
    }

    return (
        <div>
        { contentToRender }
        </div>
    );
    }
    }

export default ActorGallery;
