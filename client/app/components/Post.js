import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

import {
  Header,
  Container,
  Left,
  Right,
  Title,
  Content,
  Card,
  CardItem,
  Body,
  Thumbnail,
} from "native-base";

function Post({ username, comment }) {
  return (
    <View style={styles.cardContent}>
      <Card style={styles.card}>
        <CardItem>
          <Thumbnail source={{ uri: "https://picsum.photos/200/300" }} small />
        </CardItem>
        <View style={styles.cardBody}>
          <Text style={styles.textTitle}>{username}</Text>

          <Text style={styles.text}>{comment}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: "7%",
    marginTop: 7,
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  cardBody: {
    flexDirection: "column",
    flex: 1,
    flexShrink: 1,
  },
  textTitle: {
    ...Platform.select({
      android: {
        fontFamily: "Roboto",
        fontSize: 20,
      },
    }),
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
    }),
  },
  text: {
    ...Platform.select({
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
    marginTop: 5,
  },
});

export default Post;
