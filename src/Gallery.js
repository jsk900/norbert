import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './Header';
import { getFlickrInfo } from './getFlickrInfo';
import { Spinner } from './Spinner';
import './css/gallery.css';


const api_key = process.env.REACT_APP_API_KEY;
const user_id = process.env.REACT_APP_USER_ID;

const api_images = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${api_key}&user_id=${user_id}&format=json&nojsoncallback=1`;

export class Gallery extends PureComponent {
  state = {
    data: {},
    results: []
  };

  renderData = () =>
    this.state.results.map((flickr, index) => (
      <Link
        key={flickr.id}
        to={{
          pathname: `/detail/${flickr.id}`,
          state: {
            api_description: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${flickr.id}&format=json&nojsoncallback=1`,
            id: flickr.id,
            title: flickr.title,
            index: index,
            url1: `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo`,
            url2: `&format=json&nojsoncallback=1`,
            api_key: api_key,
            results: this.state.results,
            arrLength: this.state.results.length
          }
        }}>
        <img
          key={flickr.id}
          src={`https://farm${flickr.farm}.staticflickr.com/${flickr.server}/${flickr.id}_${flickr.secret}_q.jpg`}
          alt={`${flickr.id}`}
        />
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
      <div className='main'>
        <Header />

        <div className='gallery'>{this.renderData()}</div>
      </div>
    );
  }
}
