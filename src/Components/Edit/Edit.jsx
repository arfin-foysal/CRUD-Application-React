import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { userContect } from '../Context/UserContext'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
export const Edit = () => {
    const [user, setuser] = useContext(userContect)
    const { id } = useParams()
    const userr = user.filter((user) => user.id == id);

    const [name, setname] = useState(userr[0].name)
    const [position, setPosition] = useState(userr[0].position)
    const [salary, setsalary] = useState(userr[0].salary)

    // const updateid=(e)=>{
    //     setid(e.target.value)
    // }
    const editName = (e) => {
        e.preventDefault()
        setname(e.target.value)
        const EName=name
        userr[0].name=EName
    }
    const  editposition = (e) => {
        setPosition(e.target.value)
        const Eposition=position;
          userr[0].position=Eposition
    }
    const editsalary = (e) => {
        setsalary(e.target.value)
        const Esalary=salary
        userr[0].salary=Esalary
    }

    const editUser = (e) => {
        e.preventDefault()
        setuser([...user] )

      
    }
    return (
        <div>
            <Form >

                {/* <Form.Group className="mb-3" >
    <Form.Control type="text" onChange={updateid} name="name" value={id}  placeholder="Enter id" />
    </Form.Group> */}
                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={editName} 
                    placeholder={userr[0].name} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    value={position} 
                    onChange={editposition} 
                    placeholder={user[0].position} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    value={salary} 
                    onChange={editsalary} 
                    placeholder={user[0].salary} />
                </Form.Group>
                <Link to="/">
                <Button type="submit" onSubmit={()=>editUser} variant="primary" >Submit</Button>
                <Button variant="info">Back To Home</Button> 
              </Link>
            </Form>
        </div>
    )
}
