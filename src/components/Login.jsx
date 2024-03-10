import React from "react";

const Login = () => {
  // Function to handle login
  const handleLogin = () => {
    const token = "dummyToken123";

    localStorage.setItem("token", token);

    window.location.href = "/";
  };

  return (
    <div>
      <h2>This is login page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
