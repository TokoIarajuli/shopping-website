import React from "react";

import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu_item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background_image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
