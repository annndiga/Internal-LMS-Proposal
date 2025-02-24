export const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "admin@example.com" && password === "admin123") {
          resolve({ role: "admin", name: "Admin User" });
        } else if (email === "trainer@example.com" && password === "trainer123") {
          resolve({ role: "trainer", name: "Trainer User" });
        } else if (email === "student@example.com" && password === "student123") {
          resolve({ role: "student", name: "Student User" });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  };