exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var i = 0;
      var deeper = 0;
      var file_list = [];
      var dir_list = [];
      var dirName = dirName;
      var recurs = function(data) {
          if (data['dir'] === dirName || deeper === 1) {
	      for (g = 0; g < data['files'].length; g++) {
	          if (typeof data['files'][g] === 'string') {
		      dir_list.push(data['files'][g]);
		  }
		  if (data['files'][g].hasOwnProperty('files')) {
		      deeper += 1;
		      recurs(data['files'][g]);
		  }
	      }
	      return dir_list;
	  }
          for (var i = 0; i < data['files'].length; i++) {
	      if (data['files'][i].hasOwnProperty('files')) {
	          recurs(data['files'][i]);
	      }
	      if (typeof data['files'][i] === 'string') {
	          file_list.push(data['files'][i]);
	      }
	  }
      }
      if (file_list.length === 0) {
          recurs(data);
      }
      return dir_list.length === 0 ? file_list : dir_list;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
