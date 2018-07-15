import React, { Component } from 'react';

import './App.css';
import Header from './components/header';

const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const flickr = `https://api.flickr.com/services/rest/?method=flickr.urls.getUserPhotos
&api_key=${api_key}&user_id=95388692%40N07
&format=json&nojsoncallback=1&auth_token=72157698641258634-1272240e957e2e6d
&api_sig=77dd8ec747fa9891856c1bf3a735acad`;

class App extends Component {

 api_call = async () => {
    const getPics = await fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=a56a095f16d940969064eb0ab30db570&user_id=95388692%40N07&format=json&nojsoncallback=1&auth_token=72157698641258634-1272240e957e2e6d&api_sig=abce68466ad3783950b087819e4e68a4");
    const data = await getPics.json();
    await alert(data);
  }

componentDidMount () {
  this.api_call ();
}

  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
