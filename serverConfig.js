export default {
    protectedRoutes: [
      { route: "/users", methods: ["POST", "PUT", "DELETE", "PATCH"] },
      { route: "/data", methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] },
    ]
  }
  