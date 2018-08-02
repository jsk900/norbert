import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import getFlickrInfo from "./getFlickrInfo";
import "./css/gallery.css";

const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const api_images = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${api_key}&user_id=95388692@N07&format=json&nojsoncallback=1`;

const theme = "menu-bar2";

// Norbert = 95388692@N07
// Joey    = 66845042@N04

class App extends PureComponent {
  state = {
    data: {},
    results: []
  };

  renderData = () =>
    this.state.results.map((flickr, index) => (
      <Link
        to={{
          pathname: `/detail/${flickr.id}`,
          state: {
            api_description: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${
              flickr.id
            }&format=json&nojsoncallback=1`,
            id: flickr.id,
            title: flickr.title,
            index: index,
            url1: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo`,
            url2: `&format=json&nojsoncallback=1`,
            api_key: api_key,
            results: this.state.results,
            arrLength: this.state.results.length
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
    ));
  async componentDidMount() {
    this.setState({ data: await getFlickrInfo({ api_images }) });
    this.setState({ results: await this.state.data.photos.photo });
  }

  render() {
    if (!this.state.results.length) {
      return <p>loading....</p>;
    }
    return (
      <div className="main">
        <Header theme={theme} />

        <div className="images">
          <ul>{this.renderData()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
