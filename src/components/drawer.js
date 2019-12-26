import React from "react";
import { Image } from "react-native";
import { Container, Body, Content } from "native-base";
import { DrawerItems } from "react-navigation-drawer";

const DrawerNavigator = (props) => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Body>
        <Image
          source={require("../../assets/perfilPhoto.jpg")}
          style={{ marginTop: 60, borderRadius: 160 }}
        />
      </Body>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </Container>
  )
};

export {
  DrawerNavigator
};