import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onClick?: Function;
  link: string;
}

interface State {}
 
export class UserOptionItemReactive extends React.Component<Props,State> {
  render() {
    const { onClick, children, link } = this.props;

    return (
      <div className="dropdown-item" onClick={ () => onClick && onClick() }>
        <Link
          className="link-menu"
          to={ link }
        >
          { children }
        </Link>
      </div>
    );
  }
}