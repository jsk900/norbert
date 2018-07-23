import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header.jsx";
import getImages from "./getImages";

class App extends PureComponent {
  state = {
    data: []
  };

  renderData = () =>
    this.state.data.map(flickr => (
      <ul>
        <Link
          to={{
            pathname: `/detail/${flickr.id}`,
            state: {
              id: flickr.id
            }
          }}
        >
          <li key={flickr.id}>
            <p>{flickr.title}</p>

            <img
              src={`https://farm${flickr.farm}.staticflickr.com/${
                flickr.server
              }/${flickr.id}_${flickr.secret}_s.jpg`}
            />
          </li>
        </Link>
      </ul>
    ));

  async componentDidMount() {
    this.setState({ data: await getImages() });
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
