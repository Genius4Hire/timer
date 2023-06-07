// get timers from command line
const timers = process.argv;
timers.shift();
timers.shift();

//define beep as a scheduled "setTimeOut" output of  "·"
const beep = (time) => {
  // schedule a 'beep'...
  setTimeout(() => {
    process.stdout.write("·");
  },time); // ..in 'time' milliseconds
};

// for each timer defined in the command line...
for (timer of timers) {
  // ..and, making sure the timer is a proper number..
  if (timer !== NaN) {
    // schedule that beep for the number of seconds defined in this particular timer
    if (timer > 0) beep(timer * 1000);   
  }
};