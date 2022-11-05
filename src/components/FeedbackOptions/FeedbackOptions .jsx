import React from 'react';
import styled from 'styled-components';




const Button = styled.button`

padding: 5px 15px;
border-radius:5px;
background-color: white;
&:hover{
box-shadow: inset -5px 10px 20px gold;
}
  
`

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  const values = Object.values(onLeaveFeedback);

  return values.map((el, index) => {
    return (
     
      <Button key={index} type="button" onClick={el}>
        {keys[index]}
      </Button>
      
      
    );
  });
};
