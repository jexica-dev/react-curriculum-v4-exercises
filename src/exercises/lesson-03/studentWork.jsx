//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Import components here

import BugProps from './BugProps';
import BugMutatedState from './BugMutatedState';
import BugEffectLoop from './BugEffectLoop';

export default function StudentWork() {
  return (
    <div>
      <BugProps />
      <BugMutatedState />
      <BugEffectLoop />
      <p>Student output will go here</p>
    </div>
  );
}
