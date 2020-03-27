const person = {
  name: "Lahiru",
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk;
//walk();
