//1
var people = [
    { name: 'Chuck', age: 24 },
    { name: 'Frank', age: 44 },
    { name: 'Christina', age: 41 },
    { name: 'Anna', age: 99 },
    { name: 'Jeb', age: 91 }
    ];

function oldestPerson(array) {
  var oldest = array[0];
  for (var i = 0; i < array.length; i++ ) {
    console.log(array[i]['name'], array[i]['age']);
    if (oldest.age < array[i]['age']) {
      oldest = array[i];
    }
  }
  return oldest.name;
}

//2
function longestWord(string) {
  var array = string.split(' ');
  var start = array[0].length;
  var longest = null;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > start) {
      start = array[i].length;
      longest = array[i];
    }
  }
  return longest;
}

//3

//4
function factorial(number) {
  if (number < 2) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
