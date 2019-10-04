import "font-awesome/css/font-awesome.min.css";
// @flow

/**
 * Author : SLK
 * Component Name : Button
 * Component Type : Function Component
 * Description : Button component is a functional component, Some info comes in (props),
 *               and returns button element as output
 */
import React from "react";

/* Component props type declaration */
type ButtonProps = {
  disabledButton?: boolean,
  onclickevent: any,
  classname: string,
  text: string,
  icon?: boolean,
  iconClassName?: string
};

export default function Button({
  disabledButton,
  onclickevent,
  classname,
  text,
  icon,
  iconClassName
}: ButtonProps) {
  return (
    <button
      data-test="buttonTest"
      disabled={disabledButton}
      onClick={onclickevent}
      className={classname}
    >
      {" "}
      {text} {icon === true ? <i className={iconClassName}></i> : ""}{" "}
    </button>
  );
}
