type iPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface A {
  name: string;
  age: number;
  sex: string;
}
