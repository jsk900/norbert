import React, { Component } from 'react';

const flickr = `https://api.flickr.com/services/rest/
?method=flickr.people.getPhotos&api_key=5b91e87c3668544d14a5d332d86f8ddf
&user_id=95388692%40N07&format=json&nojsoncallback=1
&auth_token=72157698602607884-66991cc539882c4d
&api_sig=a79cc8df475ab1939071a8a093fab36e`;

class Api extends Component {

   api_call = async () => {
     const getPics = await fetch(`${flickr}`);
     const data = await getPics.json();
     alert({data});
  }

  render () {
    return (

      <div className="api"></div>
    );
  }
}

export default Api;
