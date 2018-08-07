function doSomething() {
  const d = new Date(Date.now())
  const dayOfTheWeek = d.toLocaleString('en-US', {weekday: "long"})
  console.log("Today is " + dayOfTheWeek)

}

doSomething();
doSomething();


function anotherFunction() {
  console.log("this is another function")
}
anotherFunction();