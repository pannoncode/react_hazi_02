import { Fragment, useRef, useState } from "react";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const enterUserName = useRef();
  const enterAge = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    console.log("errrorrr működik");
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    //ezt azért csináltam mert amikor a "props.onAddUser(enterUserName, enterAge)" nem a bevitt adatott adta át,
    //ezért állandóan hibára futott nekem a hozzáadás. console.log-al nézegettem, hogy mit add át, és akkor láttam
    //hogy egyedül csak az ID-t rakta be rendesen, a name és az age-be "null"-t rakott. Kisebb küzdelem után jött
    //a megvilágosodás, hogy az enterUserName és a enterAge -nek nem a "current value"-át adja át.
    //Ezért kiraktam két változóba amit belepakoltam props.onAddUser() -be
    //Így sikerült megjelenítenem a beivitt adatokat

    const userName = enterUserName.current.value;
    const age = enterAge.current.value;

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Name or Age! (non-empty values)",
      });
      return;
    }

    if (+enterAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAddUser(userName, age);
    enterUserName.current.value = "";
    enterAge.current.value = "";
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onChange={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor={"username"}>UserName</label>
          <input id="username" type="text" ref={enterUserName} />

          <label htmlFor={"age"}>Age (years) </label>
          <input id="age" type="number" ref={enterAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
