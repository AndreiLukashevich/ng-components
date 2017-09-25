
import { AppComponentPage } from './app.po';
import { DateTimePicker } from './app.po';
import { Pickers } from './app.po'
import { ModalWindows } from './app.po';
import { NgxModdialog } from './app.po';

describe('AppComponentPage', () => {
  let page: AppComponentPage;

  beforeEach(() => {
    page = new AppComponentPage();
  });

  it('Test', () => {
    page.navigateTo();
    page.getTest().then(function (browserLog) {
      console.log("Start");
      console.log(browserLog);
      console.log("Finish");
      expect(browserLog.length).toEqual(0);
    });
  });

  it('Should display AppComponentPage title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Angular Pickers');
  });

  it('Should display home URL', () => {
    page.navigateTo();
    expect(page.getURL()).toEqual('http://localhost:49156/home');
  });

  it('Should display nav Pickers (url)', () => {
    page.navigateTo();
    page.getNavPickers().click();
    expect(page.getURL()).toEqual('http://localhost:49156/pickers');
  });

  // it('Testing AllAngular2AppRoots', () => {
  //   page.navigateTo();
  //   console.log(page.getAllRoutes());
  //   expect(page.getAllRoutes()).toEqual('http://localhost:49156/pickers');
  // });

});


describe('DateTimePicker', () => {
  let page: DateTimePicker;


  beforeEach(() => {
    page = new DateTimePicker();
  });

  it('Should display DateTimePicker title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('date-time-picker works!');
  });

  it('Should display date in input', () => {
    page.navigateTo();
    page.getInputDate().click();
    page.getButton090517().click();
    expect(page.getButton090517().getText()).toEqual('05');
    expect(page.getInputDate().getAttribute('value')).toEqual('09/05/2017')
  });

  it('Should display DateTimePicker URL', () => {
    page.navigateTo();
    expect(page.getURL()).toEqual('http://localhost:49156/pickers/date-time-picker');
  });

  it('Should display button goBack (url)', () => {
    page.navigateTo();
    page.getButtonGoBack().click();
    expect(page.getURL()).toEqual('http://localhost:49156/pickers');
  });


});

describe('CommonTest', () => {

  let pageApp: AppComponentPage;
  let pagePicker: Pickers;
  let pageDateTimePicker: DateTimePicker;
  let pageModalWindows: ModalWindows;
  let pageNgxModdialog: NgxModdialog;

  beforeEach(() => {
    pageApp = new AppComponentPage();
    pagePicker = new Pickers();
    pageDateTimePicker = new DateTimePicker();
    pageModalWindows = new ModalWindows();
    pageNgxModdialog = new NgxModdialog();
  });

  it('Should display CommonTest', () => {
    pageApp.navigateTo();
    expect(pageApp.getURL()).toEqual('http://localhost:49156/home');
    pageApp.getNavPickers().click();
    expect(pagePicker.getURL()).toEqual('http://localhost:49156/pickers');
    pagePicker.getNavDateTimePicker().click();
    expect(pageDateTimePicker.getURL()).toEqual('http://localhost:49156/pickers/date-time-picker');
    pageDateTimePicker.getButtonGoBack().click();
    expect(pagePicker.getURL()).toEqual('http://localhost:49156/pickers');
    pagePicker.getNavModalWindows().click();
    expect(pageModalWindows.getURL()).toEqual('http://localhost:49156/modalwindows');
    pageModalWindows.getNavNgxModdialog().click();
    expect(pageNgxModdialog.getURL()).toEqual('http://localhost:49156/modalwindows/ngxmoddialog');
    expect(pageNgxModdialog.getAlert().length).toEqual(undefined);
    pageNgxModdialog.getButtonAlert().click();
    expect(pageNgxModdialog.getAlert().length).not.toEqual(0);
    expect(pageNgxModdialog.getModalWindow().getText()).toBe('Alert is a classic (title/body/footer) 1 button modal window that does not block.');
    pageNgxModdialog.getButtonOk().click();
    expect(pageNgxModdialog.getAlert().length).toEqual(undefined);
  });

});

