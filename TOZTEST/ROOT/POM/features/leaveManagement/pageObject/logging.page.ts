import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoggingPage extends Page {
    /********************************************************************************************************************************
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $("#txt_name");
    }

    public get inputPassword () {
        return $('#txt_pass');
    }

    public get btnSubmit () {
        return $('#btn_submit');
    }

    public get homeIcon () {
        return $('#div_HomePage_Id_');
    }

    public get profileIcon () {
        return $('#undivname')
    }

    public get btnsignout() {
        return $('#liitem2btnlistLog=Signout')
    }
    
    /********************************************************************************************************************************
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async logging (username: string, password: string) {
        await browser.maximizeWindow();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async logout (){
        await this.profileIcon.click();
        await this.btnsignout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('logging');
    }

    
}

export default new LoggingPage();