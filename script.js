// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
console.log('PART 1', '\n');
var radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
console.log(`This area is ${area}`);
// Each plant requires a minimum space of 0.8 square meters.
var requiredArea = 0.8;
// var plantNumber = area / requiredArea;
// console.log(plantNumber);

// The area is starting with 20 plants.
var plantNumber = 20;
// The plants double in number every week.
const growthRate = 2;

// Predict the plant growth after a specific number of weeks.
var week = 1;
console.log(`weeks grown ${week}`);
var plantGrowthWeek1 = plantNumber * growthRate * week;
var areaWeek1 = plantGrowthWeek1 * 0.8;
console.log(`${plantGrowthWeek1} planted with area of ${areaWeek1} square meters during week 1.`);

// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater
// than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum
// capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less
// than 50% of the maximum capacity of the garden.

if (plantGrowthWeek1 > area * 0.8) {
    console.log('plants to prune! ☠️')
} else if (plantGrowthWeek1 > area * 0.5 && plantGrowthWeek1 < area * 0.8) {
    console.log('plants to monitor!🤓')
} else {
    console.log('plant more!🌴')
}

var week = 2;
console.log(`weeks grown ${week}`);
var plantGrowthWeek2 = plantNumber * growthRate * week;
var areaWeek2 = plantGrowthWeek2 * 0.8;
console.log(`${plantGrowthWeek2} planted with area of ${areaWeek2} square meters during week 2.`);

if (plantGrowthWeek2 > area * 0.8) {
    console.log('plants to prune! ☠️')
} else if (plantGrowthWeek2 > area * 0.5 && plantGrowthWeek2 < area * 0.8) {
    console.log('plants to monitor!🤓')
} else {
    console.log('plant more!🌴')
}

var week = 3;
console.log(`weeks grown ${week}`);
var plantNumber = plantNumber * growthRate * week;
var areaWeek3 = plantNumber * 0.8;
console.log(`${plantNumber} planted with area of ${areaWeek3} square meters during week 3.`);

if (plantNumber > area * 0.8) {
    console.log('plants to prune! ☠️', '\n', '\n', '\n')
} else if (plantNumber > area * 0.5 && plantNumber < area * 0.8) {
    console.log('plants to monitor!🤓', '\n', '\n', '\n')
} else {
    console.log('plant more!🌴', '\n', '\n', '\n');
}

//part 2
// The amount of additional space that would be required if the scientists were to start with 100
// plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
console.log('PART 2');
var plantNumber = 100;
week = 10;
console.log(`if started with ${plantNumber} number of trees in week 1`);
var plantGrowthWeek10 = plantNumber * growthRate * week;
requiredAreaFor100 = plantGrowthWeek10 * requiredArea;
console.log(`required area for ${plantGrowthWeek10} trees is ${requiredAreaFor100} square meters for ${week} weeks`);
const radiusFor100 = Math.sqrt(requiredAreaFor100 / PI).toFixed();
console.log(`with the radius of ${radiusFor100}`, '\n', '\n', '\n');

// The scientists decided not to listen to your recommendations, and have instead started with 100
// plants in the original 5-meter-radius garden
console.log('PART 3');
try {
    if (area * 0.8 > plantNumber) {
        console.log('plant more!🌴', '\n', '\n', '\n');
        // console.log('plants to prune! ☠️','\n','\n','\n')
    } else if (plantNumber > area * 0.8) {
        throw "Number of Plants Exceeds the space available"
    }
} catch (error) {
    console.log(error)
}