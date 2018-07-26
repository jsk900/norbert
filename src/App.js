import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import getFlickrInfo from "./getFlickrInfo";

const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const api_images = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${api_key}&user_id=95388692@N07&format=json&nojsoncallback=1`;
const images = true;

// Norbert = 95388692@N07
// Joey    = 66845042@N04

class App extends PureComponent {
  state = {
    data: {},
    results: []
  };

  renderData = () =>
    this.state.results.map(flickr => (
      <ul key={flickr.id}>
        <Link
          to={{
            pathname: `/detail/${flickr.id}`,
            state: {
              api_description: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${
                flickr.id
              }&format=json&nojsoncallback=1`,
              id: flickr.id,
              title: flickr.title
            }
          }}
        >
          <li>
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
    this.setState({ data: await getFlickrInfo({ api_images, images }) });
    this.setState({ results: await this.state.data.photos.photo });
  }

  render() {
    if (!this.state.results.length) {
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
