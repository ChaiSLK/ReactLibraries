// @flow

/**
 * Author : SLK
 * Component Name : LabelDropdown
 * Component Type : Class Component
 * Description : LabelDropdown component is a class component, Some info comes in (props), and returns application dropdown label as output
 */
import React, { Component } from "react";

type labelDropdownProps = {
  labelname: string,
  labelnameList: Array<string>,
  labelChange: any
};

type labelDropdownState = {
  labelname: string
};

export class LabelDropdown extends Component<
  labelDropdownProps,
  labelDropdownState
> {
  constructor(props: labelDropdownProps) {
    super(props);

    this.state = {
      labelname: props.labelname
    };
  }

  labelChange(labelname: string) {
    this.setState(
      {
        labelname
      },
      () => {
        this.props.labelChange(labelname);
      }
    );
  }

  render() {
    return (
      <div className="label-menu-dropdown" data-test="labeldropdownTest">
        <label className="cursor-pointer dropdownLabel">
          {this.props.labelname}
          <i className="fa fa-chevron-down"></i>
          <ul className="dropdownUl">
            {this.props.labelnameList.map((labelname, index) => {
              return (
                <li key={index} onClick={() => this.labelChange(labelname)}>
                  {labelname}
                </li>
              );
            })}
          </ul>
        </label>
      </div>
    );
  }
}

export default LabelDropdown;
