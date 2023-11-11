import React, { Component } from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: "rgba(255,255,255,.7)",
                width: 13,
                height: 13,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#aaa",
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#0fb170",
                width: 13,
                height: 13,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: "#aaa",
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          paginationStyle={{
            bottom: 70,
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Text>page 1</Text>
          </View>
          <View style={styles.slide}>
            <Text>page 2</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
  },

  image: {
    width,
    height,
  },
};
