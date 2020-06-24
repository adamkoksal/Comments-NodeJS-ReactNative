import React, { useState, useEffect } from "react";
import { StyleSheet, View, Platform, Text, FlatList } from "react-native";
import usersApi from "../api/users";

function Comment(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await usersApi.getUsers();
    setUsers(response.data);
    // console.log(users[0], users[1]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.username}</Text>}
      />
    </View>
  );
}

{
  /* <FlatList
  data={users}
  keyExtractor={(user) => user.id}
  renderItem={({ user }) => <Text style={{ flex: 1 }}>{user.username}</Text>}
/>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Comment;
