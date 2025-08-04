

import React, { useState } from 'react';
import { createPost } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import './PostForm.css';

const PostForm = ({ onPostCreated }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    try {
      const res = await createPost({ content, authorId: user._id });
      setContent('');
      onPostCreated(res.data); // Refresh feed
    } catch (err) {
      alert('Failed to post');
    }
  };

  if (!user) return null;

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;


