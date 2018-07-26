const getFlickrInfo = async props => {
  let info = "";
  console.log(props);
  if (props.images) {
    info = props.api_images;
  } else {
    info = props;
  }
  const apiCall = await fetch(`${info}`);
  const data = await apiCall.json();
  return data;
};

export default getFlickrInfo;
