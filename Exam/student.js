var Student = function(name,surname){
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function(){
    return this.name + ' ' + this.surname;
}

var student1 = new Student ('John', 'McClain');
console.log(student1.getStudentData());
 