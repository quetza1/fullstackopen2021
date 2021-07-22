import React from 'react';

const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((p) => (
        <div key={p.name}>
          {p.name} {p.number}{' '}
          <button onClick={() => deletePerson(p)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
