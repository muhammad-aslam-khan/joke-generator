import generateJoke from "./generateJoke.js";
import "./styles.css";

import laughEmoji from "./assets/laughing-emoji.svg";

const jokeBtn = document.getElementById("jokeBtn");
const laughImg = document.getElementById("laughImg");
laughImg.src = laughEmoji;

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
