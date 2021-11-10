Started: 2021/10/24
End: 
Course Material: [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/)

---
- [1. Big O](#1-big-o)
  - [1.1. What is Good Code?](#11-what-is-good-code)
  - [1.2. Big O and Scalability](#12-big-o-and-scalability)
  - [1.3. O(n)](#13-on)
  - [1.4. O(1)](#14-o1)
  - [1.5. Exercise: Big O Calculation 1](#15-exercise-big-o-calculation-1)
  - [1.6. Exercise: Big O Calculation 2](#16-exercise-big-o-calculation-2)
  - [1.7. Simplifying Big O](#17-simplifying-big-o)
  - [1.8. Big O Rule 1](#18-big-o-rule-1)
  - [1.9. Big O Rule 2](#19-big-o-rule-2)
  - [1.10. Big O Rule 3](#110-big-o-rule-3)
  - [1.11. O(n^2)](#111-on2)
  - [1.12. Big O Rule 4](#112-big-o-rule-4)
  - [1.13. What does this all mean?](#113-what-does-this-all-mean)
  - [1.14. O(n!)](#114-on)
  - [1.15. 3 Pillars of Progamming](#115-3-pillars-of-progamming)
  - [1.16. Space complexity](#116-space-complexity)
  - [1.17. Exercise: Space complexity](#117-exercise-space-complexity)
  - [1.18. Exercise: Twitter](#118-exercise-twitter)
- [2. How to solve coding problems](#2-how-to-solve-coding-problems)
  - [2.1. What are the companies looking for?](#21-what-are-the-companies-looking-for)
  - [2.2. What we need for coding interviews](#22-what-we-need-for-coding-interviews)
  - [2.3. Exercise Interview Question](#23-exercise-interview-question)
    - [2.3.1. Cheat Sheet](#231-cheat-sheet)
      - [2.3.1.1. Steps to tackle problems](#2311-steps-to-tackle-problems)
      - [2.3.1.2. Good code checklist](#2312-good-code-checklist)
- [3. Data Structure: Introduction](#3-data-structure-introduction)
  - [3.1. What is data structure](#31-what-is-data-structure)
  - [3.2. How computers store data](#32-how-computers-store-data)
  - [3.3. Data structures in different languages](#33-data-structures-in-different-languages)
  - [3.4. Operations on data structure](#34-operations-on-data-structure)
- [4. Data Structure: Array](#4-data-structure-array)
  - [4.1. Arrays Introduction](#41-arrays-introduction)
  - [4.2. Static vs Dynamic arrays](#42-static-vs-dynamic-arrays)
  - [4.3. Implementing an Array](#43-implementing-an-array)
  - [4.4. Strings and Arrays](#44-strings-and-arrays)
  - [4.5. Exercise: Reverse a String](#45-exercise-reverse-a-string)
  - [4.6. Solution: Reverse a String](#46-solution-reverse-a-string)
  - [4.7. Exercise: Merge Sorted Arrays](#47-exercise-merge-sorted-arrays)
  - [4.8. Solution: Merge Sorted Arrays](#48-solution-merge-sorted-arrays)
  - [4.9. Arrays Review](#49-arrays-review)
- [5. Data Structure: Hash Tables](#5-data-structure-hash-tables)
  - [5.1. Hash Tables Introduction](#51-hash-tables-introduction)
  - [5.2. Hash Function](#52-hash-function)
  - [5.3. Hash Collisions](#53-hash-collisions)
  - [5.4. Hash tables in different language](#54-hash-tables-in-different-language)
  - [5.5. Exercise: Implement a hash table](#55-exercise-implement-a-hash-table)
    - [5.5.1. Challenge](#551-challenge)
    - [5.5.2. Solution](#552-solution)
  - [5.6. Keys()](#56-keys)
  - [5.7. Hash tables vs Arrays](#57-hash-tables-vs-arrays)
  - [5.8. Exercise: First Recurring Character](#58-exercise-first-recurring-character)
    - [5.8.1. Challenge](#581-challenge)
    - [5.8.2. Solution](#582-solution)
  - [5.9. Hash Tables Review](#59-hash-tables-review)
---

# 1. Big O
## 1.1. What is Good Code?
1. There are 2 main points for good code
   1. Readable
   2. Scalable
2. Code is similar to recipe which developers gives it to the machine to execute for some output.

## 1.2. Big O and Scalability
1. The duration of the code execution can vary according to hardware such as the CPU and RAM that the computer has. 
2. In most of the cases, especially for programs and apps in production, the app may run on a very different machine that is different from the code we execute on the laptop.
3. Therefore, we have a relatively fair is to count the steps as the complexity and efficency of the code is as Big O notation.
  <img src="./images/27-big_o_complexity_chart.png">

## 1.3. O(n)
1. From the example of finding nemo in an array, the function will iterate through the array which gives a linear time complexity to fufill the request.
2. In this case, we have to iterate through all the items in the list to finish the process. The more the items in the list the more time the function takes to execute. Its big O notation is `O(n)`.
  ```js
  // Javascript
  const nemo = ['nemo'];
  const everyone = ['nemo', 'dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

  const large = new Array(100000).fill('nemo');

  function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'nemo') {
        console.log('Found NEMO!');
      }
    }
  }

  findNemo(large); // O(n) --> Linear Time
  ```

## 1.4. O(1)
1. `O(1)` represents "**constant time**" which means the function only takes a certain amount of time no matter how large the dataset the function deals with.

## 1.5. Exercise: Big O Calculation 1
1. In some cases, variable assignment and reassignment can be counted as part of the complexity.
2. If we count all the steps that the function takes it can be `3 + n + n + n + n`, or `3 + 4n`.
  ```js
  // Javascript
  // What is the Big O of the below function? (Hint, you may want to go line by line)
  function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  // 3 + n + n + n + n
  ```

## 1.6. Exercise: Big O Calculation 2 
1. According to the last example, we can calculate the step and check the complexity of the function.
  ```js
  // Javascript
  function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)

    // 1 + 1 + 1 + n + n + n + n + n + 1
    // 4 + 5n
  }
  ```

## 1.7. Simplifying Big O
1. When calculating Big O, there are 4 main rules to follow
   1. Worst Case
   2. Remove Constants
   3. Different terms for inputs
   4. Drop Non Dominants

## 1.8. Big O Rule 1
1. Worst Case
2. From the last example to find `nemo` in the array, the function has to iterate through all the items in the list though the desired item has been found in the list.
3. In Javascript, we can use `break` keyword in the for loop to stop iteration if the item in found.
4. However, this doesn't really improve the performance of the function, as in the big O notation, it only considers the worst case.
5. For the function, `nemo` can be the very first item or the last item in the array, so the function could either run through the whole list. 

## 1.9. Big O Rule 2
1. Remove Constants
2. In the example below, we have 2 iterations in the function. 
3. In this case, we may ignore variable assignments and small calculations.
4. The main complexity can be `O(1 + n/2 + 100)` which can be simplified as `O(n)`.
  ```js
  // Javascript
  function printFirstItemThenFirstHalfThenSayHi100Times(items) {
      console.log(items[0]); // O(1)

      var middleIndex = Math.floor(items.length / 2); // O(1)
      var index = 0; // O(1)

      while (index < middleIndex) { // O(n/2)
          console.log(items[index]); // O(1)
          index++; // O(1)
      }

      for (var i = 0; i < 100; i++) { // O(100)
          console.log('hi'); // O(1)
      }
  }
  // O(1 + n/2 + 100)
  ```

## 1.10. Big O Rule 3
1. Different terms for inputs
2. Since there are 2 different inputs, we'd count them separately. In the following example, the input can be 2 different arrays and each can have different numbers of items which cause very different output for the case.
  ```js
  // Javascript
  function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
      console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
      console.log(boxes);
    });
  }

  // O(m + n);
  ```

## 1.11. O(n^2)
1. In a nested loop or iteration, we use mutiplication for the complexity.
2. `O(n^2)` is quadratic time.
3. If iterations execute in the same layer, we can simply add on the complexity, while if the iteration is nested, we can multiply the numbers.
  ```js
  // Javascript
  // Log all pairs of array
  const boxes = ['a', 'b', 'c', 'd', 'e'];

  function logAllpairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
      }
    }
  }

  // O(m * n)
  ```

## 1.12. Big O Rule 4
1. Drop Non Dominants
2. When calculating complexity, we only consider the dominant terms. 
3. For example, when we have `n + n^2`, `n` is like a constant in the equation which doesn't affect much as `n^2`. 
  ```js
  // Javascript
  function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) { // O(n)
      console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) { // O(n^2)
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
  }

  // O(n + n^2)

  printAllNumbersThenAllPairSums([1,2,3,4,5])
  ```
## 1.13. What does this all mean?
1. Complexity and big O notation is used to check scalability of the code or funcitons. 
2. For example, Javascript has some array methods such as 
   1. `push` - add item as the last element in an array.
   2. `pop` - remove the last item in an array.
   3. `shift` - remove the first item in an array.
   4. `unshift` - add item as the first element in an array.
3. Data structure + Algorithms = Programs
4. Learning data structure helps improve the efficiency of functions and code as the fundation. 

## 1.14. O(n!)
1. Factorial note `O(n!)`. This means the fucntions use multiple layers of nested loop. 
2. In most of the cases, having this type of complexity means something is wrong with the function or code.

## 1.15. 3 Pillars of Progamming
1. When programming, we may consider some factors
2. Readability
3. Scalability which includes 
   1. Speed - Time complexity
   2. Memory
4. Memory - Space complexity
5. Speed and memory are usually in contrast to each other.
6. A function can either be time efficient, space efficient or balanced in between.

## 1.16. Space complexity
1. Some factors can affect space complexity of a function
2. Variables 
3. Data structures
4. Function call
5. Allocations

## 1.17. Exercise: Space complexity 
1. The space complexity of the following example is `O(1)`.
  ```js
  // Javascript
  function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boo');
    }
  }

  boo(new Array(5)); // O(1)
  ```
2. In the following example, the function returns an array which has a space complexity as `O(n)`.
  ```js
  function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
    }
    return hiArray;
  }

  arrayOfHiNTimes(6)); // O(n)
  // ['hi', 'hi', 'hi', 'hi', 'hi', 'hi',]
  ```

## 1.18. Exercise: Twitter
1. In different programming languages, the way handling space (memory) is different.
2. For example, when we check the `length` property on a string value in Javascript, the language simply respond the number of characters in the string value. 
3. In this case, the space complexity for a string is simply `O(1)`.
4. However, in the other language such as "**C**", the string value is like an array of characters.
5. Therefore, the space complexity vary when using different programming languages.
  ```js
  // Javascript
  // Find 1st, Find Nth...
  const array = [
    {
      tweet: 'hi',
      date: 2012,
    },    
    {
      tweet: 'my',
      date: 2014,
    },    
    {
      tweet: 'teddy',
      date: 2018,
    },
  ]; // space complexity O(n^2)

  array[0]; // O(1)

  array[array.length - 1]; // O(1)
  ```



# 2. How to solve coding problems
## 2.1. What are the companies looking for?
1. 4 main skills are critical for career success
2. Analytic skills
3. Coding skills
4. Technical skills
5. Communication skills

## 2.2. What we need for coding interviews
1. Data structures
   1. Arrays
   2. Stacks
   3. Queues
   4. Linked Lists
   5. Trees
   6. Tries
   7. Graphs
   8. Hash Tables
2. Algorithms
   1. Sorting
   2. Dynamic Programming
   3. BFS + DFS (Searching)
   4. Recursion

## 2.3. Exercise Interview Question
1. We can refer to the [Google interview](https://youtu.be/XKu_SEDAykw) on YouTube.
2. Therefore steps we may follow to tackle questions in an interview.
  ```js
  // Javascript 
  // Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
  //For Example:
  //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
  //should return false.
  //-----------
  //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
  //should return true.

  // 2 parameters - arrays - no size limit
  // return true or false

  function containsCommonItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
      for ( let j=0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false
  }

  //O(a*b)
  //O(1) - Space Complexity

  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'a'];

  function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?

    let map = {};
    for (let i=0; i < arr1.length; i++) {
      if(!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
    // loop through second array and check if item in second array exists on created object. 
    for (let j=0; j < arr2.length; j++) {
      if (map[arr2[j]]) {
        return true;
      }
    }
    return false
  }

  //O(a + b) Time Complexity
  //O(a) Space Complexity

  // containsCommonItem2(array1, array2)

  function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }

  containsCommonItem(array1, array2)
  containsCommonItem2(array1, array2)
  containsCommonItem3(array1, array2)
  ```

### 2.3.1. Cheat Sheet
#### 2.3.1.1. Steps to tackle problems
1. When the interviewer says the question, write down the key points at the top (i.e. sorted
array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things.
Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to
follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand
what you need to code, the better the whiteboard will go. So never start a whiteboard
interview not being sure of how things are going to work out. That is a recipe for disaster.
Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
So think: What can I show in order to show that I can do this and I am better than other
coders. Break things up in Functions (if you can’t remember a method, just make up a function
and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the
input. Assume people are trying to break your code and that Darth Vader is using your
function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
a trick: Comment in the code, the checks that you want to do… write the function, then tell the
interviewer that you would write tests now to make your function fail (but you won't need to
actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask
the interviewer if we can make assumption about the code. Can you make the answer return
an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
different approaches? Is it readable? What would you google to improve? How can
performance be improved? Possibly: Ask the interviewer what was the most interesting
solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also
common that the interviewer asks you extension questions, such as how you would handle the
problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
This is a common follow-up question at Google, where they care a lot about scale. The answer
is usually a divide-and-conquer approach — perform distributed processing of the data and only
read certain chunks of the input from disk into memory, write the output back to disk and
combine them later.

#### 2.3.1.2. Good code checklist
1. It works
2. Good use of data structures
3. Code Re-use/ Do Not Repeat Yourself
4. Modular - makes code more readable, maintainable and testable
5. Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two separate loops are better than 2 nested loops
6. Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may exceed memory of machine



# 3. Data Structure: Introduction
## 3.1. What is data structure
1. Data structure is a collection of values.
2. Each data structure is specialized for its own thing and is a type of container in different form.
3. For example, in daily life, we can use different containers for various purpose, such as waredrob, backpacks, folders, and cabinets which can be very different.
4. There are many types of data structures in each category. However, there are only few which are frequently used. The others are very specific for certain scenarios.

## 3.2. How computers store data
1. Computers use mainly 3 parts, CPU, RAM, and Storage to work.
2. When use code to declare a variable, CPU will make a calculation and store in the RAM and pass and store in the "storage" if it's required for permenant usage.
3. In the RAM, we have multiple "addresses" to store the data. 
4. CPU also has a small memory as "cache" to store most recent data to boost the overall performance.
5. If the data is stored near in the Ram, the faster the computer can manipulate and work on the data.
6. Computers store types of data differently on the RAM. 

## 3.3. Data structures in different languages
1. Each programming language has its own specific data types (primitive types). In most of the cases, the default prmitive types of a programming language have covered most of the use case.

## 3.4. Operations on data structure
1. Insertion - add data to memory
2. Deletion - remove data from memory
3. Traversal - check all the data in memory
4. Searching - find a specific data in memory
5. Sorting - sort and order data in memory
6. Access - read data in memory



# 4. Data Structure: Array
## 4.1. Arrays Introduction
1. In Javascript, we have several array methods to work with and manipulate the array.
2. `push` add an item at the end of the array
3. `pop` remove the last item of the array
4. `unshift` add an item as the first item to an array
5. `splice` add or remove an item at an abritrary position of an array
  ```js
  const strings = ['a', 'b', 'c', 'd'];
  // 4*4 = 16 bytes of storage

  strings[2];

  // push
  strings.push('e'); // O(1)
  console.log(strings); // ['a', 'b', 'c', 'd', 'e']

  // pop
  strings.pop(); // O(1)
  console.log(strings); // ['a', 'b', 'c', 'd']
  strings.pop(); // O(1)
  console.log(strings); // ['a', 'b', 'c']

  // unshift
  strings.unshift('x'); // O(n)
  console.log(strings); // ['x', 'a', 'b', 'c']

  // splice
  strings.splice(2, 0, 'alien'); // O(n)
  console.log(strings); // ['x', 'a', 'alien', 'b', 'c']
  ```

## 4.2. Static vs Dynamic arrays
1. Static arrays has static size or fixed number of items.
2. The main difference is if the language is required to manage memory.
3. When adding or removing items from a dynamic array, the computer will duplicate the current one and relocate the array to other chunk of memory to store the data.

## 4.3. Implementing an Array
1. How to build one
2. How to use it
  ```js
  // Javascript
  class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    get(index) {
      return this.data[index];
    }

    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }

    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }

    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
    }

    shiftItems(index) {
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      // drop the very last item in the array
      delete this.data[this.length - 1];
      this.length--;
    }
  }

  const newArray = new MyArray();
  console.log(newArray); // { length: 0, data: {} }
  console.log(newArray.get(0)); // undefined

  newArray.push('hi');
  console.log(newArray); // { length: 0, data: { 0: 'hi' } }
  newArray.push('you');
  console.log(newArray); // { length: 0, data: { 0: 'hi', 1: 'you' } }
  
  newArray.pop();
  console.log(newArray); // { length: 0, data: { 0: 'hi' } }

  newArray.push('!');
  newArray.push('are');
  newArray.push('nice');

  newArray.delete(1);
  console.log(newArray); // { length: 0, data: { 0: 'hi' } }
  ```

## 4.4. Strings and Arrays
1. Strings are simply array of characters.

## 4.5. Exercise: Reverse a String
## 4.6. Solution: Reverse a String
1. Tentative solutions
  ```js
  // Javascript
  // create a function that reverse a string

  // use for loop
  function reverseString(string) {
    const array = [];
    for (let i = string.length - 1; i >= 0; i--) {
      array.push(string[i]);
    }
    const str = array.join('');
    return str;
  }

  // use reduce method
  function reverseString(string) {
    let length = string.length;
    return string.split('').reduce((str, char, index, arr) => {
      str += arr[length - 1];
      length--;
      return str;
    }, '');
  }

  // use reverse method
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  ```
2. Solution from lecture
  ```js
  // Javascript
  function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
      return 'hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i === 0; i--) {
      backwards.push([str[i]);
    }

    return backwards.join('');
  }

  function reverse2(str) {
    return str.split('').reverse().join('');
  }

  const revser3 = str => str.split('').reverse().join('');

  const revser4 = str => [...str].reverse().join('');
  ```

## 4.7. Exercise: Merge Sorted Arrays
## 4.8. Solution: Merge Sorted Arrays
1. Tentative solutions
  ```js
  // Javascript
  // destructive assign
  const array1 = [0, 3, 4, 31];
  const array2 = [4, 6, 30 ];

  function mergeAndSort() {
    const mergedArray = [...arguments].reduce((list, item) => {
      list = [...list, ...item];
      return list;
    }, []);
    
    return mergedArray.sort((a, b) => a - b);
  };

  mergeAndSort(array1, array2);
  ```
2. Solution from the lecture
  ```js
  // Javascript
  function mergeSortedArray(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // check input
    if (!array1.length) {
      return array2;
    }

    if (!array2.length) {
      return array1;
    }

    while (array1Item || array2Item) {
      // we need to check if array2Item is undefined or it will cause infinite loop
      // as the iteration won't stop when array1Item or array2Item is truthy
      if (!array2Item || array1Item < array2Item) {
        mergeArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        mergeArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
    }

    return mergedArray;
  }

  mregedSortedArray([0, 3, 4, 31], [4, 6, 30 ]);
  ```

## 4.9. Arrays Review
1. Pros
   1. Fast lookups
   2. Fast push/pop
   3. Ordered
2. Cons
   1. Slow inserts
   2. Slow deletes
   3. Fixed size (if using static array)



# 5. Data Structure: Hash Tables
## 5.1. Hash Tables Introduction
1. Hash table (or objects in Javascript or dictionary in Python) is a common data structure in most of the programming languages.
2. An object has a key/value pair which uses a hash function to store the data in the memory.
3. The way that the data stored in the memory is very different to array. 
4. The key is like a pointer to show where the data stored in the memory.

## 5.2. Hash Function
1. A hash function is a function that generate value in a fixed length. 
2. There are many types of hash functions, such as "MD5" and "SHA-1".
3. A hashed data is considered one way data flow. Without the critical information, others can't get the original value before it's hashed.
4. Besides, by using the same algorithm to hash a value, the hashed value will always be the same. The same input given to a hash algorithm will always have the same output.
5. The one way data flow to hash value is called "**idempotent**".
6. The main benefit to use hash table (or object) is that we can access the data by almost instantly.
7. In different context, we'd use different hash functions or algorithms to generate a hashed data. 
8. For example, when we'd like to access the data, we would want the hash can be generated by a `O(1)` function.

## 5.3. Hash Collisions
1. In a hash table, `insert`, `lookup`, `delete`, and `search` are all `O(1)`.
    ```js
    let user = {
      age: 54,
      name: 'Kylie',
      magic: true,
      scream: function() {
        console.log('ahhhhh!');
      }
    }

    user.age // O(1)
    user.spell = 'abra kadabra'; // O(1)
    user.scream(); // O(1)
    ```
2. A main issue on hash tables is that the memory of a computer is limited. 
3. The programming language we use may allocate the memory to allow us store data.
4. However, by chances, the algorithm may allocate the data on the same location in the memory.
5. If the collision happens, the performance will be slowed down.
6. The time complexity of hash table is `O(n/k)` where `k` is the size of the hash table. 
7. We can therefore make the time complexity as `O(n)` by removing the constant..

## 5.4. Hash tables in different language
1. Programming languages handle hash tables differently, while in most of the cases, the keys and values in hash table can be any type of data.
2. In old Javascript, all the data used as keys in objects will be converted to `String` type values.
3. In ES6, we can use `Map` or `Sets` to have different types of data as the key in objects. [Check more info](https://javascript.info/map-set).
   1. A `Map` is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
   2. A `Set` is a special type collection – “set of values” (without keys), where each value may occur only once.
    ```js
    const a = new Map();
    const b = new Sets();
    ```

## 5.5. Exercise: Implement a hash table
### 5.5.1. Challenge
1. Create `set` and `get` method for the following class `HashTable`.
2. `set` takes 2 arguments as `key` and `value`
3. `get` takes 1 argument which is the `key` and return the `value`.
  ```js
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
      // [['grapes', 100000]]
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
  }

  const myHashTable = new HashTable(50); // create a hash table has 50 buckets
  myHashTable._hash('grapes'); // hash 'grapes'
  ```

### 5.5.2. Solution
1. In other programming languages that supports OOP, a class may have a "private" method which can be access in the class itself.
2. However, this "private" method is not available in Javascript, so by convention, we can give an underscore `_` in the name of the method to indicate that the method should be a private one.
3. Note that this is just a conventional naming pattern while it can't stop the code calling the method.
4. In ES2019, we can add a poundsign `#` to the method to delcare a private method.
5. The `_hash` function iterates through the string and return a number between `0` to the size of the bucket we set, such as `50` in this case.
  ```js
  // tentative solution
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      const hash = this._hash(key);
      this.data[hash] = value;
    }

    get(key) {
      const hash = this._hash(key);
      return this.data[hash];
    }
  }

  const hashTable = new HashTable(50);
  hashTable.set('grapes', 500); 
  hashTable.get('grapes'); // 500
  hashTable.get('apple'); // undefined
  ```
6. To prevent collision overwrite data on the structure, we should put an array (or other types of container) to keep adding the data.
  ```js
  // solution from lecture
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      const address = this._hash(key);
      if (!this.data[address]) {
        // this is to prevent collission and cause new data overwrite old data
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }

    get(key) {
      const address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
        // check if the position is an array 'truthy' or undefined 'falsy'
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            // return the value if the key matches
            return currentBucket[i][1];
          }
        }
      }
      return undefined;
    }
  }

  const hashTable = new HashTable(50); // create memory bucket size of 50
  hashTable.set('grapes', 100000); 
  hashTable.set('apple', 54);
  hashTable.get('grapes'); // 100000
  ```

## 5.6. Keys()
1. We can create another method `keys` which iterates through all the keys stored in the hash table.
2. To get the "**keys**" in a hash table, we need to iterate through the whole memory space to check all the keys.
3. In the following example, we have 3 keys with values in a memory space of 50 to retrieve all the data.
4. If we use an array to store 3 items, we can easily get these 3 items.
  ```js
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    set(key, value) {
      const address = this._hash(key);
      if (!this.data[address]) {
        // this is to prevent collission and cause new data overwrite old data
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }

    get(key) {
      const address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
        // check if the position is an array 'truthy' or undefined 'falsy'
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            // return the value if the key matches
            return currentBucket[i][1];
          }
        }
      }
      return undefined;
    }

    keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      }
      return keysArray;
    }
  }
  const hashTable = new HashTable(50); // create memory bucket size of 50
  hashTable.set('grapes', 100000); 
  hashTable.set('apple', 54);
  hashTable.set('orange', 2);
  hashTable.keys();
  ```

## 5.7. Hash tables vs Arrays
1. Arrays
   1. search `O(n)`
   2. lookup `O(1)`
   3. push `O(1)`
   4. insert `O(n)`
   5. delete `O(n)`
2. Hash Tables
   1. search `O(1)`
   2. insert `O(1)`
   3. lookup `O(1)`
   4. delete `O(1)`

## 5.8. Exercise: First Recurring Character
### 5.8.1. Challenge
1. Create a function that return the first duplicate
2. Given an array `[2,5,1,2,3,5,1,2,4]` which returns `2`.
3. Given an array `[2,1,1,2,3,5,1,2,4]` which returns `1`.
4. Given an array `[2,3,4,5]` which returns `undefined`.
  ```js
  // tentative solution
  const arr1 = [2,5,1,2,3,5,1,2,4];
  const arr2 = [2,1,1,2,3,5,1,2,4];
  const arr3 = [2,3,4,5];

  // O(n^2)
  function findFirstDuplicate(arr = []) {
    const parsedNum = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < parsedNum.length; j++) {
        if (parsedNum[j] === arr[i]) {
          return parsedNum[j];
        }
      }
      parsedNum.push(arr[i]);
    }
    return undefined;
  }

  findFirstDuplicate(arr1); // 2
  findFirstDuplicate(arr2); // 1
  findFirstDuplicate(arr3); // undefined

  // O(n)
  function findFirstDuplicate2(arr = []) {
    const parsedNum = {};
    for (let i = 0; i < arr.length; i++) {
      if (parsedNum[arr[i]]) {
        return arr[i];
      }
      parsedNum[arr[i]] = arr[i];
    }
    return undefined;
  }

  findFirstDuplicate2(arr1); // 2
  findFirstDuplicate2(arr2); // 1
  findFirstDuplicate2(arr3); // undefined
  ```

### 5.8.2. Solution
1. We can assume the input is an array of numbers.
2. The tentative solution can have problems when there's falsy values in the given array such as number `0`, `null`, or `undefined`.
  ```js
  // solution from the lecutre
  // naive solution
  // O(n^2)
  function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        // j must be bigger than i or the iteration will consider the number on the same position as duplicate
        if (input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined;
  } // O(n^2)

  firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
  firstRecurringCharacter([2,1,1,2,3,5,1,2,4]);
  firstRecurringCharacter([1]);
  firstRecurringCharacter([1,1]);

  // O(n)
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i];
      } else {
        // we have to be careful with the value that it can be falsy in Javascript and cause a bug
        // the value of the key doesn't matter here but it can be truthy to prevent bug in Javascript IF statement
        map[input[i]] = true;
      }
    }
    return undefined;
  }

  firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);
  ```

## 5.9. Hash Tables Review
1. Pros
   1. Fast lookups (require good collision resolution)
   2. Fast inserts
   3. Flexible Keys
2. Cons
   1. Unordered
   2. Slow key iteration
3. Hash tables (objects) can usually be used to improve time complexity but require more space (memory).
4. Look at the time vs space tradeoff. Sometimes storing extra state in memory can help the time.