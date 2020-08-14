import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class LiveSearchBox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
       searchText: "",
    }

  }
   

  render() {
    const {placeholderText}=this.props;
      return( <div>
          <input type="search" placeholder={placeholderText}></input>
      </div>
         
       );
  }

  
}

export default LiveSearchBox;