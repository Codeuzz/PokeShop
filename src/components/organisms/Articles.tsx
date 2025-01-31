import { useState } from "react";
import { useArticles } from "src/hooks/articleQueries";
import { Article } from "@customTypes/types";
import { ArticleCard } from "@molecules/ArticleCard";

export const Articles = () => {
  const { data, isLoading, error, isError, createArticle, removeArticle } =
    useArticles();
  const [newArticleTitle, setNewArticleTitle] = useState<string>("");
  const [newArticleText, setNewArticleText] = useState<string>("");
  const [newArticleAuthor, setNewArticleAuthor] = useState<string>("");

  const handleCreation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const article: Article = {
      title: newArticleTitle,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      text: newArticleText,
      name: newArticleAuthor,
    };
    createArticle.mutate(article, {
      onSuccess: () => {
        setNewArticleAuthor("");
        setNewArticleText("");
        setNewArticleTitle("");
      },
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 p-14">
      <h1 className="text-4xl font-bold italic">
        Delete Fake Articles about Pokemon and make New Ones!
      </h1>
      <form
        onSubmit={handleCreation}
        className="flex flex-col gap-3 py-4 px-10 border-4 border-purple-700 rounded-2xl bg-yellow-400 w-1/4"
      >
        <h3 className="text-xl font-bold text-center">Make Your Own Article</h3>
        <input
          placeholder="Title"
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your content here.."
          value={newArticleText}
          onChange={(e) => setNewArticleText(e.target.value)}
        />
        <input
          placeholder="Written by.."
          value={newArticleAuthor}
          onChange={(e) => setNewArticleAuthor(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
      <div className="flex flex-col gap-4 w-full flex-wrap justify-center items-center">
        {data &&
          data.map((article) => (
            <ArticleCard
              article={article}
              handleRemove={removeArticle.mutate}
            />
          ))}
      </div>
    </div>
  );
};
