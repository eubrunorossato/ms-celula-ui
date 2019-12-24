import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Header, Left, Text, Title, Body, Right } from "native-base";

const MainHeader = (props) => {
  return (
    <Header style={componentStyle.headerStyle}>
      <Left>
        <Icon name="ios-menu"
          onPress={props.onPress}
          style={componentStyle.iconStyle}
        />
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
    backgroundColor: "#1e1e1e",
    borderBottomWidth: 0,
    position: "relative"
  },
  iconStyle: {
    color: "#d0d0d0"
  },
  titleStyle: {
    fontWeight: "600",
    color: "#d0d0d0"
  }
});

export {
  MainHeader
}