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
    const { farm, server, id, secret } = this.state.photo;
    const description = this.state.description;
    const title = this.props.location.state.title;

    return (
      <div>
        <Header />
        <p>{description}</p>
        <p>{title}</p>
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`}
        />
      </div>
    );
  }
}

export default Detail;
