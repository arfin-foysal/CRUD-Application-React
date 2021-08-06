import React from 'react'
import { useContext } from "react"
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { userContect } from "../Context/UserContext"
const Read = () => {
    const [user,] = useContext(userContect)
    const { id } = useParams()
    const users = user.filter((user) => user.id == id);
    return (
        <div>

            {users.map(valu =>
                <Card key={valu.id} style={{ width: '25rem' }}>
                    <Card.Body>
                        <h2>Information</h2>
                        <hr />
                        <h3>Name:{valu.name}</h3>
                        <h4>Position: {valu.position}
                            Developer </h4>
                        <h4>salary: {valu.salary}</h4>
                        <Link to="/"><Button>Back to Home</Button></Link>
                    </Card.Body>
                </Card>)}

        </div>
    )
}

export default Read
