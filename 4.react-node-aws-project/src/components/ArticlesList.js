import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, i) => (
      <Link
        className="article-list-item"
        key={i}
        to={`/article/${article.name}`}
      >
        <h2>{article.title}</h2>
        <p>{article.content[0].substring(0, 155)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
