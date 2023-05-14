import React, { useEffect, useState } from 'react'
import axios, { all } from "axios"
import { Link } from 'react-router-dom';

export default function Home() {

    //1.
    const [query, setQuery] = useState("");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    //async await will make asyncronous as js excutes line by line. After 1 line is finished thn it ll go for nxt
    const loadUsers = async () => {
        const allUsers = await axios.get("http://localhost:8080/all")

        //To display data on page we need to set all data
        setUsers(allUsers.data);
    };

    //add function to delete user using axios and after that we have to load the user..
    //then add an onclick event which will call this function when del button is clicked.
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    console.log(query)

    return (
        <div className='container'>
            <div className='py-4'>

                {/*2. search */}
                <input type='text' style={{ "width": "400px", "backgroundColor": "#dbdbdb", "borderRadius": "7px" }} placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />

                <table className="table table-dark table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //map will create new array from calling our function for every array element. when new user is created it will show on the table 
                            //3.for search added filter method
                            users.filter(user => user.userName.toLowerCase().includes(query)).map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`} >View</Link>
                                        <Link className='btn btn-outline-success mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}