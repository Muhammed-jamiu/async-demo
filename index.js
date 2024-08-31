console.log("Before");
getUser(1)
  .then((username) => getRepositories(username))
  .then((repos) => singleRepo(repos))
  .then((commit) => displayRepo(console.log("commit", commit)))
  .catch((err) => console.log("Error", err.message));
console.log("After");

function users(user) {
  getRepositories(user.gitHubUsername, displayRepos);
  console.log("User", user);
}

//replacing the {callback} with {promise}

function displayRepos(repos) {
  singleRepo(repos.repo, displayRepo);
  console.log("Repos", repos);
}

function displayRepo(commit) {
  console.log("Commit", commit);
}

// replacing the {callback} with {promise}
function getUser(id) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Working with Database...");
      resolve({ id: id, gitHubUsername: "Anate001" });
    }, 2000);
  });
  return;
}
// replacing the {callback} with {promise}
function getRepositories(username) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Repositories...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
  return;
}
// replacing the {callback} with {promise}
function singleRepo(repo) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting a single repo...");
      resolve(["repo1"]);
    }, 2000);
  });
  return;
}

//promise section takes two props {Fulfilled:ok, Rejected:fail}
