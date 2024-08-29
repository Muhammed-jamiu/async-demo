console.log("Before");
getUser(1, users);

console.log("After");

function users(user) {
  getRepositories(user.gitHubUsername, displayRepos);
  console.log("User", user);
}

function displayRepos(repos) {
  singleRepo(repos.repo, displayRepo);
  console.log("Repos", repos);
}

function displayRepo(commit) {
  console.log("Commit", commit);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Working with Database...");
    callback({ id: id, gitHubUsername: "Anate001" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Getting Repositories...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function singleRepo(repo, callback) {
  setTimeout(() => {
    console.log("getting a single repo...");

    callback(["repo1"]);
  }, 2000);
}

//promise section takes two props {Fulfilled:ok, Rejected:fail}
