exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
      return fn.apply(obj, obj);
  },

  functionFunction: function(str) {
      var my_str = str;
      var get_string = function (a) {
          return (my_str + ', ' + a);
      }
      return get_string;
  },

  makeClosures: function(arr, fn) {
      i = 0;
      for (i; i < arr.length; i++) {
          arr[i] = function () { return fn(arr[i]); }
     }
     return arr;
  },

  partial: function(fn, str1, str2) {
      return function(punctuation) {
          return fn (str1, str2, punctuation);
      }
  },

  useArguments: function() {
      i;
      total = 0;
      for (i = 0; i < arguments.length; i++) {
          total += arguments[i];
      }
      return total;
  },

  callIt: function(fn) {
      args = Array.prototype.slice.apply(arguments,[1]);
      fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
      var slice = Array.prototype.slice,
          stored_args = slice.call(arguments, 1);

      return function () {
	  var new_args = slice.call(arguments),
	      argsn = stored_args.concat(new_args);
          return fn.apply(null, argsn);
      };
  },

  curryIt: function(fn) {
      var arity = fn.length;
      var slice = Array.prototype.slice;
      var argsn = [];

      return function g(args) {
	  var new_arg = slice.call(arguments);
	  argsn = argsn.concat(new_arg);

	  if (argsn.length >= arity) {
              return fn.apply(null, argsn);
	  };

	  return g;
      };
  },
};
