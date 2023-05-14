import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"} >Full Stack Application</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <button className='btn btn-outline-light'>Add User</button> */}

                    {/* To Link button to AddUser.js when we click it should open tht page */}
                    <Link className='btn btn-outline-light' to="/addUser" >Add User</Link>
                </div>
            </nav>



        </div>
    )
}
