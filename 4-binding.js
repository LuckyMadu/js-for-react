const person = {
  name: "Lahiru",
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk.bind(person);
walk();

//In JS, every func is an object
