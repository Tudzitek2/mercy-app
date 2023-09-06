// Javascript objects
const family = {
    firstchild: "John",
    secondchild: "Mary",
    lastchild: "Jude"
};
// Javascript objects
const tools = {
    tool1:"screwbar",
    tool2:12
};
// Javascript arrays
const names = ["james", "jordan", "nimi", 12, 78.9];

console.log(family.firstchild);
console.log(tools.tool2);
console.log(names.length);
console.log(names.sort());
console.log(names);

// Accessing the first element in the array
console.log(names[0]);
// Accessing the last element in the array
console.log(names[names.length - 1]);
console.log("\n");

// Looping through the array using a for loop

let i = 0;
let list ="";
for (i=0; i < names.length;i++)
{
    console.log(list = "* " + (names[i]));
}
// Adding elements to the array
names.push("adam");
console.log(names);

names[names.length] = "jin";
console.log(names);

