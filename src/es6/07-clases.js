//declarando
class User {};

//instancia de una clase
// const newUser = new User();
class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

class user {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

//this
class user{
    constructor(none){
        this.name = none;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('ana');
console.log(ana.greeting());

// getters and setters
class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`; 
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age=n;
    }
}

const bebeloper1 = new user('David',15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);