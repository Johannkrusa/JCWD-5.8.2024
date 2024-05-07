// query 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}\
function arrayFunction(arr)
{
    var sumArr = 0;
    var tempHighest = 0;
    var tempLowest = 0;

    for (var i = 0; i <= arr.length-1; i++){
            sumArr += arr[i];
            if(i === 0){
                    tempHighest = arr[i];
                    tempLowest = arr[i];
                }
            if(arr[i] > tempHighest){
                    tempHighest = arr[i];
                }
            if(arr[i] < tempLowest){
                    tempLowest = arr[i];
                }
        }
    var average = sumArr / arr.length;

    return {
        highest: tempHighest,
        lowest: tempLowest,
        average: average
    };
}
var arr = [12, 5, 23, 18, 4, 45, 32];

console.log(arrayFunction(arr));

// query 2 
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function myJoinArr(arr)
{
    var tempStr = '';
    for (var i = 0; i <= arr.length-1; i++) {
            tempStr+= arr[i];
            if (i < arr.length - 2){
                    tempStr += ", ";
                }
            else if (i == arr.length - 2){
                    tempStr +=" and "
                }
        }
    return tempStr;
}

var arr = ["apple", "banana", "cherry", "date"];

console.log(myJoinArr(arr));

// query 3
// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

//without split 
function mySplit(str){
    var tempStr = '';
    var tempArr = [];
    for(var i = 0; i <= str.length -1; i++){
            if(str[i] != " "){
                tempStr += str[i];
            }
            else{
                tempArr.push(tempStr);
                tempStr = '';
            }
        }
    tempArr.push(tempStr);
    return tempArr;
}

var str = "nights of nights";

console.log(mySplit(str))

// query 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function arrayAddition(arr1, arr2){
    tempArr = [];
    tempRes = 0;
    for (i = 0; i <= arr1.length-1; i++){
            tempRes = arr1[i] + arr2[i];
            tempArr.push(tempRes);
            tempRes = 0;
        }
    return tempArr;
}

var arr1 = [1,2,3];
var arr2 = [3,2,1];

console.log(arrayAddition(arr1, arr2))

// query 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function arrayAddElement(arr, newElement)
{
    var elementNotFound = true;
    for(var i = 0; i <= arr.length -1; i++){
            if (arr[i] != newElement){
                elementNotFound = false;
            }
            else{
                elementNotFound = true;
            }
        }
    if (!elementNotFound){
            arr.push(newElement);
        }
    return arr;
}

var arr = [1,2,3,4];
var newElement = 7;

console.log(arrayAddElement(arr, newElement))

// query 6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// . Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function filterEvenNumber(numbers){
    var newArr = [];
    for (item of numbers){
            if (item % 2 == 0){
                    newArr.push(item);
                }
        }
    return newArr;
}

var numbers = [1,2,3,4,5,6];

console.log(filterEvenNumber(numbers))

// query 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function maxElements(int, size){
    var newArr = [];
    for (var i = 0; i <= size-1; i++){
            newArr.push(int[i]); 
        }
    return newArr;
}

var integers = [5,10,24,3,6,7,8]
var maxSize = 5;

console.log(maxElements(integers,maxSize))

// query 8
// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combineArray(arr1, arr2){
    for (var i = 0; i<= arr2.length-1; i++){
            arr1.push(arr2[i])
        }   
    return arr1;
}

var arr1 = [1,2,3]
var arr2 = [4,5,6]

console.log(combineArray(arr1, arr2))

