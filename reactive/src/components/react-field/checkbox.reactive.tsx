import * as React from 'react';

interface Props {
  checked?: boolean;
  onInit?: Function;
  onChange?: Function;
}

interface State {
  renderChecked: boolean;
}

export class CheckBoxReactive extends React.Component<Props,State> {
  
  inputRef: any = null;

  constructor(props: Props) {
    super(props);
    const { checked } = this.props;

    this.state = {
      renderChecked: checked ? checked : false
    }

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { onInit } = this.props;
    onInit && onInit(this.inputRef.current);
  }

  private onChange(checkbox: any): void {
    const { onChange } = this.props;
    this.setState({ renderChecked: checkbox.checked });
    onChange && onChange(checkbox.checked);
  }
  
  render() {
    const { renderChecked } = this.state;

    return (
      <>
        <input ref={ this.inputRef } type="checkbox" onChange={ (evt) => this.onChange(evt.target) } checked={ renderChecked } />
      </>
    )
  }
}