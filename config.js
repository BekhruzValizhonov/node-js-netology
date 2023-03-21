import { v4 } from "uuid";

class User {
  constructor(email = "", id = v4()) {
    this.email = email;
    this.id = id;
  }
}

class Book {
  constructor(
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = "",
    id = v4()
  ) {
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.id = id;
  }
}

export { User, Book };
