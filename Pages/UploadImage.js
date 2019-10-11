import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";
import Frisbee from "frisbee";

// const getStuff = new Frisbee({
//   headers: { Accept: "application/json", "Content-Type": "application/json" }
// });
export default class test extends React.Component {
  state = {
    photo: null,
    response: null
  };

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={{
          marginRight: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#92BFD7",
          backgroundColor: "#92BFD7"
        }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={{ fontSize: 16, padding: 5, color: "white" }}>
          Profile
        </Text>
      </TouchableOpacity>
    ),
    headerTitle: (
      <Image
        style={{ width: 100, height: "100%", padding: 15 }}
        source={require("../assets/pictuar-puzzle_logo.png")}
      />
    )
  });

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(
      { options, mediaType: "photo" },
      response => {
        if (response.uri) {
          this.setState({ photo: response });
        }
      }
    );
  };

  uploadPhoto = () => {
    const { data } = this.state.photo;
    return fetch("https://api.imgur.com/3/image", {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer fc0a9f7020eae6353ae08011ef2852caff0e0922",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      res
        .json()
        .then(link => {
          this.setState({ response: link.data.link });
          const { response } = this.state;
          return fetch("https://pictuar-puzzle.herokuapp.com/images/", {
            method: "POST",
            body: JSON.stringify({ url: response, diff: "4", user_id: "1" }),
            headers: {
              "Content-Type": "application/json"
            }
          });
        })
        .then(posted => console.log(posted))
        .catch(err => console.log(err));
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        {photo && (
          <View style={{ paddingTop: 100 }}>
            <TouchableOpacity onPress={this.uploadPhoto}>
              <Image
                source={{ uri: photo.uri }}
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: "white"
                }}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            title="Choose Photo"
            onPress={this.handleChoosePhoto}
          >
            <Text style={styles.textBtn}>Click to upload photo!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  diffBtn: {
    backgroundColor: "#92BFD7",
    padding: 25,
    width: "100%",
    borderRadius: 10
  },
  colourContainer: {
    alignItems: "center",
    backgroundColor: "#75A0B9",
    paddingBottom: 10
  },
  difficultyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  subTitle: {
    paddingTop: 0,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  subHeading: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    width: "60%",
    backgroundColor: "#F0F0F0",
    padding: 10,
    margin: 4,
    borderRadius: 8
  },
  btnContainer: {
    justifyContent: "space-between",
    padding: 20,
    flex: 1,
    justifyContent: "flex-end"
  },
  btnContainerBottom: {
    width: "90%"
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  imageThumb: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white"
  },
  images: {
    flexDirection: "row"
  },
  logo: {
    width: "95%",
    height: "28%"
  },
  imageBox: {
    flexDirection: "row"
  },
  rightHeader: {
    color: "white"
  },
  userBtn: {
    backgroundColor: "#92BFD7",
    padding: 15,
    width: "75%",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    color: "white"
  }
});
