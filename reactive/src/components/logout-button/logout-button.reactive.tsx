import * as React from 'react';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { Cookies } from '../../exports/cookies.export';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { toastReactive } from '../swal/swal.reactive';
import { DropdownButton, Dropdown } from 'react-bootstrap';

interface Props {
  className?: string;
  label?: string | React.ReactElement;
  src?: string;
  title?: string;
  onLogOut: Function;
}

interface State {}

export class LogoutButtonReactive extends React.Component<Props, State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();

  private onClick(): void {
    const { onLogOut } = this.props;
    this.firebase.signOut(() => {
      Cookies.remove('userData');
      toastReactive('error', 'Sesión cerrada', 'bottom');
      onLogOut && onLogOut();
    });
  }
  
  render() {
    const { className, label, src, title, children } = this.props;

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
        <Dropdown.Item onClick={ () => this.onClick() }>
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