export default function SnackList() {
  const snacks = [
    { rank: 5, name: 'chips and salsa' },
    { rank: 4, name: 'edamame' },
    { rank: 3, name: 'fruit smoothie' },
    { rank: 2, name: 'cashews' },
    { rank: 1, name: 'yogurt' },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </>
  );
}
