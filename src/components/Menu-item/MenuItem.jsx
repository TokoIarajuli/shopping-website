import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu_item`}>
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

export default MenuItem;
