
import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    function fun() {
      const input1 = document.querySelector('[data-testid="input1"]');
      const input2 = document.querySelector('[data-testid="input2"]');
      const output = document.querySelector('[data-testid="answer"]');

      let name1 = input1.value.toLowerCase().replace(/\s/g, "");
      let name2 = input2.value.toLowerCase().replace(/\s/g, "");

      if (name1 === "" || name2 === "") {
        output.innerText = "Please enter both names";
        return;
      }


      if (name1 === name2) {
        output.innerText = "Siblings";
        return;
      }


      let arr1 = name1.split("");
      let arr2 = name2.split("");

      for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);

        if (index !== -1) {
          arr1.splice(i, 1);
          arr2.splice(index, 1);
          i--;
        }
      }

      const count = arr1.length + arr2.length;

      if (count === 0) {
        output.innerText = "Siblings";
        return;
      }


      const flames = [
        "Friends",
        "Love",
        "Affection",
        "Marriage",
        "Enemy",
        "Siblings"
      ];

      let index = 0;

      while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
      }

      output.innerText = flames[0];
    }

    function clearFields() {
      document.querySelector('[data-testid="input1"]').value = "";
      document.querySelector('[data-testid="input2"]').value = "";
      document.querySelector('[data-testid="answer"]').innerText = "";
    }

    return (
      <div id="main">
        <input
          type="text"
          data-testid="input1"
          name="name1"
          placeholder="Enter first name"
        />

        <input
          type="text"
          data-testid="input2"
          name="name2"
          placeholder="Enter second name"
        />

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
