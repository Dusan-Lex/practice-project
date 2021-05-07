import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  const list =
    users.length === 0 ? null : (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.age} years old)
          </li>
        ))}
      </ul>
    );
  return <Card className={classes.card}>{list}</Card>;
};

export default UsersList;
