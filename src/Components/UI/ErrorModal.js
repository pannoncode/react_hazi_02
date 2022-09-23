import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import errorcss from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={errorcss.backdrop} onChange={props.onChange} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card className={errorcss.modal}>
          <header className={errorcss.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={errorcss.content}>
            <p>{props.message}</p>
          </div>
          <footer className={errorcss.actions}>
            <Button onClick={props.onChange}>OK</Button>
          </footer>
        </Card>,
        document.getElementById("overlay-root")
      )}
      ;
    </Fragment>
  );
};

export default ErrorModal;
