import React, { PureComponent } from "react";

import "./App.css";
import Header from "./components/header.jsx";
import getData from "./api";

class App extends PureComponent {
  state = {
    data: []
  };

  renderData = () => {
    return this.state.data.map(link => (
      <ul>
        <li key={link.id}>
          <p>{link.title}</p>
          <img
            src={`https://farm${link.farm}.staticflickr.com/${link.server}/${
              link.id
            }_${link.secret}_s.jpg`}
          />
        </li>
      </ul>
    ));
  };

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
