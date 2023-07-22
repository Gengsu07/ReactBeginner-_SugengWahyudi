import React, { FormEvent, useState } from "react";

const FormState = () => {
  const [person, setPerson] = useState({
    person: "",
    age: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Nama
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, person: event.target.value })
          }
          type="text"
          id="nama"
          className="form-control"
          value={person.person}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          id="age"
          type="number"
          className="form-control"
          value={person.age}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FormState;
