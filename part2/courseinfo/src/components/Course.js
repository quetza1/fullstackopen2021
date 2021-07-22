import React from 'react';

const Header = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <h2>{course.name}</h2>
    </div>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return <h3>Total of {sum} exercises</h3>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
