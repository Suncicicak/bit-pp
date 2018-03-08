class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    printPersonData() {
        console.log(`(${this.name},${this.surname})`);

    }
}

class Programmer extends Person {
    constructor(name, surname, languages) {
        super(name, surname);
        this.languages = languages;
    }

    printProgramerData(){
        super.printPersonData();
        console.log(this.languages);  
    }

    learnedNewLanguage(args){
        this.languages.push(...args);
        
    }
}

let ourPerson = new Programmer ('Sara','McClain', ['Javascript']);
ourPerson.printPersonData();
ourPerson.printProgramerData();
ourPerson.learnedNewLanguage(['php', 'python']);
ourPerson.printProgramerData();

// console.log(ourPerson instanceof Programmer);
// console.log(ourPerson instanceof Person);

