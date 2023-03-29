import React from 'react';
import { addColorToLocalStorage } from '../../utils/addColorToLocalStorage';
import { getColorsFromLocalStorage } from '../../utils/getColorsFromLocalStorage';

export default class NewColorForm extends React.Component {
  state = {
    inputValue: '',
  };

  setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  submitHandler = () => {
    addColorToLocalStorage(this.state.inputValue);
  };

  example = () => {
    console.log(getColorsFromLocalStorage());
  };

  componentDidMount() {
    console.log(getColorsFromLocalStorage());
  }

  render() {
    return (
      <>
        <form className="new-color-form" onSubmit={this.submitHandler}>
          <label htmlFor="color"></label>
          <input
            name="color"
            type="text"
            placeholder="Add a color"
            value={this.state.inputValue}
            onChange={(event) => this.setInputValue(event)}
          />
        </form>
        {/* <button onClick={this.example}>Click</button> */}
      </>
    );
  }
}
