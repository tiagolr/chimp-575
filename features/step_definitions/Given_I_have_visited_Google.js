// Recommended filename: Given_I_have_visited_Google.js
module.exports = function() {
  this.Given(/^I have visited Google$/, function () {
    // Write the automation code here
    browser.url('http://google.com');
  });
};