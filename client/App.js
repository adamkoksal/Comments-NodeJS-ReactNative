import { Container, Content } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

import AppHeader from "./app/components/AppHeader";
import Comment from "./app/components/Comment";
import Post from "./app/components/Post";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Content style={{ marginTop: 15 }}>
        <Post
          username="akoksal"
          comment={"This is my first react app connected to a database!"}
        />
        <Post username="secondUser" comment={"This is awesome! Good job! :)"} />
        <Comment></Comment>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({});
