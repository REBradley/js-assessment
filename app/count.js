exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
      var has = function() {
	    var i = start;
            var step = function(){
		     console.log(1);
	             i++;
		     if (i > end) {
		         return clearInterval(a);
		     }
                 };
	    a = setInterval(step, 100);
            var cancel = function(){clearInterval(a);};
      }
  return setTimeout(has, 100);
  }
};
