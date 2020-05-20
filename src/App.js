import React, { Component } from "react";
import CGM from "./components/CGM";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glucose: "",
      paramedic: false,
      formError: "",
    };
  }
  handleChange = () => (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      this.setState({ formError: "", glucose: value });
    } else {
      this.setState({ formError: "Should be a number" });
    }
  };
  componentDidUpdate() {
    const { glucose } = this.state;
    if (glucose > 7.1) {
      alert(
        "Your blood sugar is high, contacting HMC (Health Monitoring Company)"
      );

      this.setState({ glucose: "", paramedic: true });
    }
  }
  render() {
    return (
      <div className="App">
        <CGM handleChange={this.handleChange} />
        {this.state.formError.length > 0 && (
          <span
            style={{ color: "red", fontSize: "0.75em", display: "relative" }}
          >
            {this.state.formError}
          </span>
        )}
        {this.state.paramedic && (
          <span
            style={{ color: "red", fontSize: "0.75em", display: "relative" }}
          >
            Blood sugar level too high, paramedic will be arriving soon!
          </span>
        )}
      </div>
    );
  }
}

export default App;
