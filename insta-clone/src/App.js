import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ImageList from "./components/ImageList";
import { Button } from "react-bootstrap";

class App extends Component {
  // default state object
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get("http://starlord.hackerearth.com/insta")
      .then(response => {
        // create an array of images only with relevant data
        const newImages = response.data.map(c => {
          return {
            image: c.Image,
            likes: c.likes,
            timestamp: c.timestamp
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          images: newImages
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Insta Cloce App</h1>
        </header>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
