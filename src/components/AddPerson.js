import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';

class AddPerson extends React.Component {

    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    handleSubmit = () => {
        this.props.addPersonFn(this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <Container>
                <Row className="mt-4">
                    <Col>
                    <InputGroup className="mb-3">
                        <FormControl className="text-center" placeholder="Add Person (Name Optional)" aria-label="Add Person (Name Optional)" aria-describedby="basic-addon2" onChange={this.handleChange} value={this.state.value}/>
                        <InputGroup.Append>
                            <Button className="submit-button text-black" variant="orange2" onClick={this.handleSubmit}>Add</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default AddPerson