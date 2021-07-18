import React from 'react';

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((p) => (
        <div key={p.name}>
          {p.name} {p.phone}
        </div>
      ))}
    </>
  );
};

export default Persons;
