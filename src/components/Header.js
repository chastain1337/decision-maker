import React from 'react';
import Formula from './Formula';
import Decision from './Decision';
import {Container, Row, Col} from 'react-bootstrap';

const Header = props => {
    return (
        <Container>
            
            <Row >
                <Col className="title-component text-center bg-orange2 text-white font-weight-bold mb-2">DECISION MAKER</Col>
            </Row>
            <Row>
                <Col className="current-formula text-center bg-orange1 text-blue_secondary3 font-weight-bold mb-2">
                    <Formula formula={props.formula}/>        
                </Col>
            </Row>
            <Row>
                <Col className="decision text-center text-black font-weight-bold my-2">
                    <Decision decisionStyle={props.decisionStyle} currentDecision={props.currentDecision}/>
                </Col>
            </Row>
        </Container>

    );
}

export default Header;