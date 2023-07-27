export interface Book {
  id: string;
  title: string;
  pageCount: number;
  authors: string[];
  categories: string[];
  publisher: string;
  publishedDate: string;
  smallThumbnail: string;
}

export interface DetailBook extends Book {
  rating: number;
  description: string;
  thumbnail: string;
}