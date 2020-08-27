import React, { Component } from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

import TimeAgo from "../components/Time";
export class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://source.unsplash.com/random",
            }}
          />
        </Left>
        <Body>
          <Text>{this.data.title}</Text>
          {/* <Text note numberOfLines={1}>
            {this.data.description}
          </Text>  */}
          <TimeAgo time={this.data.publishedAt} />
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
