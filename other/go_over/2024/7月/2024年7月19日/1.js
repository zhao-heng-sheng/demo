let list = [
  {
    id: 1,
    name: "Alice",
    age: 20,
  },
  {
    id: 2,
    name: "Bob",
    age: 18,
  },
  {
    id: 3,
    name: "Cdf",
    age: 19,
  },
]
const result = query(list)
  .where((item) => item.age > 18)
  .sortBy("id")
  .groupBy("name")
  .execute();

console.log(result);
