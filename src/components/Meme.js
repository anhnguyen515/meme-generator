import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

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
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      {meme.randomImage && (
        <div className="meme">
          <img
            className="meme--img"
            src={meme.randomImage}
            alt="meme template"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </section>
  );
}
