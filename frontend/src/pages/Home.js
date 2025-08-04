


import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import API from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data.reverse());
    } catch (err) {
      alert('Failed to load posts');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-container">
      <h2>👋 Welcome to Community Plateform!</h2>
      <p className="subtitle">View posts from everyone in the community.</p>

      {user && <PostForm onPostCreated={handleNewPost} />}

      <div>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Home;
