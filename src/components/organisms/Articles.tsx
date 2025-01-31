import { useEffect } from "react";
import { fetchArticles } from "src/api/articleApi";
import { useQuery } from "@tanstack/react-query";
import { Article } from "@customTypes/types";
import { useArticles } from "src/hooks/articleQueries";

export const Articles = () => {
  const { data, isLoading, error, isError, createArticle, removeArticle } =
    useArticles();

  return (
    <>
      {data && data.map((article) => <li key={article.id}>{article.text}</li>)}
    </>
  );
};
