import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/glucose-meter.svg"}
          alt="Monitor Logo"
          style={{ height: 500, margin: 80 }}
        />
        <section style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Glucose Level"
            name="glucose"
            onChange={this.props.handleChange()}
            noValidate
          />
          <p>Normal blood sugar ranges from 3.9 and 7.1</p>
        </section>
      </div>
    );
  }
}
