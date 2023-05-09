// get timers from command line
const timers = process.argv;
timers.shift();
timers.shift();

//define beep as a scheduled "setTimeOut" output of  "·"
const beep = (time, callback) => {
  setTimeout(() => {
    process.stdout.write("·");
  },time);
};

// list the timers
// console.log(timers);
for (timer of timers) {
  if (timer !== NaN) {
    // console.log("Beep scheduled!")
    if (timer > 0) beep(timer * 1000);   
  }
};