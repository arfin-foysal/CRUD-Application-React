import { Button, Modal } from "react-bootstrap"
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Delete.css'
import { useContext } from "react"
import { userContect } from "../Context/UserContext"

const Delete = () => {
  const [user, setuser] = useContext(userContect)
  const { id } = useParams()
  const handelDelete = (id) => {
    const users = user.filter((user) => user.id != id);
    setuser(users)

  }



  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="action_btn" variant="secondary" >Cancel</Button>
            <Button className="action_btn" variant="primary" onClick={() => handelDelete(id)}>Delete</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default Delete
