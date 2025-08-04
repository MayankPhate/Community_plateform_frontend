
import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const author = post.authorId?.name || 'Unknown';
  const date = new Date(post.createdAt).toLocaleString();

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{author}</strong>
        <span className="timestamp">{date}</span>
      </div>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
