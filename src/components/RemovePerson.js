import React from 'react';
import {Badge} from 'react-bootstrap';

class RemovePerson extends React.Component {

    handleRemovePlayer = () => {
        this.props.removePersonFn(this.props.index);
    }
    
    render() {
    return (
        <Badge className="remove-person-button" pill variant="danger" onClick={this.handleRemovePlayer}>x</Badge>
        );
    }
}


export default RemovePerson