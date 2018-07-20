import React, { PureComponent } from "react";
import Link, { link } from "react-dom";

import "./App.css";
import Header from "./components/header.jsx";
import getData from "./api";

class App extends PureComponent {
  state = {
    data: []
  };

  renderData = () =>
    this.state.data.map(flickr => (
      <ul>
        <li key={flickr.id}>
          <p>{flickr.title}</p>

          <img
            src={`https://farm${flickr.farm}.staticflickr.com/${
              flickr.server
            }/${flickr.id}_${flickr.secret}_s.jpg`}
          />
        </li>
      </ul>
    ));

  async componentDidMount() {
    this.setState({ data: await getData() });
  }

  render() {
    if (!this.state.data.length) {
      return <p>loading....</p>;
    }
    return (
      <div className="main">
        <Header />
        <div className="images">{this.renderData()}</div>
      </div>
    );
  }
}

export default App;
