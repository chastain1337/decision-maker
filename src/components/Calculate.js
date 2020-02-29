import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const Calculate = props => {
    if (props.numPeople > 1) {
        return (
            <Container>
                <Row>
                    <Col className="text-center mt-4">
                        <Button variant="dark" onClick={props.calculateFn} disabled={props.calculateButtonDisabled}>Calculate</Button>
                    </Col>
                </Row>
            </Container>
        );
    } else return (null)
}

export default Calculate;