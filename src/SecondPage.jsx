// SecondPage.jsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './styles/SecondPage.css'; // Import the CSS file

const SecondPage = () => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handlePostComment = () => {
    // Create a new comment object
    const newComment = {
      id: new Date().getTime(), // Generate a unique ID (you can use a library for this)
      text: commentText,
    };

    // Add the new comment to the list of comments
    setComments([...comments, newComment]);

    // Clear the comment text field
    setCommentText('');
  };

  return (
    <div className="second-page">
      <Navbar />

      <div className="container">
        <div className="left-menu">
          <ul>
            <li>Profile</li>
            <li>Notifications</li>
            <li>Settings</li>
            <li>Chat</li>
          </ul>
        </div>

        <div className="comment-section">
          <div className="post-comment">
            <input
              type="text"
              placeholder="What's on your mind?"
              value={commentText}
              onChange={handleCommentTextChange}
            />
            <button className="post-button" onClick={handlePostComment}>
              Post
            </button>
          </div>

          <div className="comment-list">
            {comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <div className="comment-content">{comment.text}</div>
                <div className="comment-buttons">
                  <button className="upvote">Upvote</button>
                  <button className="downvote">Downvote</button>
                  <button className="commentbt">Comment</button>
                  <button className="share">Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SecondPage;
