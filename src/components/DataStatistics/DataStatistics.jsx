import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Statistics } from '../Statistics/Statistics';
import {Section} from "../Section/Section"

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
  // onLeaveFeedback = (e) => {
  //   const fieldName = e.target.textContent
  //      console.log(fieldName);
  //   this.setState(prevState => {

  //     return {
  //       ...prevState,
  //       [fieldName]:prevState.fieldName + 1,
  //     };
  //   });
  // };

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
      <>
        <p> Please leave feedback</p>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <p>Statistics</p>
        {this.countTotalFeedback() > 0 
        ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        )
        : (<Section > </Section>)
      }
      </>
    );
  }
}
