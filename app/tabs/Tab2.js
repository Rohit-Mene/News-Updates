import React, { Component } from "react";
import { Alert, ActivityIndicator, FlatList } from "react-native";
import { Container, Content, List, Text, View } from "native-base";
import { getArticles } from "../service/news";
import { DataItem } from "../components/dataItem";
import ModalComponent from "../components/modal";
export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }
  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({ setModalVisible: false, modalArticleData: {} });
  };
  componentDidMount() {
    getArticles("business").then((data) => {
      this.setState(
        {
          isLoading: false,
          data: data,
        }

        // (error) => {
        //   Alert.alert("Error", "Something went wrong");
        // }
      );
    });
  }

  render() {
    //console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text
          style={{
            color: "#000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem data={item} onPress={this.handleItemDataOnPress} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
