import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Mark Cuban"
          email="markcuban@mavericks.com"
          phone="222-222-2222"
        />
        <Contact
          name="Daymond John"
          email="daymond@thesharkgroup.com"
          phone="111-111-1111"
        />
      </div>
    );
  }
}

export default App;
