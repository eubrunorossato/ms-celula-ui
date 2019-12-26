import React from "react";
import { Container, Content, Text } from "native-base";
import { MainHeader } from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";

const HomeScreen = (props) => {
  return (
    <Container>
      <MainHeader onPress={() => { props.navigation.dispatch(DrawerActions.openDrawer()) }
      } />
      <Content contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </Content>
    </Container>
  )
};

export {
  HomeScreen
}