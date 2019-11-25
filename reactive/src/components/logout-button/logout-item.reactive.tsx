import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

interface Props {
  onClick: Function;
}

interface State {}
 
export class LogoutItemReactive extends React.Component<Props,State> {
  render() {
    const { onClick, children } = this.props;

    return (
      <Dropdown.Item onClick={ () => onClick() }>
        { children }
      </Dropdown.Item>
    );
  }
}