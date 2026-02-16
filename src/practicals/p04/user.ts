export class User {    public username:string;
    private password :string;
    private LOGIN_ATTEMPTS: number;
    constructor(username:string,password:string,LOGIN_ATTEMPTS:number){
        this.username =username;
        this.password = password;
        this.LOGIN_ATTEMPTS = LOGIN_ATTEMPTS;
    }
    User(){
        console.log(this.username)
    }
    login(){
        this.validatePassword
    }
    validatePassword(password1:string):boolean{
        if (this.password === password1){
            return true;
        }
        else{
            return false;
        }
   
    }
    getLoginAttempts():number{
        return this.LOGIN_ATTEMPTS
    }
}

