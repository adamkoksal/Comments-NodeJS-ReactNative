import { Container, Content } from "native-base";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppHeader from "./app/components/AppHeader";
import Comment from "./app/components/Comment";
import Post from "./app/components/Post";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Post
        style={{ marginTop: 15 }}
        username="akoksal"
        comment={"This is my first React Native app  connected to a database!"}
        date={"Tue Jun 23 2020"}
      />
      <Content>
        <Comment></Comment>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({});
