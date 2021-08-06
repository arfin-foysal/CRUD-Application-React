import React, { useState } from 'react'

export const userContect = React.createContext()
const ContextProvider = (props) => {
    const [user, setuser] = useState([
        { id: 1, name: "arfin", position: "JavaScript", salary: 5000 },
        { id: 2, name: "sahin", position: "Java", salary: 4000 },
        { id: 3, name: "raju", position: "c++", salary: 3000 },
        { id: 4, name: "saad", position: "Python", salary: 2000 },
    ])
    return (
        <div>
            <userContect.Provider value={[user, setuser]}>
                {props.children}
            </userContect.Provider>
        </div>
    )
}

export default ContextProvider
