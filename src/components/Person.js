import React from 'react';
import PersonFactors from './PersonFactors';
import RemovePerson from './RemovePerson';

const Person = props => {
    return (
        <div className="person">
            {props.name + ' '}
            <RemovePerson index={props.index} removePersonFn={props.removePerson}/>
            <PersonFactors ind={props.ind} dep={props.dep} updateFactor={props.updateFactor} index={props.index} setCalculateButton={props.setCalculateButton}/>
        </div>
    )
}

export default Person;