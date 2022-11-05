import React from "react";
// import {Test} from "./Test/Test"
import {DataStatistics} from "./DataStatistics/DataStatistics"
import styled from "styled-components";


const Wrapper = styled.div`
display: flex; 
justify-content: center; 
  /* width:1200px; */
/* margin: 0 auto; */
min-height:100vh;
padding:20px;
background:black;
color:white;

`

export const App = () => {
  return (
    <Wrapper>
         <DataStatistics/>
    </Wrapper>
  );
};
