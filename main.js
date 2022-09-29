let raceNumber = Math.floor(Math.random() * 1000);

var runnerEarly = true;

var runnerAge = 30;

if (runnerAge >= 18 && runnerEarly === true) {
    (raceNumber += 1000);
}
if (runnerAge >= 18 && runnerEarly === true) {
    console.log(`Runner ${raceNumber}, you will be racing at 9:30 am.`);
} else if (runnerAge >= 18 && runnerEarly !== true) {
    console.log(`Runner ${raceNumber}, your race will be at 11:00 am.`);
} else {
    console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}
