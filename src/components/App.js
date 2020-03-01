import React from "react";
import Header from "./Header";
import "./custom.scss";
import "./App.css";
import PersonList from "./PersonList";
import Calculate from "./Calculate";
import AddPerson from "./AddPerson";
import { Container } from "react-bootstrap";
import Help from "./Help";

class App extends React.Component {
  state = {
    persons: [],
    currentFormula: "",
    currentDecision: "",
    score: 0,
    decisionStyle: { backgroundColor: "rgb(255, 239, 219)" },
    calculateButtonDisabled: true
  };

  updateFactor = (factor, index, textBox) => {
    this.setState(prevState => {
      var _persons = prevState.persons;
      _persons[index][factor] = textBox.value;
      return { persons: _persons };
    });
  };

  componentDidUpdate() {
    if (this.state.calculateButtonDisabled) {
      // calculate button is disabled
      if (this.allFactorsAreValid()) {
        // we need to enable the calc button
        this.setCalculateButton(false); // set button is disabled = false
      } // if both are false the button is disabled and at least one factor is invalid: that's fine.
    } else {
      // the calculate button is enabled
      if (!this.allFactorsAreValid()) {
        // if at least one factor is invalid, disable the calc button
        this.setCalculateButton(true); // set button is disabled = true
      }
    }
  }

  allFactorsAreValid = () => {
    const found = this.state.persons.find(
      person =>
        person.ind === "" ||
        person.dep === "" ||
        isNaN(person.ind) ||
        isNaN(person.dep)
    );
    return !Boolean(found);
    // for (var person of this.state.persons) {
    //     if (person.ind === '' || person.dep === '' || isNaN(person.ind) || isNaN(person.dep)) {
    //         return false;
    //     }
    // }
    // return true
  };

  setCalculateButton = bool => {
    this.setState(() => {
      return { calculateButtonDisabled: bool };
    });
  };

  createFormulaComponents = () => {
    this.setState(
      prevState => {
        const _persons = prevState.persons;
        const numPersons = _persons.length;

        for (var i = 0; i < numPersons; i++) {
          var uncalculatedFormula = "(";
          //Create normalizer component
          // Loop through every OTHER person and add their scores together
          var everyoneElsesDesires = 0;
          for (var j = 0; j < numPersons; j++) {
            if (j !== i) {
              uncalculatedFormula += `${_persons[j].ind} + `;
              everyoneElsesDesires += _persons[j].ind;
            }
          }
          uncalculatedFormula += `)/${numPersons - 1}`;
          uncalculatedFormula = uncalculatedFormula.replace(" + )", ")");

          // Divide total desire by total number of people minus one
          var normalizer = everyoneElsesDesires / (numPersons - 1);

          // Multiply that by the current persons dependency factor
          normalizer = normalizer * _persons[i].dep;
          uncalculatedFormula = `(${uncalculatedFormula}) * ${_persons[i].dep}`;

          // Multiply independent desire by the normalizer and set that to the formulaComponent prop
          uncalculatedFormula = `${_persons[i].ind} + (${uncalculatedFormula})`;
          _persons[i].formulaComponent = _persons[i].ind + normalizer;
          _persons[i].uncalculatedFormula = uncalculatedFormula;
          //console.log(uncalculatedFormula);
          //console.log(persons[i].formulaComponent);
        }
        return { persons: _persons };
      },
      () => {
        this.updateCurrentFormula();
      }
    );
  };

  updateCurrentFormula = () => {
    this.setState(
      prevState => {
        var formula = "";
        for (var i = 0; i < prevState.persons.length; i++) {
          formula = formula + prevState.persons[i].uncalculatedFormula;
          if (i < prevState.persons.length - 1) {
            formula = formula + " + ";
          }
        }
        formula = `(${formula})/${prevState.persons.length}`;
        return { currentFormula: formula };
      },
      () => {
        this.updateDecision();
      }
    );
  };

  updateDecision = () => {
    this.setState(prevState => {
      var decMessage;
      const score = Math.round(eval(this.state.currentFormula) * 100) / 100;
      var decisionStyle;
      if (score >= 1) {
        decMessage = " | Go for it!";
        decisionStyle = { backgroundColor: "rgb(198, 253, 176)" };
      } else if (score <= -1) {
        decMessage = " | Don't do it!";
        decisionStyle = { backgroundColor: "rgb(253, 184, 184)" };
      } else {
        decMessage = " | Eh. Your call.";
        decisionStyle = { backgroundColor: "rgb(255, 239, 219)" };
      }

      return {
        currentDecision: score + decMessage,
        score: score,
        decisionStyle: decisionStyle
      };
    });
  };

  calculate = () => {
    this.createFormulaComponents();
  };

  addPersonFn = playerName => {
    this.setState(prevState => {
      var _persons = prevState.persons;
      var newKey = prevState.persons.length + 1;
      _persons.push({
        name: playerName,
        ind: "",
        dep: "",
        key: newKey.toString()
      });
      return { persons: _persons };
    });
  };

  removePerson = index => {
    this.setState(prevState => {
      var _persons = prevState.persons;
      _persons.splice(index, 1);
      return { persons: _persons };
    });
  };

  render() {
    return (
      <>
        <Container className="border rounded-lg bg-blue_primary2 p-3">
          <Header
            formula={this.state.currentFormula}
            currentDecision={this.state.currentDecision}
            decisionStyle={this.state.decisionStyle}
          />
          <PersonList
            persons={this.state.persons}
            updateFactor={this.updateFactor}
            removePerson={this.removePerson}
            setCalculateButton={this.setCalculateButton}
          />
          <Calculate
            numPeople={this.state.persons.length}
            calculateFn={this.calculate}
            calculateButtonDisabled={this.state.calculateButtonDisabled}
          />
          <AddPerson addPersonFn={this.addPersonFn} />
        </Container>
        <Container className="p-3">
          <Help />
        </Container>
      </>
    );
  }
}

export default App;
