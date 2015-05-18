if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(sum, elem) {
        return sum + elem;
      })
    },

    remove : function(arr, item) {
      arr2 = [];
      for (i=0; i < arr.length - 1; i++) {
        if (item !== arr[i]) {
          arr2.push(arr[i]);
        }
      }
      return arr2;
    },

    removeWithoutCopy : function(arr, item) {
      var i, len;

      for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i = i - 1;
          len = len - 1;
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var seen = {};
      var dupes = [];

      for (var i = 0; i < arr.length; i++) {
        seen[arr[i]] = seen[arr[i]] + 1 || 1;
      }

      for (var jeffrey in seen) {
        if (seen[jeffrey] && seen[jeffrey] > 1) {
          dupes.push(jeffrey);
        }
      }

      return dupes;
    },

    square : function(arr) {
      arr2 = arr.map(function(elem) {
        return Math.pow(elem, 2);
      })
      return arr2;
    },

    findAllOccurrences : function(arr, target) {
      occ = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === target) {
          occ.push(i);
        }
      }
      return occ;
    }
  };
});
