import React, { Component } from 'react';

import './App.css';
import Header from './components/header';

const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const flickr = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos
&api_key=${api_key}&user_id=95388692%40N07
&format=json&nojsoncallback=1`;

class App extends Component {

state = {

}

// this to be moved to it's own component
 api_call = async () => {
    const getPics = await fetch(`${flickr}`);
    const data = await getPics.json();
    await data.photos.photo.map((image) => {
      let srcPath = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`
    });
  }

componentDidMount () {

  //Need to be able to call this from separate component
  this.api_call()
}

  render() {

    return (
      <div className="App">
        <Header />
        <div>
        <ul>
          <li><img src="Here I need to put the mapped url coming from srcPath" alt=""/></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
