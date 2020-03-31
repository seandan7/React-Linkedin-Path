import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoudPage";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

const Article = ({ match }) => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: []
  });
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  // call when loaded
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();

    // 2nd argument is 'watch' values
  }, [name]);
  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    article => article.name !== match.params.name
  );
  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      <p>{articleInfo.upvotes === 1 ? "time" : "times"}</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};
export default Article;
