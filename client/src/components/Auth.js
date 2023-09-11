import { Avatar } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleLogin } from "google-login-react";
import { useDispatch, useSelector } from "react-redux";
import { signin,signup } from "../actions/authAction";
import "../styles/Auth.css";
import { useState } from "react";


function Auth() {

  const [isSignUp, setMode] = useState(false);
  const [authData,setAuthData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
  
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
     e.preventDefault();
     if(isSignUp)
     {
     dispatch(signup(authData,navigate));
      
     }
     else{
      dispatch(signin(authData,navigate));
     }
     
  };

  const handleChange = (e) => {

    setAuthData({...authData,[e.target.name]:e.target.value});

  };

  const googleSuccess = async (res) => {
    const token = res?.sub;
    const result = res;
    const data = { result, token };
   // console.log("data", data);

    //localStorage.setItem('profile',JSON.stringify({...data}));
    try {
      dispatch({ type: 'AUTH', data});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Unsuccessful google login", error);
  };
  const switchMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <div className="auth_container">
      <Avatar sx={{ bgcolor: green[500] }}>
        <LockIcon />
      </Avatar>
      <h2>{isSignUp ? "Sign Up" : "Sign in"}</h2>

      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete={"on"}      
          onChange={handleChange}
        />

        {isSignUp && (
          <>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              autoComplete={"on"}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </>
        )}

        {!isSignUp && (
          <>
            <Button type="submit" variant="contained">
              Sign in
            </Button>
          </>
        )}
      </form>

      <GoogleLogin
        className="google_btn"
        clientId="429708968029-006d7flsvdinml1vab7csvu6bvkmdh95.apps.googleusercontent.com"
        onSuccess={googleSuccess}
        onError={googleFailure}
      >
        <Button variant="contained" fullWidth>
          Google Sign in
        </Button>
      </GoogleLogin>

      {isSignUp && (
        <>
          <Button onClick={switchMode}>Already have an account? Sign in</Button>
        </>
      )}

      {!isSignUp && (
        <>
          <Button onClick={switchMode}>Don't have an account? Sign Up</Button>
        </>
      )}
    </div>
  );
}

export default Auth;
