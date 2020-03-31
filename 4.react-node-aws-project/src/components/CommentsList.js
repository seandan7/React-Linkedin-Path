import React from "react";

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments: </h3>
    {comments.map((comment, i) => (
      <div key={i}>
        <p>{comment.text}</p>
        <h4>{comment.username}</h4>
      </div>
    ))}
  </>
);
export default CommentsList;
