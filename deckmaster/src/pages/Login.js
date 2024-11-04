import "../css/Login.css";

const Login = () => {
    return (
        <div id="login-container">
            <div id="login-content">
                
                <section id="login-form">
                    <h1>Login</h1>
                    <div className="login-input">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username"></input>
                    </div>
                    
                    <div className="login-input">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password"></input>
                    </div>
                    <button type="submit">Login</button>

                </section>
                <section id="login-img">
                    <img src="images/Screen Shot 2024-10-03 at 11.18.37 AM.png" alt="login image"></img>
                </section>
                
            </div>
        </div>
    );
};

export default Login;