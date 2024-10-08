console.log("Before");
//Callback Function
// getUser(1, (user) => {
//   console.log("User", user);
//   getRepositories(user.gitHubUsername, (repos) => {
//     console.log("Repos:", repos);
//   });
//   getCommits(user[1], (commit) => {
//     console.log("Commits:", commit);
//   });
//   singleCommit(user, (singlecommit) => {
//     console.log("Commit:", singlecommit);
//   });
// });
// Consuming the promise //Promise
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[1]))
//   .then((commits) => singleCommit(commits))
//   .then((commit) => console.log("Commit:", commit))
//   .catch((err) => console.log("Error", err.message));
console.log("After");

//Async and Await approach!!
async function showCommit() {
  try {
    const user = await getUser(1);
    console.log(user);

    const repos = await getRepositories(user.gitHubUsername);
    console.log(repos);

    const commits = await getCommits(repos[0]);
    console.log(commits);

    const commit = await singleCommit(commits);
    console.log(commit);
  } catch (error) {
    console.log("Erro", error);
  }
}
//calling the Async & Await Function
showCommit();

// promise sections
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Accessing the DataBase..");
      resolve({ id: id, gitHubUsername: "Anate" });
    }, 2000);
  });
}

function getRepositories(repos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("List of Repositories:");
      resolve(["Repo1", "Repos2", "Repo3"]);
    }, 2000);
  });
}

function getCommits(commits) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("List of Commit:");
      resolve(["Commit1", "commit2", "commit3"]);
    }, 2000);
  });
}
function singleCommit(commit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Commit:");
      resolve(["Commit"]);
    }, 2000);
  });
}
