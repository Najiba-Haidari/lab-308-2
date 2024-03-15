// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
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

if(plantGrowthWeek1 > area*0.8){
    console.log('plants to prune! ☠️')
}else if(plantGrowthWeek1 > area*0.5 && plantGrowthWeek1 <area*0.8){
    console.log('plants to monitor!🤓')
}else{
    console.log('plant more!🌴')
}

var week = 2;
console.log(`weeks grown ${week}`);
var plantGrowthWeek2 = plantNumber * growthRate * week;
var areaWeek2 = plantGrowthWeek2 * 0.8;
console.log(`${plantGrowthWeek2} planted with area of ${areaWeek2} square meters during week 2.`);

if(plantGrowthWeek2 > area*0.8){
    console.log('plants to prune! ☠️')
}else if(plantGrowthWeek2 > area*0.5 && plantGrowthWeek2 <area*0.8){
    console.log('plants to monitor!🤓')
}else{
    console.log('plant more!🌴')
}

var week = 3;
console.log(`weeks grown ${week}`);
var plantGrowthWeek3 = plantNumber * growthRate * week;
var areaWeek3 = plantGrowthWeek3 * 0.8;
console.log(`${plantGrowthWeek3} planted with area of ${areaWeek3} square meters during week 3.`);

if(plantGrowthWeek3 > area*0.8){
    console.log('plants to prune! ☠️')
}else if(plantGrowthWeek3 > area*0.5 && plantGrowthWeek3 <area*0.8){
    console.log('plants to monitor!🤓')
}else{
    console.log('plant more!🌴')
}

