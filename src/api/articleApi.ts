import { Article } from "@customTypes/types";
import axios from "axios";

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await axios.get<Article[]>(
    `https://679ba06333d3168463248d7c.mockapi.io/api/posts/articles`,
    {
      params: { limit: 5 },
    }
  );

  return response.data;
};

export const postArticle = async (article: Article) => {
  const response = await axios.post<Article>(
    `https://679ba06333d3168463248d7c.mockapi.io/api/posts/articles`,
    article
  );

  return response.data;
};
