function funcThree() {
  console.log("three"); // runs this and then will get popped from the call stack
}

function funcTwo() {
  funcThree(); // after funcOne comes here and goes to funcThree
  console.log("two"); // after log of functhree and popped this will run and get popped
}

function funcOne() {
  funcTwo(); //then this runs goes to funcTwo
  console.log("one"); // after functwo log and pop, this will also log, and then pop
}

funcOne(); //first this runs
