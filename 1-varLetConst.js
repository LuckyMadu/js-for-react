// var -> function
// let -> block
// const -> block , but cannot modify

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();
