import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Webpack!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
    );
  }
}

export default App;
