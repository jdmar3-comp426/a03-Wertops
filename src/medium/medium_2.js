import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {


    /* change the following to use map
    let i = 0;
    let year_stats = [];
    let hybrids = 0;
    let sum_city_mpg = 0;
    let sum_hwy_mpg = 0;
    while(i < mpg_data.length){
        year_stats[i] = getStatistics(mpg_data[i].year);
        sum_city_mpg += mpg_data[i].city_mpg;
        sum_hwy_mpg += mpg_data[i].highway_mpg;
        if(mpg_data[i].hybrid){
            hybrids++;
        }
        i++;
    }
    let avg_city_mpg = sum_city_mpg/mpg_data.length;
    let avg_hwy_mpg = sum_hwy_mpg/mpg_data.length;*/
    avgMpg: {city: mpg_data.reduce(function(sum, obj)
    {return sum + obj.city_mpg}, 0)/mpg_data.length,
    highway: mpg_data.reduce(function(sum, obj)
    {return sum + obj.highway_mpg}, 0)/mpg_data.length //don't understand this completely, maybe change to your liking later
    },
   allYearStats: 0,/*getStatistics(mpg_data.reduce(
            (years, obj) => years.push(obj.year), [])),*/
    ratioHybrids: (mpg_data.filter(obj => obj.hybrid == true).length)/mpg_data.length,
        //(sum, obj) => if(obj.hybrid){sum++;},0))/mpg_data.length,
        //change this to actually do ratio, not average
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *first find the hybrids
 * then check the make, and add it if it isn't there
 * then push id onto hybrids if it is there
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: 0/*mpg_data.reduce(
        function(hybrids, obj){
            if(obj.hybrid){ //if a hybrid is found
                if(hybrids.length == 0){ //check when you come back
                    hybrids.push({"make": obj.make, "hybrids": mpg_data.filter(car => car.make == obj.make && car.hybrid)});
                }
                else{ //if there are already items in the hybrids list
                    if(hybrids.find(car => car.make == obj.make) == undefined){ //if this make isn't in the list already. May want to change to array.some
                        hybrids.push({"make": obj.make, "hybrids": mpg_data.filter(car => car.make == obj.make && car.hybrid)});
                    }
                }
            }
        },[])*/,

    avgMpgByYearAndHybrid: 0/*mpg_data.reduce(function(year_data, obj){
        let car_years = mpg_data.reduce(function(years, car){ //making a list of all years
            //if(!(years.includes(car.year))){
            years.push(car.year); //add the year to the list of all years
            //}
        }, [])
        car_years.foreach(year => //for each year that a car is made
            //let year_data[year] = {hybrid: {city: 0, highway: 0}, notHybrid: {city: 0, highway: 0}};
            year_data[year] = mpg_data.reduce(function(yearly_mpg, obj){ //change variables here to match reduce
                yearly_mpg = {hybrid: {city: 0, highway: 0}, notHybrid: {city: 0, highway: 0}};
                if(obj.year == year){ //if car is made in the target year
                    if(obj.hybrid){
                        yearly_mpg.hybrid.city += obj.city_mpg;
                        yearly_mpg.hybrid.highway += obj.highway_mpg;
                    }
                    else{
                        yearly_mpg.notHybrid.city += obj.city_mpg;
                        yearly_mpg.notHybrid.highway += obj.highway_mpg;
                    }
                }
            }, {})
        );
    }, {})*/
};

//tests

//console.log(allCarStats.allYearStats);
//console.log(allCarStats.ratioHybrids);
//console.log(allCarStats.avgMpg);
