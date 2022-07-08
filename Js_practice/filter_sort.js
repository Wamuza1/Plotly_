var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 2;
});
console.log(larger);


var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
//  sort with arrow function
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge)

// slice method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);