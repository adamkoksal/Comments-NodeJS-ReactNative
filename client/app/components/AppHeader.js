import { Header, Left, Right, Container } from "native-base";
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppHeader(props) {
  return (
    <Header>
      <Left />
      <Text style={styles.textTitle}>Comments</Text>
      <Right />
    </Header>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    ...Platform.select({
      android: {
        fontFamily: "Roboto",
        fontSize: 20,
        alignSelf: "center",
        color: "white",
      },
    }),
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
    }),
    fontWeight: "bold",
  },
});

export default AppHeader;
