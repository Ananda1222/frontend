import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.


// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

const Signup =({user,setUser})=>{

  const navigate=useNavigate();
  const [formData, setFormData] = useState({});
  
  
  
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(
        "http://localhost:4000/users",
        { ...formData }
      );

      setUser(newUser.data);
      navigate('/user')
    }
     catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  
  return (
    <section style={{ height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          Create Account
        </div>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="Name"
            required
            id="fname"
            style={{ height: "3rem", width: "26rem", marginBottom: "1rem", paddingLeft: "0.75rem", border: "1px solid #000", borderRadius: "0.25rem" }}
          />
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="last name"
            required
            min={8}
            id="lname"
            style={{ height: "3rem", width: "26rem", marginBottom: "1rem", paddingLeft: "0.75rem", border: "1px solid #000", borderRadius: "0.25rem" }}
          />
          <input
            type="email"
            onChange={handleOnChange}
            placeholder="Email"
            required
            id="email"
            style={{ height: "3rem", width: "26rem", marginBottom: "1rem", paddingLeft: "0.75rem", border: "1px solid #000", borderRadius: "0.25rem" }}
          />
          <input
            type="password"
            onChange={handleOnChange}
            placeholder="Password"
            required
            min={8}
            id="password"
            style={{ height: "3rem", width: "26rem", marginBottom: "1rem", paddingLeft: "0.75rem", border: "1px solid #000", borderRadius: "0.25rem" }}
          />
          <button style={{ backgroundColor: "#000", color: "#fff", height: "3rem", width: "26rem", marginBottom: "1rem" }} onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
        <h4 style={{ width: "26rem", textAlign: "start" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#000", marginLeft: "0.5rem" }}>
            Login
          </Link>
        </h4>
      </div>
    </section>
  );
};

export default Signup