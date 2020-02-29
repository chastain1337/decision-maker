import React from 'react';
import Person from './Person';
import {Container, Row, Col} from 'react-bootstrap';


const PersonList = (props) => {
    const people = props.persons.map( (person, index) => 
        <Col>
            <Person 
                name={person.name}
                ind={person.ind}
                dep={person.dep}
                key={person.key}
                index={index}
                updateFactor={props.updateFactor}
                removePerson = {props.removePerson}
                setCalculateButton = {props.setCalculateButton}
            />
        </Col>    
    );
    
    return (
        <Container>
            <Row className="text-center">
                {people}
            </Row>
        </Container>
    );
}

export default PersonList;