import { browser, by, element } from 'protractor';
// import { Router, Route } from "@angular/router";
import { AppComponent } from '../src/app/app.component';
// import { AppService } from '../src/app/app.service';

export class AppComponentPage {
  // public strTest = new AppService();
  // constructor () {}

  navigateTo() {
    return browser.get('/');
  }

  getURL() {
    return browser.getCurrentUrl();
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getNavPickers() {
    return element(by.cssContainingText('a', 'Pickers'));
  }

  getTest() {
    return browser.manage().logs().get('browser');
  }

  // getAllRoutes() {
  //   return this.strTest.testService;
  // }
}

export class DateTimePicker {
  navigateTo() {
    return browser.get('/pickers/date-time-picker');
  }

  getTitle() {
    return element(by.css('app-date-time-picker h4')).getText();
  }

  getInputDate() {
    return element(by.id('date'));
  }
  getButton090517() {
    return element(by.cssContainingText('button', '05'));
  }
  getButtonGoBack() {
    return element(by.cssContainingText('button', 'Go Back'));
  }
  getURL() {
    return browser.getCurrentUrl();
  }

}

export class Pickers {
  navigateToPickers() {
    return browser.get('/pickers');
  }
  getURL() {
    return browser.getCurrentUrl();
  }
  getNavDateTimePicker() {
    return element(by.cssContainingText('a', 'DateTimePicker'));
  }
  getButtonGoBack() {
    return element(by.cssContainingText('button', 'Go Back'));
  }
  getNavModalWindows() {
    return element(by.cssContainingText('a', 'ModalWindows'));
  }
}
export class ModalWindows {
  navigateToPickers() {
    return browser.get('/modalwindows');
  }
  getURL() {
    return browser.getCurrentUrl();
  }
  getNavNgxModdialog() {
    return element(by.cssContainingText('a', 'NgxModdialog'));
  }
}
export class NgxModdialog {
  getURL() {
    return browser.getCurrentUrl();
  }
  getButtonAlert() {
    return element(by.cssContainingText('button', 'Alert'));
  }
  getAlert() {
    return element(by.id('modal-overlay'));
  }
  getButtonOk() {
    return element(by.cssContainingText('button', 'Ok'));
  }
  getModalWindow() {
    return element(by.tagName('h5'));
  }
}


