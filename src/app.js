import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "",
      result: "0",
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event) {
    console.log(event.target.id);
    if (event.target.id == "=") {
      let newResult = eval(this.state.equation).toFixed(3);
      console.log(newResult);
      this.setState({
        equation: "",
        result: newResult,
      });
    } else if (event.target.id == "AC") {
      this.setState({
        equation: "",
        result: "0",
      });
    } else {
      if (event.target.id == "0" && this.state.equation.at(-1) == "0") {
      } else {
        let newEquation = this.state.equation + event.target.id;
        this.setState({
          equation: newEquation,
          result: "",
        });
      }
    }
  }

  render() {
    let symbols = [
      "AC",
      "/",
      "*",
      "-",
      "7",
      "8",
      "9",
      "+",
      "4",
      "5",
      "6",
      "=",
      "1",
      "2",
      "3",
      ".",
    ];
    let buttons = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < 4; i++) {
      let columns = [];
      for (j; j < 4 + k; j++) {
        columns.push(
          <button className="col" onClick={this.handleclick} id={symbols[j]}>
            {symbols[j]}
          </button>
        );
      }
      k = j;
      buttons.push(<div className="row">{columns}</div>);
    }
    return (
      <div className="calculator d-flex align-items-center flex-column">
        <div className="calculator-display d-flex flex-column">
          <p id="equation">{this.state.equation}</p>
          <p id="result">{this.state.result}</p>
        </div>
        <div className="calculator-keys d-flex flex-column justify-content-center">
          {buttons}
          <div className="row">
            <button className="zero" onClick={this.handleclick} id="0">
              0
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
