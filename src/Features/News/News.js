import { getRequest } from '../../Services/RequestService.js';

const NEWS_URL = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=f204d15a0d7345edbf35410baa22a349';

export const getNews = async () => getRequest(NEWS_URL);