// query 9
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function findDuplicate(arr){
    var tempArr = [];
    // finding duplicate numnbers
    for (var i = 0; i <= arr.length-1; i++){
        var count = 0;
        for(var j = 0; j<= arr.length-1; j++){
            if (arr[i] == arr[j]){
                    count++;
                }
        }
        if (count > 1){
            tempArr.push(arr[i]);
        }
    }

    // only print out non duplicates
    var resultArr = [];
    for (var i = 0; i < tempArr.length; i++) {
        var isDuplicate = false;
        for (var j = 0; j < resultArr.length; j++) {
            if (tempArr[i] === resultArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            resultArr.push(tempArr[i]);
        }
    }
    return resultArr;
}
var arr = [1, 2, 2, 2, 3, 3, 4, 5, 5]

console.log(findDuplicate(arr))

// query 10
// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function arrayDifference(arr1, arr2)
{
    var tempArr = [];
    var resArr = [];
    var elementFound = false;
    // find a number that's inside in both array
    for(var i=0; i<= arr1.length-1; i++)  {
        for(var j = 0; j<= arr2.length-1; j++){
            if (arr1[i] == arr2[j]){
                elementFound = true;
                }
            }
            if (elementFound){
                tempArr.push(arr1[i]);
                elementFound = false;
            }
        }
    // combines array 1 and arary 2
    for(var i = 0; i <= arr2.length-1; i++) {
        arr1.push(arr2[i]);
        }
    // find a difference between the conjoined array and the temp array
    for(var i = 0; i <= arr1.length-1; i++){
        elementFound = false; 
        for(var j = 0; j <= tempArr.length-1; j++){
            if(arr1[i] == tempArr[j]){
                elementFound = true;
                break; 
            }
        }
        if (!elementFound){
            resArr.push(arr1[i]);
        }
    }
    return resArr;
}

var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];

console.log(arrayDifference(arr1, arr2));

// second way
function arrayDifference2(arr1, arr2){
    var tempArr = [];
    var combinedArray = arr1.concat(arr2);
    for(var i = 0; i <= combineArray.length -1; i++){
        var counter = 0;
        for (var j = i+1; j <= combineArray.length -1; j++){
            if (i != j || combineArray[i] == combineArray[j]){
                counter++;
            }
        }
        if (counter != 0){
            tempArr.push(combineArray[i])
        }
    }
    return tempArr;
}

var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7]

console.log("cat");
console.log(arrayDifference(arr1, arr2));

// query 11
// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

function getPrimitiveData(arr) {
    var result = [];
    // comparing data if is "object" will be inserted into the array;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "object" || arr[i] == null) { 
            result.push(arr[i]);
        }
    }
    return result;
}

var arr = [1, [], undefined, {}, "string", {}, []];

console.log(getPrimitiveData(arr));

// query 12
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function secondSmallest(numbers) {
    let smallest = 0;
    let secondSmallest = 0;

    for (let i = 0; i < numbers.length; i++) {
        // initiate the smallest number as the first index
        if (i == 0){
            smallest = numbers[i]
        }

        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
            secondSmallest = numbers[i];
        }
    }

    return secondSmallest;
}

var numbers = [5, 3, 1, 7, 2, 6];

console.log(secondSmallest(numbers)); 

// query 13
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumOfNumber(mixedArray){
    var res = 0;
    // compare if array is a type of "number"
    for(var i = 0; i <= mixedArray.length-1; i++){
        if (typeof(mixedArray[i]) == "number"){
            res+= mixedArray[i];
        }
    }
    return res;
}
mixedArray = ["3", 1, "string", null, false, undefined, 2]

console.log(sumOfNumber(mixedArray));

// query 14
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

function sumOfDuplicates(arr){
    tempArr = [];
    for (var i = 0; i <= arr.length-1; i++){
        var count = 0;
        for(var j = 0; j<= arr.length-1; j++){
            if (arr[i] == arr[j]){
                    count++;
                }
        }
        if (count > 1){
            tempArr.push(arr[i]);
        }
    }
    var result = 0;
    for (var i=0; i <= tempArr.length-1; i++){
        result += tempArr[i];
    }
    return result;
}

arr = [ 10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr));

// query 15
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissors(){
    var playerNum = Math.floor(Math.random() * 3);
    var enemyNum = Math.floor(Math.random() * 3);
    var winner;

    // switch data of math random into string
    function determineChoice(choice){
        switch(choice){
            case 0 : return "rock";
            case 1 : return "paper";
            case 2 : return "scissors";
        }
    }

    player = determineChoice(playerNum)
    enemy = determineChoice(enemyNum)

    // rock paper scissor logic
    if (player === enemy) {
        winner = "It's a tie!";
    } else if (
        (player === "rock" && enemy === "scissors") ||
        (player === "paper" && enemy === "rock") ||
        (player === "scissors" && enemy === "paper")
    ) {
        winner = "Player wins!";
    } else {
        winner = "Enemy wins!";
    }

    return {
        "player" : player,
        "enemy" : enemy,
        "winner" : winner
    }
}

console.log(rockPaperScissors());