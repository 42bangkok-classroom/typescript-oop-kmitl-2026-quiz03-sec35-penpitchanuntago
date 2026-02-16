export class Student { 
    firstname:string ;
    lastname : string;
    constructor(firstname:string, lastname:string){
        this.firstname=firstname;
        this.lastname=lastname
    }
    printName(message?:string){
    console.log('My name is',this.firstname,this.lastname);
  }}
