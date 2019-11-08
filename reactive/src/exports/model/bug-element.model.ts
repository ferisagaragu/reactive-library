export class BugElement {
  createDate: string;
  description: string;
  levelProblem: string;
  location: string;
  problemType: string;
  resolved: boolean;
  uid: string;

  constructor(data: any | BugElement) {
    this.createDate = '';
    this.description = '';
    this.levelProblem = '';
    this.location = '';
    this.problemType = '';
    this.resolved = false;
    this.uid = '';

    Object.assign(this, data);
  }
}


