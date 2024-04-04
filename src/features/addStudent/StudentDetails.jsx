import React from 'react'
import './StudentDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import {removeStudent} from './studentSlice'

export default function StudentDetails() {
    const usersData = useSelector(state => state.users.usersData);
    const dispatch = useDispatch();

    function handleRemove(id) {
        dispatch(removeStudent(id))
    }
    return (
        <div>
            <h4>All Students Details</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Student name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={() => handleRemove(user.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}
