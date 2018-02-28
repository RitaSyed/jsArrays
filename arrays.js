console.log("hello")

// challange #1

// var test1 = "cat";
// var test1 = "racecar";
var test1 = "bear";
// var test1 = "mom";
var splitTest1 = test1.split("").reverse().join("");
// console.log(splitTest1.join(""));
if (test1 == splitTest1){
  console.log(test1, true);
} else {
  console.log(test1, false);
}

// teachers key challange #1


var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');
for(var i=0; i<animals.length; i++){
  // console.log("animals", animals[i]);
  animalzElement.innerHTML += "<h5>" + animals[i] + "</h5>";
}

// challange #2

var book = "Catch 22";
var bookSplit = book.split("");
var realNumz = []; 
for(var j=0; j<bookSplit.length; j++){
      if(bookSplit[j]*1){
        realNumz.push(bookSplit[j]);
      }
  }
 console.log("answer", realNumz.join(""));
