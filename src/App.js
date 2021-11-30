import React, { Component } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotal()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {this.countTotal() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
