import React, { useState } from 'react'
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap'

import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { userContect } from '../Context/UserContext';

export const CreateItem = () => {
    const [user, setuser] = useContext(userContect)

    const [name, setname] = useState("")
    // const [id, setid] = useState("")
    const [position, setPosition] = useState("")
    const [salary, setsalary] = useState()

    // const updateid=(e)=>{
    //     setid(e.target.value)
    // }
    const updateName = (e) => {
        setname(e.target.value)
    }
    const updateposition = (e) => {
        setPosition(e.target.value)
    }
    const updatesalary = (e) => {
        setsalary(e.target.value)
    }

    const addUser = (e) => {
        e.preventDefault()
        setuser([...user, {
            id: uuidv4(),
            name: name,
            position: position,
            salary: salary,
        }

        ])
        setname("")
        setPosition("")
        setsalary("")
    }


    return (
        <div>
            <Form onSubmit={addUser}>

                {/* <Form.Group className="mb-3" >
                    <Form.Control type="text" onChange={updateid} name="name" value={id}  placeholder="Enter id" />
                    </Form.Group> */}
                <Form.Group className="mb-3" >
                    <Form.Control type="text" onChange={updateName} name="name" value={name} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control type="text" onChange={updateposition} value={position} placeholder="Enter Position" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control type="text" onChange={updatesalary} value={salary} placeholder="Enter salary" />
                </Form.Group>
                <Button type="submit" variant="primary" value="Submit">Submit</Button>
                <Link to="/"><Button variant="info">Back To Home</Button> </Link>
            </Form>

        </div>
    )
}
