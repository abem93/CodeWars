// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

// #DEBUGGING

//********** My Solution **********//

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
var names = 'Ben';
var greet_ben = function() {
  return "Hello, " + names + '!';
};