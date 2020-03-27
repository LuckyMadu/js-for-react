const person = {
  name: "Lahiru",
  walk() {},
  talk() {}
};

person.talk();

const targetName = "name";
person[targetName] = "Madu";

console.log(person.name);
