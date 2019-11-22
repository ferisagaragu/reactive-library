import * as React from 'react';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { Cookies } from '../../exports/cookies.export';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

interface Props {
  className?: string;
  label?: string | React.ReactElement;
  onClick?: Function;
}

interface State {}

export class LogoutButtonReactive extends React.Component<Props, State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();

  private onClick(): void {
    const { onClick } = this.props;
    this.firebase.signOut(() => {
      Cookies.remove('userData');
      onClick && onClick();
    });
  }
  
  render() {
    const { className, label } = this.props;

    return (
      <button
        className={ className }
        onClick={ () => this.onClick() }
      >
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
      </button>
    );
  }
}