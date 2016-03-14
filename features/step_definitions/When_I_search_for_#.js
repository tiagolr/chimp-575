// Recommended filename: When_I_search_for_#.js
module.exports = function() {
  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    // Write the automation code here
    //browser.setValue('input[name="q"]', searchTerm);
  	//browser.keys(['Enter']);
  	widgets.searchPage.search(searchTerm);
  });
};