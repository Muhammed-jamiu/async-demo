//Here we are dealing with calling mulitple API e.g {Facebook, whatsapp}

const Facebook = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Parallel-api-promise");
    resolve({ name: "Musa", gender: "Male", Age: 28 });
  }, 2000);
});
Facebook.then((result) => console.log(result));
