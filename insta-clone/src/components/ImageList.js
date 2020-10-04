import React from "react";
import PropTypes from "prop-types";

// import the Image component
import Image from "./Image";

function ImageList(props) {
  return (
    <div class="row">
        {props.images.map(c => <Image likes={c.likes} image={c.image} timestamp={c.timestamp} />)}
    </div>      
  );
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageList;
