import React from 'react';
import { Colors } from '../../hooks/useColorFilter';
import { expandHexColor } from '../../utils/expandHexColor';
import { addColorValidation } from '../../utils/validation/addColorValidation';
import { doesColorNotExist } from '../../utils/validation/doesColorNotExist';
import { realTimeHexValidation } from '../../utils/validation/realTimeHexValidation';
import Input from './Input';

interface NewColorFormProps {
  colors: Colors[];
  setColors: React.Dispatch<React.SetStateAction<Colors[]>>;
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
}

export default class NewColorForm extends React.Component<NewColorFormProps> {
  state = {
    inputValue: '',
  };

  setInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (realTimeHexValidation(event.target.value) || event.target.value === '') {
      this.setState({ inputValue: event.target.value });
      this.props.setNewColor(expandHexColor(event.target.value.toUpperCase()));
    }
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      this.props.newColor &&
      doesColorNotExist(this.props.colors, this.props.newColor) &&
      addColorValidation(this.state.inputValue)
    ) {
      this.props.setColors([
        ...this.props.colors,
        { name: this.state.inputValue.toUpperCase(), value: expandHexColor(this.state.inputValue.toUpperCase()) },
      ]);
      this.props.setNewColor('');
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <>
        <form className="new-color-form" onSubmit={(event) => this.submitHandler(event)}>
          <label htmlFor="color"></label>
          <Input inputValue={this.state.inputValue} setInputValue={this.setInputValue} />
          <button>+</button>
        </form>
      </>
    );
  }
}
