const getFlickrInfo = async props => {
  //Handle call from App to get Flickr Images and call from Detail to get description
  let info;
  if (props.api_images) {
    info = props.api_images;
  } else {
    info = props;
  }

  const apiCall = await fetch(`${info}`);
  const data = await apiCall.json();
  return data;
};

export default getFlickrInfo;
