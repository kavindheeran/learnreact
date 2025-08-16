import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState();
    // console.log('current state', name);
    const [detail, setDetail] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted'    )
        console.log('Current details',detail)
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1> User Login </h1>
        <label>
            Enter Name 
            <input type='text' 
                onChange={(e) => setDetail((prevState) => {return {...prevState, name:e.target.value}})}/>
        </label><br/>
        <label>
            Enter e-mail 
            <input type='text' required
                onChange={(e) => setDetail((prevState) => {return {...prevState, email:e.target.value}})}/>
        </label><br/>
        <label>
            Enter Password 
            <input type='text' 
                onChange={(e) => setDetail((prevState) => {return {...prevState, password:e.target.value}})}/>
        </label><br/>

        <input type='submit' value="Submit"/>
    </form>
  )
}

export default Form