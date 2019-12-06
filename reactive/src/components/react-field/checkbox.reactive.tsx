import * as React from 'react';

interface Props {
  className?: string;
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
    onChange && onChange(checkbox.checked, checkbox);
  }
  
  render() {
    const { renderChecked } = this.state;
    const { className } = this.props;

    return (
      <div className={ `container-check-div-reactive ${className}` }>
        <label className="container-check-reactive">
          <input ref={ this.inputRef } type="checkbox" onChange={ (evt) => this.onChange(evt.target) } checked={ renderChecked } />
          <span className="checkmark-reactive" />
        </label>
      </div>
    )
  }
}