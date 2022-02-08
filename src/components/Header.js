import React from "react";

export default function Header() {
  return (
    <header>
      <img
        className="header--logo"
        src="../images/troll-face.png"
        alt="troll face"
      />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--subtitle">React Course - Project 3</h3>
    </header>
  );
}
