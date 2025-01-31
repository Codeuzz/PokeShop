import { useParams, useNavigate } from "react-router-dom";
import { useArticle } from "src/hooks/articleQueries";

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useArticle(id || "");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  if (!data) {
    return <p>Article not found</p>;
  }

  return (
    <div className="bg-purple-700 text-white py-4 px-10 m-20 rounded-2xl flex flex-col items-center gap-10 shadow-2xl shadow-black">
      <h2 className="text-3xl font-bold">{data.title}</h2>
      <div className="flex flex-col items-center p-6 mx-20 gap-7 border-2 border-white rounded-2xl">
        <p>{data.text}</p>
      </div>
      <p className="italic">Written By {data.name}</p>
      <button
        className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};
