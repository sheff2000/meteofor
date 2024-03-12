import config from "../config";

const API_KEY = config.book_api;

const searchBooks = async (query) => {
    if (!query.trim()) return [];
  
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10${API_KEY ? `&key=${API_KEY}` : ''}`;
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
      return [];
    }
};

const searchBooksByAutor = async (autor) => {
    if (!autor.trim()) return [];
  
    const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(autor)}${API_KEY ? `&key=${API_KEY}` : ''}`;
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
      return [];
    }
};

const ApiBooks = {
    searchBooks,
    searchBooksByAutor,
};

export default ApiBooks;