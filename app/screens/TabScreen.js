import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Tab,
  Tabs,
  Left,
  Right,
} from "native-base";
import { View } from "react-native";
import Tab1 from "../tabs/Tab1";
import Tab2 from "../tabs/Tab2";
import Tab3 from "../tabs/Tab3";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class TabScreen extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <View></View>;
    }

    return (
      <Container>
        <Header
          style={{ backgroundColor: "#000" }}
          androidStatusBarColor="#000"
          hasTabs
        >
          <Left />
          <Body>
            <Title>News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "red" }} activeTe>
          <Tab
            tabStyle={{ backgroundColor: "#000" }}
            activeTabStyle={{ backgroundColor: "#F896A6" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#000" }}
            activeTabStyle={{ backgroundColor: "#F896A6" }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#000" }}
            activeTabStyle={{ backgroundColor: "#F896A6" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
