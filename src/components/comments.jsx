import React from "react";

const commentDetail = ({ author, timeAgo, content }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date"> {timeAgo}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

export default commentDetail;
