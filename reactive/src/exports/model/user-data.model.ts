export class UserData {
  uid: string;
  displayName: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  role: number;
  
  constructor(data: any | UserData) {
    this.uid = '';
    this.displayName = '';
    this.email = '';
    this.phoneNumber = '';
    this.photoURL = '';
    this.role = -1;

    Object.assign(this, data);
  }
}