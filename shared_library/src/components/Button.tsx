import React from "react";
import "./Button.css";
type IProps = {
  children: React.ReactNode;
  onClick: () => void;
};
export default (props: IProps) => {
  return (
    <button className="button-primary" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
