const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

//Arrow funcs dont rebind this keyword, just inherit the context

person.talk();
