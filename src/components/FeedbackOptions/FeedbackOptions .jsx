import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  const values = Object.values(onLeaveFeedback);

  return values.map((el, index) => {
    return (
      <button key={index} type="button" onClick={el}>
        {keys[index]}
      </button>
    );
  });
};
