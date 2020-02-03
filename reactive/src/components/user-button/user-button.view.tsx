import * as React from 'react';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { DropdownButton, Dropdown } from 'react-bootstrap';

interface Props {
  className?: string;
  label?: string | React.ReactElement;
  src?: string;
  title?: string;
  onClick: Function;
}

interface State {}

export class UserButtonReactive extends React.Component<Props, State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();
  
  render() {
    const { className, label, src, title, children, onClick } = this.props;

    return (
      <DropdownButton 
        className={ `reactive-user-button ${className}` }
        id="reactive-user-button"
        title={ 
          src ?
            <img 
              alt="userImge" 
              className="rounded-circle r-icon-32" 
              src={ src } 
              title={ title } 
            /> 
          :
            <FontAwesomeIcon icon="user-circle" size="2x" />
        }
      > 
        {
          children
        }
        <Dropdown.Item onClick={ () => onClick() }>
          {
            label ?
              label
            :
              <>
                <FontAwesomeIcon icon="sign-out-alt"/>
                <SpaceReactive />
                Cerrar sesión
              </>
          }
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}