import styled from "styled-components";

const StatistikText = styled.p`
  padding-left: 25px;
  font-size: 20px;
`

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
      <StatistikText>Total: {total()}</StatistikText>
      <StatistikText>Positive feedback: {positivePercentage()} % </StatistikText>
    </>
  );
};
