import React from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AddStudent from './features/addStudent/AddStudent.jsx'
import StudentDetails from './features/addStudent/StudentDetails.jsx'

function App() {

  return (
    <>
      <Provider store={store}>
            <Counter />
            <AddStudent />
            <StudentDetails/>
      </Provider>
    </>
  )
}

export default App
