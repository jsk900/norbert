import React, { PureComponent } from "react";

import Header from "./Header";
import getFlickrInfo from "./getFlickrInfo";
import "./css/detail.css";

let indexHold = null;
let idHold = null;

class Detail extends PureComponent {
  state = {
    data: {},
    description: "",
    photo: {},
    api_description: this.props.location.state.api_description,
    index: this.props.location.state.index
  };

  async componentWillMount() {
    this.setState({
      data: await getFlickrInfo(`${this.state.api_description}`)
    });

    this.setState({
      description: this.state.data.photo.description._content
    });

    this.setState({
      photo: await this.state.data.photo
    });
  }

  _MinusGetInfo = () => {
    this.state.index - 1 < 0
      ? (indexHold = this.props.location.state.arrLength - 1)
      : (indexHold = this.state.index - 1);

    idHold = this.props.location.state.results[indexHold].id;

    const api_description = `${this.props.location.state.url1}&api_key=${
      this.props.location.state.api_key
    }&photo_id=${idHold}${this.props.location.state.url2}`;

    this.setState({
      index: indexHold,
      api_description: api_description
    });
  };

  _PlusGetInfo = () => {
    this.state.index + 1 === this.props.location.state.arrLength
      ? (indexHold = 0)
      : (indexHold = this.state.index + 1);

    idHold = this.props.location.state.results[indexHold].id;

    const api_description = `${this.props.location.state.url1}&api_key=${
      this.props.location.state.api_key
    }&photo_id=${idHold}${this.props.location.state.url2}`;

    this.setState({
      index: indexHold,
      api_description: api_description
    });
  };

  render() {
    const { farm, server, id, secret } = this.state.photo;
    const description = this.state.description;
    const title = this.props.location.state.title;
    const theme = "menu-bar3";
    console.log(idHold, indexHold);

    return (
      <div className="detail">
        <div className="clip3" />
        <React.Fragment>
          <Header theme={theme} />

          <p className="title">{title}</p>
          <button onClick={this._MinusGetInfo} className="minus">
            -
          </button>
          <button onClick={this._PlusGetInfo} className="plus">
            +
          </button>
          <img
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`}
          />
          <p className="description">{description}</p>
        </React.Fragment>
      </div>
    );
  }
}

export default Detail;
