/*import { parse } from "path/posix";*/ 

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum = a+b;
    //let string = '%d + %d = %d', a, b, sum;
    return(a + " + " + b + " = " + sum);
    //return sum.toString();
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const increasing_array = [];
    if(startNumber >= endNumber){
        return increasing_array;
    }
    let i = 0;
    let n = endNumber - startNumber;
    while( i <= n){
        increasing_array[i] = i + startNumber;
        i++;
    }
    return increasing_array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    if(numbers.length == 0){
        return;             /*idk if this is what I should do in this case or if it even works*/
    }
    let mini = numbers[0];
    let maxi = numbers[0];
    let i = 1;
    while(i < numbers.length){
        if(numbers[i] < mini){
            mini = numbers[i];
        }
        if(numbers[i] > maxi){
            maxi = numbers[i];
        }
        i++;
    }
    /*need to figure out how to turn mini and maxi into strings*/
    let minim = parseInt(mini);
    let maxim = parseInt(maxi);
    return {max:maxim, min:minim};
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array){
    const count_array = {};
    let i = 0; /*iterate through the original array*/
    let n = 0; /*iterate throu
    /*iterate through the array. If the element is not in the county array, add a key and assign the key 1 as it shows
    up once. If it is already in the county array, add 1 to it's value*/
    while(i < array.length){
        /*if (!(array[i] in Object.keys(count_array))){ /*test if you can call .keys this easily*/
        if(!(count_array.hasOwnProperty(array[i]))){
            count_array[array[i]] = parseInt(1); /*not sure if I need to make array[i] a string or not*//* I think this syntax works*/
           /* parseInt(count_array[array[i]]);*/
            /*n++;*/
        }
        else{
            count_array[array[i]] = count_array[array[i]] + 1; /*not sure about this syntax compared to ++*/
        }
        i++;
    }
    return count_array;
}

/*tests */
console.log(sumToString(3,4));
console.log(sumToString(0,19));
/*
console.log(getIncreasingArray(3,8));
console.log(getIncreasingArray(0,6));

console.log(maxAndMin([1,2,3,4,5,6,7]));
console.log(maxAndMin([33,2,47,17,18,14,0]));

console.log(countArray([0,3,2,0,0,2]));
console.log(countArray([])); /*this works the rest are resultin in empty items*/
//console.log(countArray([55,2,55,0,1,1,1,1,55,1]));

/*{ '13': 2, '14': 2, '16': 3, '17': 1, '18': 1, '21': 1 }%0AActual:%0A
[ <13 empty items>, 2, 2, <1 empty item>, 3, 1, 1, <2 empty items>, 1 ]*/

