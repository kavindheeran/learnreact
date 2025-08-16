import React, { useState } from 'react'

const MultipleInput = () => {
    const [input, setInput] = useState({name:"Ka", phone:"+91", email:"__@gmail.com", access: "Select", feedback: "Here to say, " })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted')
        console.log('Current details',input)
    }
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput((prevState) => {return {...prevState, [name]: value}})
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1> User Login </h1>
        <label>
            Enter Name 
            <input type='text' name='user' value={input.name} onChange={(e) => handleChange(e)}/>
        </label><br/>
        <label>
            Enter e-mail 
            <input type='text' name='email' value={input.email} required onChange={(e) => handleChange(e)} />
        </label><br/>
        <label>
            Enter Phone 
            <input type='text' name='phone' value={input.phone} onChange={(e) => handleChange(e)}/>
        </label><br/>
        <label>
            Enter Password 
            <input type='text' name='password' value={input.password} onChange={(e) => handleChange(e)}/>
        </label><br/>
        <label>
            Access as
            <select name='access' value={input.access} onChange={handleChange}>
                <option value="" selected> Select </option>
                <option value="User"> User </option>
                <option value="Admin"> Admin </option>
                <option value="Staff"> Staff </option>  
            </select>
        </label> <br/>
        <label>
            Give a scenario
            <textarea name='feedback' value={input.feedback} onChange={(e) => handleChange(e)}></textarea>
        </label><br/>
            

        <input type='submit' value="Submit"/>
    </form>
  )
}

export default MultipleInput