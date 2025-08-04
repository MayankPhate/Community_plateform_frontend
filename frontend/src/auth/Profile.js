
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import API from '../services/api';
import PostCard from '../components/PostCard';
import './Auth.css';

const Profile = () => {
  const { user } = useAuth();
  const [ownPosts, setOwnPosts] = useState([]);

  useEffect(() => {
    if (user) {
      API.get(`/posts/user/${user._id}`)
        .then(res => {
          setOwnPosts(res.data.posts);
        })
        .catch(err => {
          console.error('❌ Failed to load user posts:', err);
        });
    }
  }, [user]);

  if (!user) return <p>Please log in to view your profile</p>;

  return (
    <div className="auth-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
      <h3>Your Posts</h3>
      {ownPosts.length === 0
        ? <p>No posts yet.</p>
        : ownPosts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
};

export default Profile;
