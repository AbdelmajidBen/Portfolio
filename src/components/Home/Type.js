import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ai and ML Enthusiast",
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Django Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
