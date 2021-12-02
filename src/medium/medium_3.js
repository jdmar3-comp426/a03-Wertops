import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque){
    let high_power_cars = [];
    car_data.forEach(function(car){
        if(car.horsepower >= minHorsepower && car.torque >= minTorque){
            high_power_cars.push(car);
        }
    })
    high_power_cars.sort((car_1, car_2) => {
        if(car_1.horsepower < car_2.horsepower){
            return -1;
        }
        if(car_2.horsepower < car_1.horsepower){
            return 1;
        }
        else{
            return 0;
        }
    })
    return high_power_cars;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let cars = [];
    car_data.forEach(function(car){
        if(car.city_mpg >= minCity && car.highway_mpg >= minHighway){
            cars.push(car);
        }
    })
    cars.sort(function(car_1, car_2){
        if(car_1.highway_mpg < car_2.highway_mpg){
            return 1;
        }
        if(car_1.highway_mpg > car_2.highway_mpg){
            return -1;
        }
        else{
            return 0;
        }
    })
    return cars;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let cars = [];
    car_data.forEach((car) => {
            if (car.id.includes(searchTerm)){
                cars.push(car);
            }
        })
    cars.sort(function(car_1, car_2){
        if(car_1.id.indexOf(searchTerm) > car_2.id.indexOf(searchTerm)){
            return 1;
        }
        if(car_1.id.indexOf(searchTerm) < car_2.id.indexOf(searchTerm)){
            return -1;
        }
        else{
            return 0;
        }
    })
    return cars;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years){
    years.sort(function(year1, year2){
        return year1 - year2;
    })
    let cars = [];
    years.forEach(function(year){
        car_data.forEach(function(car){
            if(car.year == year){
                cars.push(car);
            }
        }
    )
    })
    return cars;
}

//tests

//console.log(searchByYear(mpg_data, [2001]));
//console.log(searchName(mpg_data, "fe"));
//console.log(searchMpg(mpg_data, 30, 40));
//console.log(searchHighPower(mpg_data, 25, 25));
