// TOPIC: Correct useRef usage to control DOM elements

import { useRef } from 'react';

// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
