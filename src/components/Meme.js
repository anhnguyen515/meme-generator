import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [imgURL, setImgURL] = useState("");

  function handleClick() {
    const memesArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNumber];
    setImgURL(url);
  }

  return (
    <section className="meme--form_section">
      <div className="meme--form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button onClick={handleClick}>Get a new meme image</button>
      </div>
      <img className="meme--img" src={imgURL} alt="meme template" />
    </section>
  );
}
