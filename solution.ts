const formatValue = (
  input: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  } else {
    return undefined;
  }
};

const getLength = (input: string | unknown[]): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  } else if (input instanceof Array) {
    return input.length;
  } else {
    return undefined;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const toReturn: string = `'Name: ${this.name}, Age: ${this.age}'`;
    return toReturn;
  }
}

interface BookWithRating {
  title: string;
  rating: number;
}

const filterByRating = (books: BookWithRating[]): BookWithRating[] => {
  const BooksOverRating4 = books.filter((book) => book.rating >= 4);

  return BooksOverRating4;
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  const activeUser = users.filter((user) => user.isActive === true);

  return activeUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

type ValuesType = number | string;

const getUniqueValues = (
  array1: ValuesType[],
  array2: ValuesType[]
): ValuesType[] => {
  const uniqueSet = new Set([...array1, ...array2]);

  const uniqueValue: ValuesType[] = Array.from(uniqueSet);
  return uniqueValue;
};

