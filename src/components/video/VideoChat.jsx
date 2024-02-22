import React from 'react';
import './VideoChat.css'; // assuming the CSS file is named styles.css and located in the same directory

function VideoChat() {
  return (
    <div className="app-container">
      <div className="left-side">
        <div className="video-call-actions ">
          <button className="video-action-button mic"></button>
          <button className="video-action-button camera"></button>
          <button className="video-action-button endcall">Leave</button>
        </div>
      </div>
      <div className="right-side">
        <button className="btn-close-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-x-circle" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9l-6 6M9 9l6 6"></path>
          </svg>
        </button>
        <div className="chat-container">
          <div className="chat-header">
            <button className="chat-header-button">
              Live Chat
            </button>
          </div>
          <div className="chat-area">
            {/* Message wrappers */}
          </div>
          <div className="chat-typing-area-wrapper">
            <div className="chat-typing-area">
              <input type="text" placeholder="Type your message..." className="chat-input" />
              <button className="send-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoChat;
