import React from 'react';

interface InputProps {
  inputValue: string;
  setInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputStates {}

export default class Input extends React.Component<InputProps, InputStates> {
  render() {
    return (
      <div>
        <input
          name="color"
          type="text"
          placeholder="Add a hex color"
          value={this.props.inputValue}
          onChange={this.props.setInputValue}
        />
      </div>
    );
  }
}
