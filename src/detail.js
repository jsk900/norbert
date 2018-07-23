import React, { PureComponent } from "react";

import Header from "./components/header.jsx";
import getDescription from "./getDescription";

class Detail extends PureComponent {
  state = { data: [] };

  async componentDidMount() {
    this.setState({
      data: await getDescription(this.props.location.state.id)
    });
  }

  render() {
    if (!this.state.data.length) {
      return <p>Loading...</p>;
    }

    const description = this.state.data.photo.description._content;
    const { farm, server, id, secret } = this.state.data.photo;
    return (
      <div>
        <p>{id}</p>
      </div>
    );
  }
}

export default Detail;
