import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    usersData: [
        {
            fullname: 'Amit Negi',
            email: 'amitnegiit23@gmail.com',
            phone: 9528594371,
            isRegistered: true,
            id: nanoid()
        }
    ]
};
export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            let newStudent = action.payload
            state.usersData.push(newStudent);

        },
        removeStudent: (state, action) => {
            state.usersData = state.usersData.filter((user) =>(user.id != action.payload))
        }
    }
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer; 