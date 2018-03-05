var UIModule = (function () {
    //treba da:

    var UISelectors = {
        usernameSelector: "#username",
        passwordSelector: "#passwprd",
        errorSelector: "#error-block",
        buttonSelector: "#loginbutton"
    }

    var usernameInput = document.querySelector(UISelectors.usernameSelector);
    var passwordInput = document.querySelector(UISelectors.passwordSelector);
    var errorBlock = document.querySelector(UISelectors.errorSelector);

    var status = {
        OK: "OK",
        MISSING_DATA: "Please insert username and/or password",
        WRONG_DATA: "Please check username and/or password"
    }

    //dohvati podatke
    function getFormData() {
        var formData = {};
        formData.username = usernameInput.value;
        formData.password = passwordInput.value;

        return formData;
    }

    //validacija podataka
    function validateData(username, password) {
        if (username == "" || password == "") {
            return status.MISSING_DATA;
        }
        return status.OK;
    }

    //prikaz greske
    function setError(message) {
        error.Block.textContent = message;
    }
    //brisanje greske
    function clearError() {
        errorBlock.textContent = "";
    }

    return {
        getFormData: getFormData,
        validateData: validateData,
        clearError: clearError,
        status: status,
        UISelectors: UISelectors
    }
})()