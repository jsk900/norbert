import React, { PureComponent } from "react";

import Header from "./components/header.jsx";
import getDescription from "./getDescription";

class Detail extends PureComponent {
  state = {
    data: [],
    description: null,
    farm: null,
    server: null,
    id: null,
    secret: null
  };

  async componentDidMount() {
    this.setState({
      data: await getDescription(this.props.location.state.id)
    });
    this.setState({
      description: this.state.data.photo.description._content,
      farm: this.state.data.photo.farm,
      server: this.state.data.photo.server,
      id: this.state.data.photo.id,
      secret: this.state.data.photo.secret
    });
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.description}</p>
        <img
          src={`https://farm${this.state.farm}.staticflickr.com/${
            this.state.server
          }/${this.state.id}_${this.state.secret}_z.jpg`}
        />
      </div>
    );
  }
}

export default Detail;
