import React, { PureComponent } from "react";

import Header from "./components/header.jsx";
import getDescription from "./getDescription";

class Detail extends PureComponent {
  state = {
    data: {}
  };

  async componentDidMount() {
    this.setState({
      data: await getDescription(this.props.location.state.id)
    });
  }

  render() {
    const { description, farm, server, id, secret } = this.state.data;
    return (
      <div>
        <Header />
        <p>{description}</p>
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`}
        />
      </div>
    );
  }
}

export default Detail;
