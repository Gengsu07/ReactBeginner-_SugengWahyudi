import JsonPlaceholder, { CanceledError } from "./JsonPlaceholder";
export interface Users {
  id: number;
  name: string;
}

class UserServices {
  getAllUsers() {
    const controller = new AbortController();
    const request = JsonPlaceholder.get<Users[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort };
  }
  deleteUsers(id: number) {
    return JsonPlaceholder.delete("/users/" + id);
  }
  addUser(user: object) {
    return JsonPlaceholder.post("/users", user);
  }
  updateUsers(user: Users) {
    return JsonPlaceholder.patch("/users/" + user.id, user);
  }
}

export { CanceledError };
export default new UserServices();
