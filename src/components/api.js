const api_key = `aa20374c2f047317fcb67372aed22bc1`;
const flickr = `https://api.flickr.com/services/rest/?method=flickr.people.getPhotos
&api_key=${api_key}&user_id=95388692%40N07
&format=json&nojsoncallback=1`;

const getImages = async () => {
  const apiCall = await fetch(`${flickr}`);
  const data = await apiCall.json();

  await data.photos.photo.map(image => {
    return `https://farm${image.farm}.sta ticflickr.com/${image.server}/ ${
      image.id
    }_${image.secret}_s. jpg`;
  });
};

export default getImages;
