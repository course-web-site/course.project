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
  //our courses
  var courses=[
    {
    videos:'https://www.youtube.com/watch?v=-UJCMfuFtSQ',
    courseTitle: "Learn French For Kids",
    courseType:"Educative Video",
    duration:"2 Hours",
    id:0
},
    {
    videos:'../videos/Tale.mp4',
  
    courseTitle: "Tale",
    courseType:"PDF",
    duration:"1 Hour",
    id:1
},
    {
      videos:'../videos/Math.mp4',
   
    courseTitle: "Math Courses",
    courseType:"Educative Video",
    duration:"50 Mins",
    id:2
    },
    {
      videos:'../videos/english.mp4',
   
        courseTitle:'Learn English For Kids',
        courseType:'Educative Video',
        duration:"1 Hour",
        id:3
    }
]
$( document ).ready(function(){
    var container=$('body')
    console.log('ready')
})

//our array of pics and videos that we are going to assign to our courses
var coursePictures=['../array/French.jpg',
'../array/Tale.jpg',
'../array/Math.jpg',
'../array/English.png']
var courseVideos=['../videos/french.mp4',
'../videos/Tale.mp4',
'../videos/Math.mp4',
'../videos/english.mp4']


// our var courses and function in which we are going to display the courses
var course =$('#course-list')
function addToList(array){
    each(array,function(element,i){
  course.append($(`<li class="elements" >${element.courseTitle}  ${element.duration} <br>
  <img class=coursePics  onclick='myfunction(${element.id})'src=${coursePictures[i]}>
  </li>`))
})}

addToList(courses)
// function for search bar to filter our elements
var chercher=$('#course-list li')
$('#go').click(function(){

    var value=$('#search-bar').val().toLowerCase()
//this function to filter the list of elements we have in the courses page each element represents a course
    var filtred=filter(courses,function(element){ //using high order function filter to get what we need
        console.log(element)
       return ((element.courseTitle).toLowerCase()).includes(value)
    })
    course.empty()
addToList(filtred)
})
// logo on click 
$(document).ready(function() {
  $('.heading').click(function() {
    window.location.href = '../Home/index.html'
  })
})
//
//using this function we'll store our data to display them in another html file
function myfunction(id){
  var store=[]
  each(courses,function(element,i){
    if(element.id===id){
    store.push(element.videos)
    console.log(store)
    }
  })
  var items = JSON.stringify(store)
    
localStorage.setItem('data', items)
window.location.href = '../Courses/display.html'
}