export class Person {private age?: number;
    firstName: string;
    lastName: string;

    constructor(age: number,firstName:string,lastName=string) {
        this.age = age;
        this.firstname=firstName;
        this.lastname=lastName;
    }
    setAge(age:number){}
    getAge(age:number){return this.age}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

