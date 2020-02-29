import React from 'react';

const Decision = props => {
    return(
        <section style={props.decisionStyle} className="decision">
            {props.currentDecision}
        </section>
    );
}

export default Decision;