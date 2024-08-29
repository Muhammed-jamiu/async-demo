// working with promise takes two props {fulfilled:resolve:ok, reject:fail}

const p = new Promise((resolve, reject) => {
  // kick off some async work
  // note if asyn work complete and produce a value we will use resolve to retrun the valve with the resolve keywords e.g resolve(10),if after the async work produce no value we use reject keywords to return value
  setTimeout(() => {
    // resolve(10);//pending =>resolve, fulfilled
    reject(
      new Error("Sorry! There is an error while trying to fetch the userData")
    ); //pending=> rejected
  }, 3000);
});
p.then((value) => console.log("This is the value:", value)).catch((err) =>
  console.log(`Error: ${err.message}`)
);
//note {.then} use for result while {.catch} use in case their is error after the complition of the function
