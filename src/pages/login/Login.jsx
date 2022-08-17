import "./login.scss";
import { useContext, useState } from "react";
import { ContextAuth } from "../../context/ContextAuth/ContextAuth";
import { login } from "../../context/ContextAuth/apiCalls";
import { Link} from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isFetching, dispatch } = useContext(ContextAuth);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  // console.log("error",error);
  return (
    <div className="login">
      {/* <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="assets/logo.png"
            alt=""
          />
        </div>
      </div> */}
      <div className="container">
        <form>
          <h1>Admin Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}
          disabled={isFetching}>
          
            Sign In
          </button>
          
          <p  className={error ? "errmsg" : "offscreen"} aria-live="assertive">Incorrect username or password</p>
          {/* <span>
            New to FlicksTV?  
            <Link to="/register"><b>Sign up now.</b></Link>
          </span> */}
          <small>
            This page is protected by Google reCAPTCHA to ensure that you're not a
            bot.
          </small>
        </form>
      </div>
    </div>
  );
}
