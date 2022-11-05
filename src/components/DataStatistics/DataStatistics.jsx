import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WraperCard = styled.div`
  width: 250px;
  height: 100%;
  border: 2px solid white;
  border-radius: 15px;
  &:hover {
    box-shadow: 2px 5px 10px gold;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 20px;
`;
const TitleSecond = styled.h2`
  text-align: center;
  font-size: 20px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export class DataStatistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    console.log();
    this.setState(prevState => {
      return {
        ...prevState,
        good: prevState.good + 1,
      };
    });
  };
  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        neutral: prevState.neutral + 1,
      };
    });
  };
  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        bad: prevState.bad + 1,
      };
    });
  };

  onLeaveFeedback = {
    onAddGoodFeedback: this.addGoodFeedback,
    onAddNeutralFeedback: this.addNeutralFeedback,
    onAddBadFeedback: this.addBadFeedback,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return isNaN(positiveFeedback) ? 0 : positiveFeedback;
  };

  render() {
    return (
      <WraperCard>
        <Title> Please leave feedback</Title>
        <WrapperButton>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </WrapperButton>
        <TitleSecond>Statistics</TitleSecond>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Section> </Section>
        )}
      </WraperCard>
    );
  }
}

DataStatistics.propTypes = {
  //   this.state: PropTypes.arrayOf(PropTypes.shape({
  //     good:PropTypes.number.isRequired,
  //     neutral:PropTypes.number.isRequired,
  //     bad:PropTypes.number.isRequired,
  //   }).isRequired,
  //   ).isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  
};
