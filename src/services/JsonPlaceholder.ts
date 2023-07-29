import axios, { CanceledError } from "axios";
interface Users {
  id: number;
  name: string;
}

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError };
