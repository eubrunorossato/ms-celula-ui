import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Header, Left, Text, Title, Body, Right } from "native-base";

const MainHeader = (props) => {
  return (
    <Header style={componentStyle.headerStyle}>
      <Left>
        <Icon name="ios-menu"
          onPress={props.onPress}
        >
        </Icon>
      </Left>
      <Body>
        <Title>
          <Text style={componentStyle.titleStyle}>
            Celulas Pibb
            </Text>
        </Title>
      </Body>
      <Right></Right>
    </Header>
  )
};

const componentStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#00ffe4",
    borderBottomWidth: 0,
    position: "relative"
  },
  titleStyle: {
    fontWeight: "600",
  }
});

export {
  MainHeader
}