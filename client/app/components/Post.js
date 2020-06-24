import React from "react";
import { StyleSheet, View, Platform, Text, SafeAreaView } from "react-native";

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

function Post({ username, comment, date }) {
  return (
    <SafeAreaView style={styles.cardContent}>
      <Card style={styles.card}>
        <CardItem>
          <Thumbnail source={{ uri: "https://picsum.photos/200/300" }} small />
        </CardItem>
        <SafeAreaView style={styles.cardBody}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.textTitle}>{username}</Text>
            <Right/>
            <Text>{date}</Text>
          </View>

          <Text style={styles.text}>{comment}</Text>
        </SafeAreaView>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    marginHorizontal: "5%",
    marginTop: 7,
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingRight: 15
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
    ...Platform.select({
      ios: {
        fontSize: 16,
      },
    }),
    marginTop: 10,
  },
});

export default Post;
