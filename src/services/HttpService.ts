import JsonPlaceholder from "./JsonPlaceholder";

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = JsonPlaceholder.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort };
  }
  delete(id: number) {
    return JsonPlaceholder.delete(this.endpoint + "/" + id);
  }
  add<T>(user: T) {
    return JsonPlaceholder.post(this.endpoint, user);
  }
  update<T>(id: number, updatedUser: T) {
    return JsonPlaceholder.patch(this.endpoint + "/" + id, updatedUser);
  }
}

export default new HttpService("/user");
