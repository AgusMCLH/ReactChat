type LoginProps = {
    setUser: (user: { name: string; role: string }) => void;
  };
  
  function Login({ setUser }: LoginProps) {
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const username = form.username.value;
      const password = form.password.value;
  
      if (username === "admin" && password === "password") {
        setUser({ name: "Admin", role: "admin" });
        alert("Login successful!");
        return; // Exit after successful login
      }
      if (username === "notadmin" && password === "password") {
        setUser({ name: "User", role: "user" });
        alert("Login successful!"); 
        return; // Exit after successful login
      }
      alert("Invalid username or password");
      form.reset(); // Reset the form if login fails
      form.username.focus(); // Focus on the username field for better UX
    };

  
    return (
      <div className="loginContainer">
        <div className="flexhalf">
          <div className="loginForm">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="inputContainer">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="detailHalf">
            <div className="detailContainer">
              <h1>Welcome to the App</h1>
              <p>This is a simple login page layout.</p>
              <p>Feel free to customize it as per your needs.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;