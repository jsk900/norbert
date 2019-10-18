import React, { PureComponent } from 'react';

import { Header } from './Header';
import { getFlickrInfo } from './getFlickrInfo';
import './css/detail.css';

let indexHold = null;
let idHold = null;

export class Detail extends PureComponent {
  state = {
    data: {},
    description: '',
    photo: {},
    title: this.props.location.state.title,
    api_description: this.props.location.state.api_description,
    index: this.props.location.state.index
  };

  async componentDidMount() {
    const data = await getFlickrInfo(`${this.state.api_description}`);
    this.setState({
      data: data,
      description: data.photo.description._content,
      photo: data.photo
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.api_description !== this.state.api_description) {
      const data = await getFlickrInfo(`${this.state.api_description}`);
      this.setState({
        data: data,
        description: data.photo.description._content,
        photo: data.photo,
        title: data.photo.title._content
      });
    }
  }

  PlusGetInfo = async () => {
    this.state.index + 1 === this.props.location.state.arrLength
      ? (indexHold = 0)
      : (indexHold = this.state.index + 1);

    idHold = this.props.location.state.results[indexHold].id;

    const api_description = `${this.props.location.state.url1}&api_key=${this.props.location.state.api_key}&photo_id=${idHold}${this.props.location.state.url2}`;

    await this.setState({
      index: indexHold,
      api_description: api_description,
      data: await getFlickrInfo(`${api_description}`)
    });
  };

  render() {
    const { farm, server, id, secret } = this.state.photo;
    const description = this.state.description;
    const title = this.state.title;

    return (
      <div className="detail">
        <Header />
        <div className="container">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <div className="image_container">
          <img
            onClick={this.PlusGetInfo}
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`}
            alt="pic"
          />
        </div>
      </div>
    );
  }
}
