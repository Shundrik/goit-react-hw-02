import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  const keys = Object.keys(options);
  console.log(keys);

  const values = Object.values(onLeaveFeedback);
  console.log(values);
  console.log(onLeaveFeedback);

  return values.map((el, index) => {
    return (
      <button key={index} type="button" onClick={el}>
        {keys[index]}
      </button>
    );
  });
};
