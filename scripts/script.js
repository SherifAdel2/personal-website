let family = ['Adel', 'Sabah', 'Mai', 'Elsherif'];
//family.forEach((value, index, arr) => (arr[index] += ' Basha'));
let people = family.map((value) => value + ' Basha1');
// console.log(people);
family.forEach((value, index, arr) => (arr[index] = arr[index].toLowerCase()));
family = ['Adel', 'Sabah', 'Mai', 'Elsherif'];
for (let i = 0; i < family.length; i++) family[i] = family[i].toLowerCase();
family.forEach(
  (value, index, arr) =>
    (arr[index] = value.charAt(0).toUpperCase() + value.slice(1))
);
// family.forEach(
//   (value, index, arr) => (arr[index] = { id: index, name: value })
// );
// console.log(family);
people = family.map((value, index) => ({
  id: index,
  name: value,
  age: new Date().getFullYear() - 2000 + index,
}));
people = people.filter((value) => value.age >= 227);
console.log(people);
