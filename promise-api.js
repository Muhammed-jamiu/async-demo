// Here we are dealing with promise that is already resolve of rejected examples
const users = [
  { name: "Muhammed-Jamiu", gender: 28, state: "Kogi" },
  { name: "Aka'aba Musa", gender: 28, state: "Kogi" },
  { name: "Momoh Jimoh Hashid", gender: 28, state: "Kogi" },
];

const p = Promise.resolve(users[0].name); // resolve
console.log(p);
p.catch((err) => console.log(err.message));

obj = new Object("HELLO");
console.log(typeof obj);

const prom = Promise.reject(new Error("Pass something here...")).catch(
  console.log("Error:", err.message)
);
