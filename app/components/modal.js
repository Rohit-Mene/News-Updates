import React, { Component } from "react";

import {
  Title,
  Container,
  Header,
  Content,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { Dimensions, Modal, Share, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const webViewHeight = "100%";

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    this.props.onClose();
  };
  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via InstaNews`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };
  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container style={styles.container}>
            <Header style={styles.header}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={styles.icon} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{ color: "#fff" }} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={styles.icon} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webViewHeight }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000",
  },
  icon: {
    color: "#fff",
    fontSize: 30,
  },
});
export default ModalComponent;

//we have used Moment.js library
