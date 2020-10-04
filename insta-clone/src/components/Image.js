import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import "./Image.css";

function Image(props) {
  return (
    <div class="col-sm-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>
        {props.timestamp}
        </Card.Text>
        <Button variant="primary">{props.likes}</Button>
      </Card.Body>
    </Card>
  </div>
  );
}

Image.propTypes = {
  name: PropTypes.string.isRequired
};

export default Image;
