// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, "a", ...second, "b"];
// const clone = [...first];

// console.log(combined);
// console.log(clone);

const first = { name: "Lahiru" };
const second = { city: "Horana" };

const combined = { ...first, ...second, country: "SriLanka" };

console.log(combined);

const clone = first;
console.log(clone);
