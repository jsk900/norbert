const api_key = `aa20374c2f047317fcb67372aed22bc1`;

const getDescription = async props => {
  const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${props}&format=json&nojsoncallback=1`;
  const apiCall = await fetch(`${flickr}`);
  const data = await apiCall.json();
  return data;
};

export default getDescription;
