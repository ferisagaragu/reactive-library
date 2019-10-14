import * as React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div>
        Example Component: {text}

        <Button>
          Hola vida
        </Button>
      </div>
    )
  }
}
