const { browser, element } = require('protractor');
// const jasmine = require('jasmine');
//const expect = jasmine.expect;

describe('angulario homepage', function () {
    beforeEach(function () {
        browser.get('http://angular.io/');
    });
    it('should show the search results', function () {
        element(by.xpath('//input[@type=\'search\']')).sendKeys('What is Angular');
        const searchResult = element(by.className('search-results'));
        expect(searchResult.isDisplayed()).toBe(true);
        browser.sleep(2000);

        element(by.xpath('//li[@class=\'search-page ng-star-inserted\']//span[text()=\'ng doc\']')).click();

        const ngDoc = element(by.xpath('//h1[@id=\'ng-doc\']'));
        expect(ngDoc.getText()).toBe('ng doc');

        const argument = element(by.xpath('//h2[@id=\'arguments\']'));
        expect(argument.getText()).toBe('Arguments');

        const options = element(by.xpath('//h2[@id=\'options\']'));
        expect(options.getText()).toBe('Options');

        element(by.xpath('//a[@class=\'vertical-menu-item level-1 collapsed\']//span[text()=\'Introduction\']')).click();

        const angularBox = element(by.xpath('//div[@class=\'card-container\']//a[@href=\'guide/what-is-angular\']'));
        expect(angularBox.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });
    it('should validate the search functionality ', function () {
        element(by.xpath('//span[text()=\'Resources\']')).click();

        const heading = element(by.id('explore-angular-resources'));
        expect(heading.isDisplayed()).toBe(true);

        element(by.xpath('//input[@type=\'search\']')).sendKeys('hi');
        const searchResult = element(by.className('search-results'));
        expect(searchResult.isDisplayed()).toBe(true);
        browser.sleep(2000);

        element(by.xpath('//li[@class=\'search-page ng-star-inserted\']//span[text()=\'Hierarchical injectors\']')).click();

        element(by.xpath('//li[@title=\'Types of modifiers\' and @class=\'h3 ng-star-inserted\']')).click();
        const currentHeading = element(by.id('types-of-modifiers'));
        expect(currentHeading.getText()).toBe('Types of modifiers');
        browser.sleep(2000);
    });
});
