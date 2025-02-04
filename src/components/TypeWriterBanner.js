"use client";

import "../styles/global.css";
import Typewriter from "typewriter-effect";

export default function App() {
  return (
    <div className="App lg:h-1/4">
      <h1 className="text-typo-secondary lg:leading-[220px]">
        <Typewriter
          options={{
            strings: [
              "Teksty",
              "Opowiadania",
              "Eseje",
              "Szkice",
              "Filmy"
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 100,
            cursor: "|",
          }}
        />
      </h1>
    </div>
  );
}
