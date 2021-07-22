import React, { useState } from 'react';

const Feedback = ({ handleClick, name }) => {
  return <Button handleClick={handleClick} text={name} />;
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Statistic text={'good'} value={good} />
      <Statistic text={'neutral'} value={neutral} />
      <Statistic text={'bad'} value={bad} />
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const All = ({ good, neutral, bad }) => {
  return <div>all {good + neutral + bad}</div>;
};

const Average = ({ good, neutral, bad }) => {
  let result = (good + neutral * 0 + bad * -1) / (good + neutral + bad);
  return <div>average {isNaN(result) ? 0 : result}</div>;
};

const Positive = ({ good, neutral, bad }) => {
  let result = good / (good + neutral + bad);
  return <div>positive {isNaN(result) ? 0 : result * 100} %</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Feedback handleClick={() => setGood(good + 1)} name={'good'} />
      <Feedback handleClick={() => setNeutral(neutral + 1)} name={'neutral'} />
      <Feedback handleClick={() => setBad(bad + 1)} name={'bad'} />
      <h2>statistics</h2>
      {good + neutral + bad === 0 ? (
        'No feedback given'
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
