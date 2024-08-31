console.log("Before");
getUser(1, User);
console.log("After");
// Replacing the callback with Named function
//Starting from the innermost one

function User(user) {
  getRepositories(user.gitHubUsername, Repos);
  console.log("Username:", user.gitHubUsername);
}
let Commit = (commit) => {
  console.log("Commit:", commit); // This get a single commit
};

const Commits = (commits) => {
  console.log("Commits:", commits); // This gett all  the list of commits

  singleCommit(commits, Commit);
};

const Repos = (repos) => {
  getCommits(repos, Commits);
  console.log("Repositories:", repos); // This get the list of Repos
};

//using Callback
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Accessing Database....");
    callback({ id: id, gitHubUsername: "Muhammed-Jamiu" });
  }, 2000);
}

function getRepositories(repos, callback) {
  setTimeout(() => {
    // console.log("List of Repositories...");
    callback(["Repo1", "Repo2", "Repo3", "Repo4", "Repo5"]);
  }, 2000);
}

function getCommits(commits, callback) {
  setTimeout(() => {
    // console.log("List of commits:");
    callback(["Commit1", "Commit2", "Commit3", "Commit4", "Commit5"]);
  }, 2000);
}

function singleCommit(commit, callback) {
  setTimeout(() => {
    callback(["Commit1"]);
  }, 2000);
}
