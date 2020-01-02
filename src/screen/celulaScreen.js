import React from "react";
import { Container, Content } from "native-base";
import { TableCelulaMembers } from "../components/cardCelulaMember";
import { StyleSheet, Text } from "react-native";
import { MainHeader } from "../components/Header";
import { DrawerActions } from "react-navigation-drawer";

const CelulaScreen = (props) => {

  return (
    <Container>
      <MainHeader onPress={() => { props.navigation.dispatch(DrawerActions.openDrawer()) }} />
      <Content contentContainerStyle={{
        alignItems: "center"
      }}>
        <TableCelulaMembers />
      </Content>
    </Container >
  )
};

const componentStyle = StyleSheet.create({
  cardItemStyle: {
    backgroundColor: "#fff3f8",
    borderRadius: 15,
  },
  cardStyle: {
    borderRadius: 15
  }
});

export {
  CelulaScreen
}