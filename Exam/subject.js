    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function (name) {
        return this.name;
    }

    var subject1 = new Subject ('SPA');
    console.log(subject1.getSubjectName());