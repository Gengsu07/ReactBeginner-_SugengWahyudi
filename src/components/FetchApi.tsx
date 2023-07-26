import axios from "axios";
import React, { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const GetUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);
        setUsers(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  const onDelete = (user: Users) => {
    const originUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originUsers);
      });
  };

  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}

            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers;
