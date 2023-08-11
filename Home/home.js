function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  //this function helps us to go from a page to another by clicking on the card shown in the home interface
$(document).ready(function() {
    $('.card2').click(function() {
      window.location.href = '../Courses/courses.html'
    })
  })
//this function helps us to go from a page to another by clicking on the site's logo shown in the nav bar
  $(document).ready(function() {
    $('.heading').click(function() {
      window.location.href = '../Home/index.html'
    })
  })