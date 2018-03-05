var Exam = function(subject,student,grade){
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function (){
    return this.subject.getSubjectName() + ' ' + this.student.getStudentData();
}

Exam.prototype.hasPassed = function(){
    if(this.grade > 5){
        return "Passed";
    } else {
        return "Failed";
    }
}