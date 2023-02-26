import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"
import "./admin.css"

const Admin = () => {
  return (
    <div>
        <header className='header'>
          <h1>Admin Portal</h1>
        </header>
        <div className='d-flex gap-5 admin-container'>
          <div className='admin-sidebar'>
              <ul>
                  <Link to="/admin" className='active'>movies</Link><br />
                  <Link to="/admin/users">users</Link><br />
                  <Link to="/">Main Home</Link><br />
                  <Link to="/login">logout</Link><br />
              </ul>
          </div>
          <Outlet />
        </div>
    </div>
  )
}

export default Admin