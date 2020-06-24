import client from "./client";

const getUsers = () => client.get("user");

export default { getUsers };
