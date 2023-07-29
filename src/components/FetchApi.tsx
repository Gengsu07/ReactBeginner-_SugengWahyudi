import React, { useEffect, useState } from "react";
import UserServices, { CanceledError, Users } from "../services/userService";
import useUser from "../hooks/useUser";

const GetUsers = () => {
  const { users, setUsers, error, setError, isLoading, setIsLoading } =
    useUser();

  const onDelete = (user: Users) => {
    const originUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));
    UserServices.deleteUsers(user.id).catch((err) => {
      setError(err.message);
      setUsers(originUsers);
    });
  };

  const AddUser = () => {
    const originUsers = [...users];
    const userAdded = {
      id: 0,
      name: "Gengsu",
    };
    setUsers([userAdded, ...users]);
    UserServices.addUser(userAdded)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originUsers);
      });
  };

  const UpdateUser = (user: Users) => {
    const originUsers = [...users];
    const updatedUser = { ...user, name: user.name + "07" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    UserServices.updateUsers(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originUsers);
    });
  };

  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={() => AddUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => UpdateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers;
