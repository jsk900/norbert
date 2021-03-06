export const getFlickrInfo = async props => {
  //Handle call from App to get Flickr Images and call from Detail to get description
  let info;

  props.api_images ? (info = props.api_images) : (info = props);

  const apiCall = await fetch(`${info}`);
  const data = await apiCall.json();
  return data;
};
