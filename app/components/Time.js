import React, { Component } from "react";
import { Text } from "native-base";
import moment from "moment";

class TimeAgo extends Component {
  constructor(props) {
    super(props);

    this.date = props.time;
  }
  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <Text note style={{ marginTop: 5, color: "#000", fontWeight: "bold" }}>
        {time}
      </Text>
    );
  }
}

export default TimeAgo;

//we have used Moment.js library
