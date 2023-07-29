import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import UserServices, { Users } from "../services/userService";

const useUser = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = UserServices.getAllUsers();
    request
      .then((res) => {
        setIsLoading(false);
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    cancel();
  }, []);
  return {
    users,
    setUsers,
    error,
    setError,
    isLoading,
    setIsLoading,
  };
};

export default useUser;
