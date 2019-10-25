//Basic Requirments

//A -1

var arr = ['cat', 'fox', 'dog', 'monkey'];
// dog 2
// monkey 3
// cat 0

//A-2

[1, 3, 4, 7, 9];
['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the lazy', 'dog'];
[true, false, true];

//A-3

var favShows = ['Supernatural', 'Avengers', 'Game of Thrones'];
var peopleIcareAbt = ['Ahmed', 'Belal', 'Elias'];
var favSports = ['Baseball', 'Hiking', 'Paint ball'];

//A-4

peopleIcareAbt[0];
favSports[2];
favShows[1];

//A-5

function getFirst(arr) {
    return arr[0];
}

//A-6

function getLast(arr) {
    return arr[arr.length - 1];
}

//A-7

var arr = [2, 3, 4];
arr.push(5, 6, 7);
arr.unshift(0, 1);

//A-8 

//yes, 
//push return the new length of the array
//yes ushift returns the same

//A-9

var numbers = [4, 9, 7, 2, 1, 8];
var counter = 0;
while (counter <= numbers.length - 1) {
    if (numbers[counter] % 2 === 1) {
        numbers[counter] *= 2;
    }
    counter++;
}

var places = ['snfranisco', 'oacklannd', 'santacrus'];
var counter = 0;
while (counter <= places.length - 1) {
    if (places[counter] === 'snfranisco') {
        places[counter] = 'san francisco';
    } else if (places[counter] === 'oacklannd') {
        places[counter] = 'oakland';
    } else {
        places[counter] = 'santa cruz';
    }
    counter++;
}

//More Practice

// A-1
function nth(array, index) {
    return array[index];
}

// A-2

//with while loop
function rest(arr) {
    var result = [];
    var i = 1;
    while (i <= arr.length - 1) {
        result.push(arr[i])
        i++;
    }
    return result;
}

//with slice method

function rest2(arr) {
    return arr.slice(1);
}

//A-3

function butlast(arr) {
    return arr.slice(0, arr.length - 1);
}

//A-4

function cons(x, array) {
    array.unshift(x);
    return array;
}

//A-5

function conj(array, x) {
    array.push(x);
    return array;
}

//A-6 
//the function cons and conj return an array while unshift and push return the new length of the array

//A-7

//from index 0 to index 6 its empty with undefined type and the 7 index is 'hello'

/// Advanced

// A-1

// A-2

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return getFirst(arr) + sum(rest(arr))
}

function squared(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return getFirst(arr) * squared(rest(arr))
}

function squared(arr) {
    console.log(arr)
    if (arr.length === 0) {
        return [];
    }
    return conj(rest2(arr), squared(getFirst(arr) * getFirst(arr)))
}
