const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const flickr = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos
&api_key=${api_key}&user_id=95388692%40N07
&format=json&nojsoncallback=1`;

const getData = async () => {
  const apiCall = await fetch(`${flickr}`);
  const data = await apiCall.json();
  return data.photos.photo;
};

export default getData;
