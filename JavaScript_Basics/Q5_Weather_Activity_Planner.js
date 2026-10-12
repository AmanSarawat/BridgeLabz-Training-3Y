let temperature = 12;
let isRaining = false;
let windSpeed = 25;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature > 35 || (temperature < 15 && windSpeed > 20)) {
    console.log("Stay home and take care.");
} else {
    console.log("Perfect day for a walk.");
}