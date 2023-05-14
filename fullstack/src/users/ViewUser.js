import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function () {

    // 1.create the object for displaying the username and email
    const [user, setUser] = useState({
        userName: "",
        email: ""

    })

    //2.since we ll be getting the specific user with specific id
    const { id } = useParams();

    //3.
    useEffect(() => {
        loadUser();
    }, [])

    // 4.
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>User Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            <b>Details of user id :</b> {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>UserName:</b> {user.userName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email:</b> {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}
