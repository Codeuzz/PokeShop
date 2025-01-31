import { useState } from "react";
import { useArticles } from "src/hooks/articleQueries";
import { Article } from "@customTypes/types";

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
    createArticle.mutate(article);
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 mt-10 p-20">
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
          onChange={(e) => setNewArticleTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your content here.."
          onChange={(e) => setNewArticleText(e.target.value)}
        />
        <input
          placeholder="Written by.."
          onChange={(e) => setNewArticleAuthor(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
      <div className="flex gap-4 max-w-full flex-wrap justify-center">
        {data &&
          data.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-3 items-center justify-between p-4 border-4 rounded-2xl border-black w-80"
            >
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-lg">{article.text}</p>
              </div>

              <button
                className="bg-amber-400 px-4 py-1 rounded-xl hover:bg-amber-500 "
                onClick={() => removeArticle.mutate(article.id)}
                title="Remove From Cart"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
