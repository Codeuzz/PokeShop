import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteArticle, fetchArticles, postArticle } from "src/api/articleApi";

export const useArticles = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  const createArticle = useMutation({
    mutationFn: postArticle,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["articles"] }),
  });

  const removeArticle = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["articles"] }),
  });

  return { data, isLoading, error, isError, createArticle, removeArticle };
};
