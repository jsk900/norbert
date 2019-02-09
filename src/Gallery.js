import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import getFlickrInfo from "./getFlickrInfo";
import Spinner from "./Spinner";
import "./css/gallery.css";

let secret = process.env.pass;

if (typeof secret == "undefined" || !secret) {
    secret = require("./secrets.json").pass;
}

const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const api_images = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${api_key}&user_id=${secret}&format=json&nojsoncallback=1`;

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
                    <img
                        src={`https://farm${flickr.farm}.staticflickr.com/${
                            flickr.server
                        }/${flickr.id}_${flickr.secret}_q.jpg`}
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
            return <Spinner />;
        }
        return (
            <div className="main">
                <div className="clip2" />

                <Header />

                <div className="images">
                    <ul>{this.renderData()}</ul>
                </div>
            </div>
        );
    }
}

export default App;
