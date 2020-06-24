import client from "./client";

const getUsers = () => client.get("users");

export default { getUsers };
