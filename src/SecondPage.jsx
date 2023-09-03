  // SecondPage.jsx
  import React from 'react';
  import { Outlet } from 'react-router-dom';
  import Navbar from './Navbar.jsx';
  import './styles/SecondPage.css'; // Import the CSS file

  const SecondPage = () => {
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



          
          {/* Content area */}
          <div className="comment-section">
          {/* Text input for posting comments */}
            <div className="post-comment">
              <input type="text" placeholder="What's on your mind?" />
              <button className="post-button">Post</button>
            </div>




            
          {/* List of posted comments */}
          <div className="comment-list">
            {/* Individual comments */}
            {/* Include upvote, downvote, comment, and share buttons for each comment */}
            <div className="comment">
              <div className="comment-content">
                {/* Display the comment text here */}
                1: Query by a user.
                  </div>
                    <div className="comment-buttons">
                      <button className="upvote">Upvote</button>
                      <button className="downvote">Downvote</button>
                      <button className="comment">Comment</button>
                      <button className="share">Share</button>
                    </div>
                  </div>

            
                {/* Repeat the above structure for multiple comments */}


            
              </div>
            </div>
          <Outlet /> {/* This renders child routes */}
          </div>
        </div>
    );
  };

  export default SecondPage;
