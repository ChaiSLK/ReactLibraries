// @flow
import React from "react";

type InputProps = {
  type: string,
  class: string,
  onChangeEvent: any
};

export default function Input(props: InputProps) {
  return (
    <input
      data-test="inputTest"
      type={props.type}
      className={`input-box ${props.class}`}
      onChange={props.onChangeEvent}
    />
  );
}
