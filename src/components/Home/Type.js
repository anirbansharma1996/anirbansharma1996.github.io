import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "⮞ Studied Literature...",
          "⮞ Fullstack Web Developer...",
          "⮞ Cartoon Artist...",
          "⮞ e-Sport Enthusiast.."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 95,
      }}
    />
  );
}

export default Type;
