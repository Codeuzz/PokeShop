import { useState } from "react";
import { useArticles } from "src/hooks/articleQueries";
import { Article } from "@customTypes/types";
import { ArticleCard } from "@molecules/ArticleCard";
import { Link } from "react-router-dom";

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

  if (isLoading) {
    return (
      <h3 className="m-10 text-center text-5xl font-semibold italic">
        Loading...
      </h3>
    );
  }
  if (isError) {
    console.log(error);
    return (
      <>
        <h3 className="m-10 text-center text-5xl font-semibold italic">
          There was an error fetching the Articles.
        </h3>
        <button className="text-2xl border-2 border-black bg-amber-400 shadow-black shadow-md py-2 px-6 rounded-3xl hover:bg-amber-500 font-semibold">
          <Link to="/PokeShop/">Go Home</Link>
        </button>
      </>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 p-14">
      <h1 className="text-4xl font-bold italic">
        Delete Fake Articles about Pokemon and make New Ones!
      </h1>
      <form
        onSubmit={handleCreation}
        className="flex flex-col gap-3 py-8 rounded-2xl bg-purple-600 w-1/2 items-center shadow-black shadow-md"
      >
        <h3 className="text-3xl text-white font-semibold italic text-center">
          Make Your Own Article !
        </h3>

        <div className="w-3/4 flex flex-col gap-4 p-4 justify-center border-4 border-black rounded-2xl bg-yellow-500 shadow-white shadow-lg">
          <input
            placeholder="Title"
            value={newArticleTitle}
            onChange={(e) => setNewArticleTitle(e.target.value)}
            className="border-2 border-black p-2 rounded-md bg-purple-300 placeholder:text-gray-700"
          />
          <textarea
            className="border-2 border-black p-2 rounded-md bg-purple-300 placeholder:text-gray-700"
            placeholder="Write your content here.."
            rows={5}
            value={newArticleText}
            onChange={(e) => setNewArticleText(e.target.value)}
          />
          <input
            className="border-2 border-black p-2 rounded-md bg-purple-300 placeholder:text-gray-700"
            placeholder="Written by.."
            value={newArticleAuthor}
            onChange={(e) => setNewArticleAuthor(e.target.value)}
          />
        </div>
        <button
          className="text-lg border-2 border-black bg-amber-400 text-black shadow-white shadow-md py-2 px-6 rounded-3xl hover:bg-amber-500"
          type="submit"
        >
          Create Article
        </button>
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
