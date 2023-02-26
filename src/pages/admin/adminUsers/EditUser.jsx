import React, { useState, useEffect } from "react";
import { editUser } from "../../../store/usersSlice";
import {useDispatch} from "react-redux"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const  EditUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()


  useEffect(()=>{
    const getuser = async () =>{
      const { data }  = await axios.get(`http://localhost:5000/users/${id}`)
      setUsername(data.username)
      setPassword(data.password)
    }

    getuser()
  },[id])

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Username:", username, "Password:", password);
    if (username && password){
      const payload = {
        id : id,
        updatedUser : {
          username,
          password
        }
      }

      dispatch(editUser(payload))
      alert('user updated successfully✔')
      navigate('/admin/users')
      
    }
  };

  const handleCancel  = ()=>{
    setPassword('')
    setUsername('')
  }

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
      <div className="d-flex gap-3">
        <button type="submit" className="btn btn-primary">
            Save
          </button>
      </div>
    </form>
  );
}

export default EditUser;
