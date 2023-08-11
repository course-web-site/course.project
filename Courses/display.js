var data=JSON.parse(localStorage.getItem('data'))
function display(){
    each(data,function(element,i){
        $('.display').append(`<iframe width="600" height="600" align-items='center' src=${element}>
        </iframe>`)
    })
}
display()
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