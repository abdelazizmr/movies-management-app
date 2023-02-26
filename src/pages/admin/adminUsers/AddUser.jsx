import React, { useState } from "react";
import { addUser } from "../../../store/usersSlice";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const  AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username, "Password:", password);
    if (username && password){
      const newuser = {
        id : new Date().getTime(),
        username,
        password
      }

      dispatch(addUser(newuser))
      alert('new user added successfully✔')
      navigate('/admin/users')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add User
      </button>
    </form>
  );
}

export default AddUser;
