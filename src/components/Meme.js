import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArr = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNumber];
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  return (
    <section className="meme--form_section">
      <div className="meme--form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      {meme.randomImage && (
        <img className="meme--img" src={meme.randomImage} alt="meme template" />
      )}
    </section>
  );
}
