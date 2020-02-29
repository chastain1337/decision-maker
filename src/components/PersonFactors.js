import React from 'react';
import {Table} from 'react-bootstrap';


class personFactors extends React.Component {
    
    state = {
        ivalue: this.props.ind,
        dvalue: this.props.dep,
        iStyle: null,
        dStyle: null
    }

    fieldIsValid = (value) => {
        if (isNaN(value) || value === '') {
            return false;
        } else return true;
    }

    handleChangeI = (event) => {
        // Change color if number is invalid
        if (!this.fieldIsValid(event.target.value)) {
            this.setState({iStyle: {backgroundColor: 'rgb(255,199,206)'}});
        } else this.setState({iStyle: null});

        //Update state
        this.setState({ivalue: event.target.value});
        this.props.updateFactor('i', this.props.index, event.target);
    }

    handleChangeD = (event) => {
        // Change color if number is invalid
        if (!this.fieldIsValid(event.target.value)) {
            this.setState({dStyle: {backgroundColor: 'rgb(255,199,206)'}});
        } else this.setState({dStyle: null});
        
        //Update state
        this.setState({dvalue: event.target.value});
        this.props.updateFactor('d', this.props.index, event.target);
    }

    

    render() {
        return (
            <Table size="sm">
                <tbody>
                    <tr>
                        <td><input className='independent' style={this.state.iStyle} maxLength="3" placeholder="i" value={this.state.ivalue} onChange={this.handleChangeI}/></td>
                        <td><input className='dependency' style={this.state.dStyle} maxLength="3" placeholder="d" value={this.state.dvalue} onChange={this.handleChangeD}/></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default personFactors;