

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li key={Math.random()}>good: {good}</li>
        <li key={Math.random()}>neutral: {neutral}</li>
        <li key={Math.random()}>bad: {bad}</li>
      </ul>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()} % </p>
    </>
  );
};
