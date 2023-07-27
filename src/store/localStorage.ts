import { Book } from "./types";

const WISHLIST_KEY = "wishlist";

const addBookToWishlist = (book: Book) => {
  const books = loadWishlist();
  books.push(book);
  return saveWishlist(books);
}

const removeBookFromWishlist = (id: string) => {
  const books = loadWishlist();
  return saveWishlist(books.filter((book: Book) => book.id != id));
}

const loadWishlist = () => {
  const booksItem = localStorage.getItem(WISHLIST_KEY);
  if(!booksItem)  return [];
  return JSON.parse(booksItem);
}

const saveWishlist = (books: Book[]) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(books));
  return books;
}

export default {
  addBookToWishlist,
  removeBookFromWishlist,
  loadWishlist
}