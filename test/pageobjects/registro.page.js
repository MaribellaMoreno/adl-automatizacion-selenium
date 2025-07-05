const { BasePage } = require ("./base.page");

class RegistroPage extends BasePage{
    get inputName() {

    }

    get inputConfirmPassword() {

    }

    async registro() {
        await this.inputName.setValue();
        await this.inputEmail.setValue();
        await this.inputName.setValue();
        await this.inputName.setValue();

    }
}