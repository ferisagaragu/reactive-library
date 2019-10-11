import React, { Component } from 'react';
import { key } from '../key/key.reactive';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class FormTableReactive extends Component {

  constructor(props) {
    super(props);
    const { formData } = this.props;
    let form = { };

    for (var jsonKey in formData) {
      if (formData.hasOwnProperty(jsonKey)) {
        form[jsonKey] = '';
      }
    }

    this.state = { 
      ...form,
      renderForm: null,
      trick: 0
    };
  }

  componentDidMount() {
    const { formData } = this.props;
    let form = [];

    for (var jsonKey in formData) {
      if (formData.hasOwnProperty(jsonKey)) {
        form.push(
          <td key={ key() }>
            <input
              id={ jsonKey }
              className="form-control"
              type="text"
              value={ this.state.name }
              onChange={ (evt) => this.onChangeInput(evt) }
            />
          </td>
        );
      }
    }

    this.setState({ renderForm: form });
  }

  onChangeInput(evt) {
    console.log(this.state);
    this.setState({ name: evt.target.value });
  }

  render() {
    const { renderForm } = this.state;

    return (
      <tr>
        { renderForm }

        <td className="text-center">
          <Button 
            key={ key() }
            className="btn-circle mr-3"
            variant="outline-success"
          >
            <FontAwesomeIcon icon="check" />
          </Button>

          <Button 
            key={ key() }
            className="btn-circle"
            variant="outline-danger"
          >
            <FontAwesomeIcon icon="times" />
          </Button>
        </td>
      </tr>
    );
  }
}