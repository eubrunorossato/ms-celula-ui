import { HomeScreen } from "./src/screen/homeScreen";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";

const navigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }

}, {
  initialRouteName: "Home",
});

export default createAppContainer(navigator);
