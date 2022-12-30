class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    validatePassword(){
        if(this.password.length>6){
            console.log(true)
        }else{
            console.log(false)
        }
    }
}

const person = new User('Vadim','1234554321');


class Student extends User{
    constructor(username,password,nickname){
        super(username,password) //зсилаємось на батьківський елемент 
        this.nickname = nickname;
    }
}



const person1 = new Student('Vadim','789456123','nagibator228')

console.log(person1)
 console.log(person.password)