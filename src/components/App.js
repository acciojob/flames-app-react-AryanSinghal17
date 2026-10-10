import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    function fun() {
      const input1 = document.querySelector('[data-testid="input1"]');
      const input2 = document.querySelector('[data-testid="input2"]');
      const output = document.querySelector('[data-testid="answer"]');

      const name1 = input1.value.trim();
      const name2 = input2.value.trim();

      const total = (name1.length + name2.length)%6;
      if(total === 1) output.innerText = "Friends";
      else if(total === 2) output.innerText = "Love";
      else if(total === 3) output.innerText = "Affection";
      else if(total === 4) output.innerText = "Marriage";
      else if(total === 5) output.innerText = "Enemy";
      else if(total === 0) output.innerText = "Siblings";
      else output.innerText = "Please enter both names";
    }

    function clearFields() {
      document.querySelector('[data-testid="input1"]').value = "";
      document.querySelector('[data-testid="input2"]').value = "";
      document.querySelector('[data-testid="answer"]').innerText = "";
    }

    return (
      <div id="main">
        <input data-testid="input1" name="name1" placeholder="Enter first name" />
        <input data-testid="input2" name="name2" placeholder="Enter second name" />

        <button
          type="button"
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={fun}
        >
          Calculate the relationship future with
        </button>

        <button
          type="button"
          data-testid="clear"
          name="clear"
          onClick={clearFields}
        >
          Clear
        </button>

        <h3 data-testid="answer"></h3>
      </div>
    );
  }
}

export default App;
