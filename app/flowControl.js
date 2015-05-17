if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      var string = "";
      if (typeof num !== "number") {
        return false;
      }

      if (num % 3 !== 0 && num % 5 !== 0) {
        return num;
      }

      if (num % 3 === 0) {
        string += "fizz";
      }

      if (num % 5 === 0) {
        string += "buzz";
      }
      return string;
    }
  };
});
