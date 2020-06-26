import React from "react";
import { connect } from "react-redux";
import Badge from 'react-bootstrap/Badge'

const People = (props) => {
  console.log(props);
  return <div>
      <Badge pill variant="primary">
      {props.person.name}
  </Badge>
  </div>;
};

export default connect(null, {})(People);
