//Here we are dealing with calling mulitple API e.g {Facebook, whatsapp}

const Facebook = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Accessing Facebook API...");
    resolve(["FACEBOOK....API..."]);
  }, 2000);
});
// Facebook.then((result) => console.log(result));

const whatsapp = new Promise((resolve, reject) => {
  console.log("Accessing Whatsapp... API...");

  resolve(["WHATSAPP....API..."]);
  // reject(new Error("Because something failed"));
});

// whatsapp.then((result) => console.log(result));

Promise.race([Facebook, whatsapp])
  .then((result) => console.log("The results:", result))
  .catch((error) => console.log("Error:", error.message));
