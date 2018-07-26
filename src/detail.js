import React, { PureComponent } from "react";

import Header from "./Header";
import getFlickrInfo from "./getFlickrInfo";

class Detail extends PureComponent {
  state = {
    data: {},
    description: "",
    photo: {}
  };

  async componentDidMount() {
    this.setState({
      data: await getFlickrInfo(`${this.props.location.state.api_description}`)
    });
    this.setState({
      description: this.state.data.photo.description._content
    });
    this.setState({
      photo: this.state.data.photo
    });
  }

  render() {
    // const { farm, server, id, secret } = this.state.data.photo;
    return (
      <div>
        <Header />
        <p>{this.state.description}</p>
        <p>{this.props.location.state.title}</p>
        <img
          src={`https://farm${this.state.photo.farm}.staticflickr.com/${
            this.state.photo.server
          }/${this.state.photo.id}_${this.state.photo.secret}_z.jpg`}
        />
      </div>
    );
  }
}

export default Detail;
