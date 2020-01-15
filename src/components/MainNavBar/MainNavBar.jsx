import React from 'react';
import "./MainNavBar.scss";

export const MainNavBar = () => {
  return (

    <div className="nav-bar-wrapper">
      <div className="MainNavBar">
        <div className="nav-icon-wrappers">
          <div className="nav-icons home-icon">
          </div>
          <p className="nav-icons-texts">Home</p>
        </div>

        <div className="nav-icon-wrappers">
          <div className="nav-icons chat-icon">
          </div>
          <p className="nav-icons-texts">Chats</p>
        </div>

        <div className="nav-icon-wrappers">
          <div className="nav-icons friends-icon">
          </div>
          <p className="nav-icons-texts">Friends</p>
        </div>

        <div className="nav-icon-wrappers">
          <div className="nav-icons logout-icon">
          </div>
          <p className="nav-icons-texts">Log Out</p>
        </div>
      </div>
    </div>
  );
};