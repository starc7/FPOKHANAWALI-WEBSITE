import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import toast from 'react-hot-toast'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response=  await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/users`);
        setUsers(response.data.users)
        console.log(users)
      } catch (error) {
        console.log(error)
        toast.error(error);
      } 
    };
    fetchData();
    // eslint-disable-next-line
  }, [])
  return (
    <AdminDashboard>
      <div className="container mt-4">
      <h2>All Users</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              {user.role === 1 ? <td>Admin</td>:<td>User</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminDashboard>
  )
}



export default Users