import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allUsers, allUsersError, allUsersLoading , fetchUsers , deleteUser} from '../../../store/usersSlice';
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillPencilFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

import Pagination from "antd/es/pagination";


const AdminuUsers = () => {

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };


  const users = useSelector(allUsers)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  // to delete a user
  const handleDelete = (id)=>{
    if (confirm("Are you sure you want to delete this user ?")){
      if (users.length >= 2){
        dispatch(deleteUser(id))
        return
      }
      alert('This is the last user ! it can not be removed')
    }
  }

  // handle pagination
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 8;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirsUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice(indexOfFirsUser, indexOfLastUser);
  //

  return (

    <div className='users'>
    
      <Link to="/admin/users/add-user" className="btn btn-primary add-user-btn mt-5 w-80">Add new user</Link>
      <table className="table table-striped container my-5 users-table">
        <thead className="thead-light">
          <tr>
            <th scope="col">user</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers?.map((user,index)=>(
            <tr key={index}>
              <td>{user.username}</td>
              <td><Link to={`/admin/users/edit/${user.id}`}><BsFillPencilFill /></Link></td>
              <td><button onClick={()=>handleDelete(user.id)} className="text-danger"><BsFillTrashFill /></button></td>
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination
      className='mb-3'
        defaultCurrent={1}
        total={users?.length}
        pageSize={usersPerPage}
        onChange={handlePaginationChange}
        
      />
    </div>
  )
}

export default AdminuUsers