"use strict";

const refs = {
  start: document.querySelector(".start"),
  finish: document.querySelector(".finish"),
  maze: document.querySelector("#maze"),
  indicator: document.querySelector("#indicator"),
};

let isPlaying = false;

const handlerStartMouseEvent = () => {
  refs.indicator.textContent = "Play";
  isPlaying = true;
};

refs.start.addEventListener("mouseover", handlerStartMouseEvent);

const handlerMouseFinishEvent = () => {
  if (isPlaying) {
    refs.indicator.textContent = "Winner";
    isPlaying = false;
  }
};

refs.finish.addEventListener("mouseover", handlerMouseFinishEvent);

const handlerBlockMouseEvent = (e) => {
  if (isPlaying && e.target.classList.contains("block")) {
    isPlaying = false;
    refs.indicator.textContent = "Lose";
  }
};

refs.maze.addEventListener("mouseover", handlerBlockMouseEvent);

const handlerMouseReturnThroughStart = () => {
  if (isPlaying) {
    refs.indicator.textContent = "Pause";
    isPlaying = false;
  }
};

refs.maze.addEventListener("mouseleave", handlerMouseReturnThroughStart);
