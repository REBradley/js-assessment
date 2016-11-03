exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      var i;
      for (i = 0; i < arr.length; i += 1) {
	      if (arr[i] === item) {
	          return i;
              };
      };      
      return -1;
  },

  sum: function(arr) {
	   i = 0;
	   total = 0;
           for (i = 0; i < arr.length; i += 1) {
	       total += arr[i]; 
	   };
       return total;
  },

  remove: function(arr, item) {
      i;
      altarr = [];
      for (i= 0; i < arr.length; i += 1) {
          if (arr[i] !== item) {
	      altarr.push(arr[i]);
	  }
      }
      return altarr;
  },

  removeWithoutCopy: function(arr, item) {
      i;
      delta = 0;
      for (i = 0; i < arr.length; i +=1) {
          if (arr[i] === item) {
	      delete arr[i];
	      delta += 1;
	  }
      }
      arr.sort(function (a, b) {
          if (a ===b) {
	      return 0;
	  }
          return a > b ? 1 : -1;
      });
      arr.length = arr.length - delta;
      return arr;
  },

  append: function(arr, item) {
      arr[arr.length] = item;
      return arr;
  },

  truncate: function(arr) {
      arr.length = arr.length - 1;
      return arr;
  },

  prepend: function(arr, item) {
      i;
      arr.length = arr.length + 1;
      for (i = 0; i < arr.length - 1; i += 1) {
          arr[arr.length - i - 1] = arr[arr.length - i - 2];
      }
      arr[0] = item;
      return arr; 
  },

  curtail: function(arr) {
      i;
      new_len = arr.length - 1;
      arr[arr.length] = arr[0];
      for (i = 0; i < arr.length; i += 1) {
          arr[i] = arr[i + 1];
      }
      arr.length = new_len;
      return arr;
  },

  concat: function(arr1, arr2) {
      start_len = arr1.length
      add_len = arr2.length;
      arr1.length = arr1.length + add_len;
      i;
      for (i = 0; i < add_len; i += 1) {
          arr1[start_len + i] = arr2[i];
      }
      return arr1;
  },

  insert: function(arr, item, index) {
      var second_part = [];
      i = index;
      k = 0;
      for (i = index; i < arr.length; i += 1) {
	  added = arr[i];
          second_part[second_part.length] = added
      }
      arr.length = index;
      arr.push(item);
      for (k = 0; k < second_part.length; k += 1) {
          arr.push(second_part[k]);
      }
      return arr;;
  },

  count: function(arr, item) {
      i;
      count = 0;
      for (i = 0; i < arr.length; i++) {
          if (item === arr[i]) {
	      count += 1;
	  }
      }
      return count;
  },

  duplicates: function(arr) {
      var clean = [];
      var filt_count = 0;
      i = 0;
      k = 1;
      j = 0;
      for (i = 0; i < arr.length; i++) {
          var first = arr[i];
          for (k = 1; k < arr.length; k++) {
	      comp = arr[k];
	      filt_count = 0;
	      if (first === comp && i !== k) {
	          for (j = 0; j < clean.length; j++) {
		      if (first === clean[j]) {
		          filt_count += 1;
		      }
		  }
		  if (filt_count < 1) {
		      clean[clean.length] = first;
		  }
	      }
	   }
      }
      return clean;
  },

  square: function(arr) {
      i;
      for (i = 0; i < arr.length; i++) {
          arr[i] = Math.pow(arr[i],2);
      }
      return arr
  },

  findAllOccurrences: function(arr, target) {
      i;
      occurences = [];
      for (i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
	      occurences.push(i);
	  }
      }
      return occurences;
  }
};
