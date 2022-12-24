const URL = "https://web-production-305a.up.railway.app"
// const URL = "http://127.0.0.1:8000"

export default class APIService {
  // TO-DO API
  static async ListTodos(token) {
    const res = await fetch(`${URL}/api/todos/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
    const data = await res.json()
    return data
  }
  static async CreateTodo(body, token) {
    const res = await fetch(`${URL}/api/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        // Authorization: "Token c5d4d7fe562c2ad3857216b8e73f1c20d87d9561",
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return data
  }
  static async UpdateTodo(body, token) {
    const res = await fetch(`${URL}/api/todos/${body.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        // Authorization: "Token c5d4d7fe562c2ad3857216b8e73f1c20d87d9561",
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return data
  }
  static async DeleteTodo(id, token) {
    const res = await fetch(`${URL}/api/todos/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        // Authorization: "Token c5d4d7fe562c2ad3857216b8e73f1c20d87d9561",
      },
    })

    return res
  }

  // USER API
  static async CreateUser(body) {
    const res = await fetch(`${URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return data
  }
  static async AuthenticateUser(body) {
    const res = await fetch(`${URL}/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return data
  }
}
