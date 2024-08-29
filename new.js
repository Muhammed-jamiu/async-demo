//This is called Asyn or non-blocking code
console.log("Before");
//using callback to access the getUser
getUser(1, (user) => {
  //   console.log("User:", user);
});

//Get the repositories
getRepositories("Musa", (repos) => {
  console.log("Repos", repos);
});

//
console.log("After");

//getUser function below

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Working with Database...");
    //Note that here the result is ready,then we are using Callback function to access the getuser in line two(2)
    callback({ id: id, gitHubUsername: "Anate001" });
  }, 2000);

  //   console.log("This is out side the settimeout function.");
  //   console.log(
  //     "Note that the logic in side the settimeout will be called after two second which will be the last to be called with the time asign to it"
  //   );
  //   return;
}
function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Getting Repositories...");

    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

//The three ways to access the getuser function in line three (3) are as follow:
//1. Callback
//2.Promise
//3.Async/await

//Sync or Blocking code
// console.log("Starting");
// console.log("Ending");
