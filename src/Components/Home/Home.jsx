import React, { useContext } from 'react'
import { Button, Table } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { userContect } from "../Context/UserContext"
import './Home.css'

const Home = () => {
  const [user] = useContext(userContect)

  return (
    <>
      <Link to="createItem" > <Button className="action_btn" variant="primary">Create User</Button></Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>User:ID</th> */}
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map(user =>
            <tr >
              {/* <td>{user.id}</td> */}
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Link to={`/read/${user.id}`}><Button className="action_btn" variant="secondary">Read</Button> </Link>
                <Link to={`/edit/${user.id}`}><Button className="action_btn" variant="success">Edit</Button></Link>

                <Link to={`/delete/${user.id}`}><Button className="action_btn" variant="warning">Delete</Button></Link>
              </td>
            </tr>)}


        </tbody>
      </Table>
    </>
  )
}

export default Home
