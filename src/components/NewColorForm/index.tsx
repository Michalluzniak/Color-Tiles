import React from 'react';
import { Colors } from '../../hooks/useColorFilter';
import { expandHexColor } from '../../utils/expandHexColor';
import { addColorValidation } from '../../utils/validation/addColorValidation';
import { doesColorNotExist } from '../../utils/validation/doesColorNotExist';
import { realTimeHexValidation } from '../../utils/validation/realTimeHexValidation';
import { Error } from './Error';
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
    isError: false,
    errorMsg: '',
  };

  setInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    !realTimeHexValidation(event.target.value) &&
      this.setState({
        isError: true,
        errorMsg: 'Color need to start with "#" and have only hex characters ex. (#ffffff)',
      });
    if (realTimeHexValidation(event.target.value) || event.target.value === '') {
      this.setState({
        isError: false,
        errorMsg: '',
      });
      this.setState({ inputValue: event.target.value });
      this.props.setNewColor(event.target.value.toUpperCase());
    }
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(this.props.newColor && this.props.newColor);
    // this.props.newColor && doesColorNotExist(this.props.colors, this.props.newColor)
    if (this.props.newColor && !doesColorNotExist(this.props.colors, this.props.newColor)) {
      this.setState({
        isError: true,
        errorMsg: 'Color already exists',
      });
    } else if (this.props.newColor && !addColorValidation(this.state.inputValue)) {
      this.setState({
        isError: true,
        errorMsg: 'Wrong hex format ex. (#fff , #ff0000)',
      });
    } else {
      this.props.setColors([
        ...this.props.colors,
        { name: this.state.inputValue.toUpperCase(), value: expandHexColor(this.state.inputValue.toUpperCase()) },
      ]);
      this.props.setNewColor('');
      this.setState({ inputValue: '' });
    }

    // if (
    //   this.props.newColor &&
    //   doesColorNotExist(this.props.colors, this.props.newColor) &&
    //   addColorValidation(this.state.inputValue)
    // ) {
    //   this.props.setColors([
    //     ...this.props.colors,
    //     { name: this.state.inputValue.toUpperCase(), value: expandHexColor(this.state.inputValue.toUpperCase()) },
    //   ]);
    //   this.props.setNewColor('');
    //   this.setState({ inputValue: '' });
    // }
  };

  render() {
    return (
      <>
        <form className="new-color-form" onSubmit={(event) => this.submitHandler(event)}>
          <label htmlFor="color"></label>
          <Input inputValue={this.state.inputValue} setInputValue={this.setInputValue} />
          <button>+</button>
          {this.state.isError && <Error>{this.state.errorMsg}</Error>}
        </form>
      </>
    );
  }
}
