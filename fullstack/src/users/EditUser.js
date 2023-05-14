import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate()

    //0.this ll give id to axios url path
    const { id } = useParams()

    //1.create object so that input fields are linked with this object's state below
    const [user, setUser] = useState({
        userName: "",
        email: ""

    })

    //2.destructuring the user object so that we can use object's field in input tag in value attribute
    const { userName, email } = user

    //3.create fuunction to pass the values coming from input field to object's state
    //but we neeed to add "onChange={(e) => onInputChnage(e)}" event to input 
    const onInputChange = (e) => {

        //...user will keep on adding evry new input to this setUser object with empty state created 
        //e.target.name will take state name we described above & e.target.value ll give value from input tag
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    //6.hook
    useEffect(() => {
        loadUser()
    }, [])

    //4.Update data When clicked on submit by using Axios
    const onSubmit = async (e) => {
        //To prevent showing feilds and values in url when we click on submit use preventDefault
        e.preventDefault();


        await axios.put(`http://localhost:8080/user/${id}`, user);

        navigate("/");
    }

    //5.Create func to load user with id which u wnat to update
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>Username</label>
                            <input type='text' className='form-control' placeholder='Enter your username' name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <input type='text' className='form-control' placeholder='Enter your email address' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-success'>Submit</button>

                        {/* <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button> */}
                        {/* But when i click on "cancel" it should navigate me directly to home page..for tht use <Link to='path of page'> */}
                        <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"} >Cancel</Link>
                    </form>

                </div>
            </div>

        </div>
    )
}
