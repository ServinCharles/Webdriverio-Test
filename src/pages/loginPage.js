const cboObjRepo = require('./../ObjectRepo/LoginPageObjectRepository');
const assert = require("assert");

class LoginPage {
        enterUserName (username) {
        const input = $(cboObjRepo.Login_User_Name_TextBox);
        input.setValue(username);
    };

    enterPassword (password) {
        const input = $(cboObjRepo.Login_Password_TextBox);
        input.setValue(password);
    };

    clickSubmit () {
        const myElem = $(cboObjRepo.Login_Button);
        myElem.click()
    };


}
module.exports = LoginPage;