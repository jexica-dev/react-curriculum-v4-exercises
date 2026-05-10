// TOPIC: Choose the correct tool: useRef vs useState

import { useRef } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current++;
    const buttonElement = document.getElementById('count-btn');

    buttonElement.innerText = `${clickCount.current} Clicks`;
    console.log('count: ', clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button id="count-btn" onClick={handleClick}>
        {clickCount.current} Clicks
      </button>
    </div>
  );
}

// we use the useRef hook because the directions explicitly say it updates the text without a rerender. I update the count on the button by changing the innerText.
