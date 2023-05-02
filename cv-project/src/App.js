import React, { Component } from "react";
import Education from "./components/education.js";
import Personal from './components/personal.js';

class App extends Component {
  render() {
    return (
    <>
      <div>Start creating you CV below:</div>
      <Personal/>
      <Education/>
    </>
    );
  }
}


export default App;
