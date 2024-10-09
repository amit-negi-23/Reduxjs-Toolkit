import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from './studentSlice'
import { nanoid } from '@reduxjs/toolkit'

export default function AddStudent() {
    const [student, setStudent] = useState(initialState)
    const dispatch = useDispatch();

    function initialState() {
        return {
            fullname: '',
            email: '',
            phone: '',
            isRegistered: false,
            id: nanoid()
        }
    }
    const handleInput = (e) => {
        setStudent((preVal) => {
            return { ...preVal, [e.target.name]: e.target.value , isRegistered: true,}
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addStudent(student))
        setStudent(initialState);
    }
    return (
        <div>
            <h2>Student Adding Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Name</label> &nbsp;
                    <input type="text" placeholder='Enter fullname' name='fullname' id='fullname' onChange={handleInput} value={student.fullname} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email</label> &nbsp;
                    <input type="email" placeholder='Enter email' id='email' name='email' onChange={handleInput} value={student.email} />
                </div>
                <br />
                <div>
                    <label htmlFor="phone">Phone</label> &nbsp;
                    <input type="tel" placeholder='Enter phone' id='phone' name='phone' onChange={handleInput} value={student.phone} />
                </div>
                <br />
                <button>Add Student</button>
            </form>
        </div>
    )
}
