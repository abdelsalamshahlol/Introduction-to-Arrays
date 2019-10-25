# Introduction-to-Arrays
Week 1 - Introduction to Arrays

### Basic Requirments

1.Using the array: ['cat', 'fox', 'dog', 'monkey'], what is the index of:

 'dog'? 
 'monkey'? 
 'cat'?

2.Fix the syntax/style in the following arrays:

```
 [ 1, 3 4 7,9, ] 
 'the''quick''brown','fox' 'jumped','over' the lazy, 'dog',  ] 
 [true false,true
```

3.Create arrays in the global scope of your main.js file consisting of strings that represent:

 Your favorite TV shows/movies 
 Names of people you know/care about 
 Favorite sports/activities

4.Using the arrays that you created in the last exercise, use the console to access:

 First elements, 
 Last elements, 
 Other elements!

5.Write a function first that takes an array as an argument and returns the first element in that array.

6.Write a function last that takes an array as an argument and returns the last element in the array. Hint: What is the relationship between the index of the last element in the array and the length of the array?

7.Using the console, push and unshift, make this array contain the numbers from zero through seven:

```
 var arr = [2, 3, 4]; 
 // your code here 
 arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
```

8.What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:

```
 var arr = [5, 7, 9]; 
 arr.push(6); // => ???
```

Were you correct? What is the returned by push? Does unshift work in the same way?

9.We can use the assignment operator (=) to replace elements in arrays with other ones like so:

```
 var animals = ['dog', 'elephant', 'zebra'] 
 // let's replace 'dog' with 'hippo' 
 animals[0] = 'hippo'; 
 animals; // => ['hippo', 'elephant', 'zebra'] 
 Using the same principle, perform the following: 
 // 1. Change all odd numbers to be those numbers multiplied by two: 
 var numbers = [4, 9, 7, 2, 1, 8]; 
 // TODO: your code here 
 numbers; // => [4, 18, 14, 2, 2, 8] 
 // 2. Fix the typos by replacing each element with a correctly spelled version 
 var places = ['snfranisco', 'oacklannd', 'santacrus'] 
 // TODO: your code here 
 places; // => ['san francisco', 'oakland', 'santa cruz']
```

### More Practice

1.Write a function called nth that accepts an array and an index as parameters, and returns the element at that index.

```
 function nth(array, index) { 
 // TODO: your code here 
 } 
 var animals = ['dog', 'cat', 'gerbil']; 
 nth(animals, 2); // => 'gerbil' 
 nth(animals, 1) === animals[1]; // => true
```

2.Write a function rest that returns all the elements in the array except for the first one. HINT: Read about the slice method on MDN and/or experiment with slice at the console like so:

```
 var numbers = [3, 2, 7, 5]; 
 numbers.slice(0); 
 numbers.slice(1); 
 numbers.slice(2); 
 numbers.slice(0, 2);
```

3.Write a function butlast that returns all of the elements in the array except for the last one (you may want to use slice for this one as well).

4.Complete the function cons that accepts an element and an array, and returns an array with the element added to the front of the array:

```
 function cons(x, array) { 
 // your code here 
 }
```

5.Complete the function conj that accepts an array and an element, and returns an array with the element added to the end of the array:

```
 function conj(array, x) { 
 // your code here 
 }
```

6.What benefit(s) might there be to using functions like cons or conj over unshift or push?

7.Try the following in a console:

```
 var arr = []; 
 arr[7] = 'Hello.' 
 arr; // => ???
```

What is the value of arr after assigning an element to its seventh index? Explain the result in English.

### Advanced

1.Without running the below function, use a whiteboard to figure out what it should return by repeatedly expanding function invocations:

```
 function mystery(array) { 
       if (array.length === 0) { 
       return []; 
 } 
 return conj(mystery(rest(array)), first(array)); 
 }
```

2.Using first, rest, conj and/or cons, write functions that accomplish the following:

       sum all the elements of an array 
       Given an array, returns a new array with each element squared 
       Given an array of numbers, returns a new array of just the even numbers 
 HINT: After figuring out how the mystery function works above, use it as a reference for how to write this type of function.