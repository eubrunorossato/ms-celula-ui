import React from "react";
import { Icon } from "native-base";
import { HomeScreen } from "./src/screen/homeScreen";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
import { DrawerNavigator } from "./src/components/drawer"

const navigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerIcon: (
        <Icon name="home"
          style={{
            color: "#000000"
          }}
        />
      )
    }
  },
}, {
  initialRouteName: "Home",
  contentComponent: DrawerNavigator,
  drawerType: "slide",
  inactiveBackgroundColor: "white",
  labelStyle: {
    color: "white",
  },
  contentOptions: {
    activeTintColor: "#565353",
    itemsContainerStyle: {
      marginVertical: 0,
    },
  }
});

export default createAppContainer(navigator);
