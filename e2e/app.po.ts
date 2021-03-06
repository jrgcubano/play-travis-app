import { browser, element, by } from 'protractor';

export class Ng2CiAppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getFriends() {
        return element.all(by.css('li')).count();
    }
}
