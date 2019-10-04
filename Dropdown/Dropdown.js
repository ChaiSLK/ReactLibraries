// @flow

/**
 * Author : SLK
 * Component Name : Dropdown
 * Component Type : Class Component
 * Description : Dropdown component is a functional component, Some info comes in (props), and returns customized dropdown element as output
 */

import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

/* Component props type declaration */
type DrodpownProps = {
  name: string,
  options: Array<{ value: string, description: string, isReadonly?: boolean }>,
  classes?: string,
  value: string,
  changedStateValue: any,
  labels?: any
};

/* Component States type Declaration */
type DropdownState = {
  dropdownOpen: boolean,
  dropDownValue: string
};

export class Dropdown extends Component<DrodpownProps, DropdownState> {
  constructor(props: DrodpownProps) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropDownValue: this.props.value
    };
  }

  /* Function to toggle dropdown display */
  toggle() {
    this.setState(prevState => ({
      ...prevState,
      dropdownOpen: !this.state.dropdownOpen
    }));
  }

  render() {
    return (
      <ButtonDropdown
        data-test="dropdownTest"
        name={this.props.name}
        isOpen={this.state.dropdownOpen}
        toggle={() => this.toggle()}
        className={this.props.classes}
      >
        <DropdownToggle caret className="custom-dropdown">
          <span>
            {this.props.options.map((option, index) => {
              return this.props.value === option.value
                ? option.description
                : null;
            })}
          </span>
        </DropdownToggle>
        <DropdownMenu>
          {this.props.options.map((option, index) => {
            return option.isReadonly === true ? (
              <DropdownItem className="read-only" key={index}>
                <span>{option.description}</span>{" "}
                {this.props.name === "pressureValue" && `(${this.props.labels.SSA_PIPE_TOO_LARGE})`}
              </DropdownItem>
            ) : (
              <DropdownItem
                key={index}
                onClick={() => this.props.changedStateValue(option.value)}
              >
                {option.description}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
        <button className="hidden" onClick={() => this.toggle()}></button>
      </ButtonDropdown>
    );
  }
}

export default Dropdown;
