// function collectInputData () {
//     var nodes = {
// selectedSubjectInput: document.querySelector('.add-subject'),
// selectedStudentInput: document.querySelector('.add-student-name'),
// selectedGradeInput: document.querySelector('.add-grade')
// }

// console.log(info.selectedGradeInput);
// }

var selectedSubjectInput = document.querySelector('.add-subject');
var selectedStudentInput = document.querySelector('.add-student-name');
var selectedGradeInput =  document.querySelector('.add-grade');

function collectInputData(){
    var subject = selectedSubjectInput.value;
    var student = selectedStudentInput.value;
    var grade = selectedGradeInput.value;

    var result = {
        subject: subject,
        student: student,
        grade: grade
    }
    return result;
}

function validation(){
    if(selectedStudentInput.value == "" && selectedGradeInput.value == ""){
        return false;
    }
}