const giveMeRightNumbers = (value1, value2, maximum) => {
  if (value1 === value2 || value1 <= maximum) {
    console.log('Success!');
  } else {
    console.log('Something wrong!');
  }
}
giveMeRightNumbers(280, 210, 209);

const calls = spy.getCalls();
if (calls.length >= 12) {
    const task3ConsoleCall = calls[11].lastArg;
    console.log(task3ConsoleCall);
} else {
    console.log("Not enough console.log() calls recorded.");
}