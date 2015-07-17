//1
var people = [
    { name: 'Chuck', age: 24 },
    { name: 'Frank', age: 44 },
    { name: 'Christina', age: 41 },
    { name: 'Anna', age: 99 },
    { name: 'Jeb', age: 91 }
    ];

function oldestPerson(array) {
    var oldest = people[0];

    for (var i = 0; i < array.length; i++ ) {
        console.log(array[i]['name'], array[i]['age']);
        if (oldest.age < array[i]['age']) {
            oldest = array[i];
        }
    }
    return oldest.name;
}

//2
var string = "This is my string.";
function longestWord(string) {
    var array = string.split(' ');
    var longest = 0;
    var word = 0;
    array.forEach(function(array) {
        if (longest < array.length) {
            longest = array.length;
            word = array;
        }
    });
    return word;
}
console.log(longestWord(string));
