import {variance} from "./data/stats_helpers.js";
import {maxAndMin} from "../mild/mild_1.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let i = 0;
    let sum = 0;
    while(i < array.length){
        sum += array[i];
        i++;
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let median = 0;
    let middle = 0;
    /*array.sort(function (a, b) {
        return a.value - b.value; /*check if this works
    });*/
    let n = 0;
    let placeholder = 0;
    while(n < array.length){
        let i = 0;
        while(i < array.length){
            if(array[i] > array[i+ 1]){
                placeholder = array[i];
                array[i] = array[i + 1];
                array[i + 1] = placeholder;
            }
            i++;
        }
        n++;
    }

    if(array.length % 2 == 0){ /*the length is even*/
        middle = parseInt(array.length / 2);
        median = (array[middle] + array[middle + 1])/2;
    }
    else{ /*the length is odd*/
        middle = parseInt((array.length / 2) - 0.5);
        median = array[middle];
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let stats = {};
    stats.length = parseInt(array.length);
    stats.sum = parseInt(getSum(array));
    stats.mean = stats.sum / stats.length;;
    stats.median = getMedian(array);
    let maxmin = maxAndMin(array);
    stats.min = maxmin.min;
    stats.max = maxmin.max;
    stats.variance = variance(array, stats.mean);
    /*the rest of this is calculating the standard deviation*/
    let squared_deviance = [];
    let i = 0;
    while( i < array.length){
        squared_deviance[i] = Math.pow((array[i] - stats.mean), 2);
        i++
    }
    let mean_deviance = getSum(squared_deviance) / array.length;
    stats.standard_deviation = Math.sqrt(mean_deviance);
    return stats;
}

/*tests
console.log(getSum([5, 12, 33, 1]));
console.log(getMedian([5, 12, 33, 1]));
console.log(getMedian([4, 2, 5, 9, 7, 3, 2]));
console.log(getStatistics([5, 12, 33, 1]));*/

