function sayHellow<T extends { name: string; age: number }>(person: T) {
  console.log(person.name, person.age);
}

class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}
const queue = new Queue<number>();
queue.push(0);
queue.push("1");
