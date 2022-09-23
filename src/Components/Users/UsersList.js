import React from "react";

import Card from "../UI/Card";

import userlistcss from "./UsersList.module.css";

const UserList = (props) => {
  console.log(props.users);
  return (
    <Card className={userlistcss.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age} {console.log(user.id + user.name)}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
