export class UserData {
  uid: string;
  displayName: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  role: number;
  from: 'google' | 'email-password';
  
  constructor(data: any | UserData) {
    this.uid = '';
    this.displayName = '';
    this.email = '';
    this.phoneNumber = '';
    this.photoURL = '';
    this.role = -1;
    this.from = 'email-password';

    Object.assign(this, data);
  }
}