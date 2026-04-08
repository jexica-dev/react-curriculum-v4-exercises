//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  //    - A variable for your name
  //  - A variable for your age
  //  - A list of your hobbies using an array

  const name = 'Jessica Ayran';
  const age = 33;
  const hobbies = [
    'coding',
    'planting',
    'being creative',
    'discovering new musicians',
    'making art videos',
    'cooking',
    'baking',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>ABOUT</h1>
      <p>
        My name is {name} and I'm {age} years old.
      </p>
      <h2>HOBBIES</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
