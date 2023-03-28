import React from 'react';

export default class NewColorForm extends React.Component {
  state = {
    inputValue: '',
  };

  addColorToLocalStorage = () => {};

  render() {
    return (
      <form>
        <label htmlFor="color"></label>
        <input name="color" type="text" placeholder="Add a color" />
      </form>
    );
  }
}
