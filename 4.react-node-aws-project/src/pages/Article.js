import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoudPage";
const Article = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    article => article.name !== match.params.name
  );
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};
export default Article;
