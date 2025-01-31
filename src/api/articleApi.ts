import { Article } from "@customTypes/types";
import axios from "axios";

const url = "https://679ba06333d3168463248d7c.mockapi.io/api/posts/articles";

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await axios.get<Article[]>(url);

  return response.data;
};

export const postArticle = async (article: Article) => {
  const response = await axios.post<Article>(url, article);

  return response.data;
};

export const deleteArticle = async (articleId: string) => {
  const response = await axios.delete<Article>(`${url}/${articleId}`);

  return response.data;
};
