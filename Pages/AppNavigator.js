import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../Pages/HomeScreen";
import SignUp from "../Pages/SignUp";
import ChooseGame from "../Pages/ChooseGame";
import GameAR from "../Pages/GameAR";
import Profile from "../Pages/Profile";
import Leaderboard from "../Pages/Leaderboard";
import Login from "../Pages/Login";
import UploadImage from "../Pages/UploadImage";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUp,
    ChooseGame: ChooseGame,
    GameAR: GameAR,
    Profile: Profile,
    Leaderboard: Leaderboard,
    // Login: Login,
    UploadImage: UploadImage
  },
  {
    initalRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#75A0B9",
        borderBottomWidth: 0
      },
      headerTintColor: "white",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
