import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export function initializeFirebaseApp(firebaseConfig: string) {
  firebase.initializeApp(firebaseConfig);
}

export class Firebase {

  //REGIST AND LOGIN WHIT EMAIL
  public createUserWithEmailAndPassword(email: string, password: string, onRegist: Function, onError?: Function | undefined): void {
    let errorCode: string = '';
    let errorMessage: string = '';

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error: any) => {
      errorCode = error.code;
      errorMessage = error.message;

      if (onError) {
        onError(errorCode, errorMessage);
      }
    }).then(() => {
      if (!errorCode) {
        firebase.auth().onAuthStateChanged((user: any) => {
          if (user) {
            onRegist(user);
          } else {
            onRegist(null);
          }

          firebase.auth().signOut().then(
            () => {}
          ).catch();
        });
      }
    });
  }

  public signInWithEmailAndPassword(email: string, password: string, onLogIn: Function, onError?: Function | undefined): void {
    let errorCode: string = '';
    let errorMessage: string = '';
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error: any) => {
      errorCode = error.code;
      errorMessage = error.message;

      if (onError) {
        onError(errorCode, errorMessage);
      }
    }).then(() => {
      if (!errorCode) {
        firebase.auth().onAuthStateChanged((user: any) => {
          if (!errorCode) {
            onLogIn(user);
          } 
        });
      }
    });
  }

  public sendPasswordResetEmail(email: string, onSendMail: Function, onError?: Function) {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      onSendMail();
    }).catch((error: any) => {
      if (onError) {
        onError(error);
      }
    });
  }

  //REGIST AND LOGIN WHIT GMAIL
  public signInWithGooglePopup(onSignIn: Function, onError?: Function | undefined): void {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result: any) => {
      const token = result.credential.accessToken;
      const user = result.user;
      onSignIn(token, user);
    }).catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (onError) {
        onError(errorCode, errorMessage);
      }
    });
  }

  public signOut(onSignOut: Function, onError?: Function | undefined): void {
    firebase.auth().signOut().then(() => {
      onSignOut();
    }).catch((error: any) => {
      if (onError) {
        onError(error);
      }
    });
  }

  //CALL DATA
  public on(path: string, onFunction: Function): void {
    firebase.database().ref().child(path).on('value',(snapshot: any) => {
      onFunction(snapshot);
    });
  }

  public once(path: string, onFunction: Function): void {
    firebase.database().ref().child(path).once('value',(snapshot: any) => {
      onFunction(snapshot);
    });
  }

  public remove(path: string, errorFunction?: Function | undefined): void {
    firebase.database().ref().child(path).remove((error: any) => {
      if (errorFunction) {
        if (error) {
          errorFunction(error);
        }
      }
    });
  }

  public update(path: string, data: any, onFunction?: Function, errorFunction?: Function | undefined): void {
    firebase.database().ref(path).update(data, (error: any) => {
      if (errorFunction && error) {
        errorFunction(error);
      } else {
        if(onFunction) {
          onFunction();
        }
      }
    });
  }

  public set(path: string, data: any, errorFunction?: Function | undefined): void {
    firebase.database().ref(path).set(data,(error: any) => {
      if (errorFunction && error) {
        errorFunction(error);
      }
    });
  }

  public push(path: string, data: any, errorFunction?: Function | undefined): void {
    firebase.database().ref(path).push(data,(error: any) => {
      if (errorFunction && error) {
        errorFunction(error);
      }
    });
  }
}