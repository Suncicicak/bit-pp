var mainModule = (function (UIModule, dataModule) {

    function addLoginButtonListener() {

        document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {
            //procitati podatke iz formulara
            var formData = UIModule.getFormData(),
                //validirati podatke
                var validatoinResult = UIModule.validateData(formData.username, formData.password)

            if (validatoinResult == UIModule.status.MISSING_DATA) {
                UIModule.setError(UIModule.status.MISSING_DATA);
                return;
            }
            //proveriti da li korisnik postoji
            var checkUsernameAndPassword = dataModule.checUsernameAndPassword(formData.username, formData.password);

            if (checkUsernameAndPassword == fale) {
                UIModule.setError(UIModule.status.WRONG_DATA);
                return;
            }
            UIModule.setError(UIModule.status.OK);
            //
        });

    }
    return {
        init: function () {
            console.log("lets go...");
            addLoginButtonListener();

        }
    }

})(UIModule,dataModule);