exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
      i = 0;
      props = [];
      for (property in obj) {
          if (obj.hasOwnProperty(property) === true) {
              props.push(property + ': ' +obj[property]);
	  }
      }
      return props;
  }
};
