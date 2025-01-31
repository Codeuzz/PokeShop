import { Article } from "@customTypes/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
  handleRemove: (id: string) => void;
}

export const ArticleCard = ({ article, handleRemove }: ArticleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
    navigate(`/PokeShop/articles/${article.id}`);
  };

  return (
    <div
      key={article.id}
      className="flex flex-col gap-3 items-center justify-between p-4 border-4 rounded-2xl border-black w-1/3"
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold break-words">{article.title}</h3>
          <p className="text-lg">
            {isExpanded ? article.text : `${article.text.slice(0, 100)}...`}
          </p>
          {article.text.length > 100 && (
            <button className="text-blue-500" onClick={handleSeeMore}>
              See more
            </button>
          )}
        </div>
        <p className="italic">Written By {article.name}</p>
      </div>

      <button
        className="bg-amber-400 px-4 py-1 rounded-xl hover:bg-amber-500 "
        onClick={() => handleRemove(article.id)}
        title="Remove From Cart"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
