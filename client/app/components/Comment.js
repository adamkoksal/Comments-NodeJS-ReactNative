import React, { useState, useEffect } from "react";
import { StyleSheet, View, Platform, Text, FlatList } from "react-native";
import usersApi from "../api/users";
import commentsApi from "../api/comments";

import Post from "./Post";

function Comment(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const response = await commentsApi.getComments();
    setComments(response.data);
  };

  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          username={item.username}
          comment={item.comment}
          date={item.date}
        />
      )}
    />
  );
}

{
  /* <FlatList
  data={comments}
  keyExtractor={(item) => item._id}
  renderItem={({ item }) => (
    <Post username={item.userId} comment={item.comment} />
  )}
/>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Comment;
