import {Person} from './person';

export class Family {
  public surname: string;
  public members: Person[];

  public constructor(surname: string, members: Person[]) {
    this.surname = surname;
    this.members = members;
  }

  public getPersonFullName(person:Person) {
    return `${person.name} ${this.surname}`;
  }

  public getFamilyName() {
    return `The ${this.surname} Family`;
  }
}
