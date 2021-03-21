Feature('Amazon Login Cases');
var url = 'http://amazon.com'
Scenario('not valid email ', ({ I }) => {


    I.amOnPage(url);
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('email', 'dasdasdasd');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");
    I.fillField('email', '6546546');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");
    
});

Scenario('valid email ', ({ I }) => {


    I.amOnPage(url);
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('email', 'dasdasdasd');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");
    I.fillField('email', 'tarkgulyuva@gmail.com');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'Forgot your password?')]");
    
});