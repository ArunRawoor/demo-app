import React from "react"
import  { useState } from "react"


function LoginForm() {
const [formData, setFormData] = useState({
fname: '',
lname: '',
email: '',
password: '',
})

const [error, setError] = useState('')
// Single handler for all inputs using e.target.name
const handleChange = (e) => {
const { name, value } = e.target
setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e) => {
e.preventDefault() // MUST — stops page reload
if (!formData.email || !formData.password) {
setError('All fields are required!')
return
}
console.log('Submitted:', formData)
setError('')
}
  return (
   <form onSubmit={handleSubmit}>
    <h2>Login Form</h2>
    <input
type='fname'
name='fname'
value={formData.fname}
onChange={handleChange}
placeholder='fname'
/>
<br></br>
<input
type='lname'
name='lname'
value={formData.lname}
onChange={handleChange}
placeholder='lname'
/>
<br></br>
<input
type='email'
name='email'
value={formData.email}
onChange={handleChange}
placeholder='Email'
/>
<br></br>

<input
type='password'
name='password'
value={formData.password}
onChange={handleChange}
placeholder='Password'
/>
{error && <p style={{ color: 'red' }}>{error}</p>}
<br></br>

<button type='submit'>Login</button>
</form>
  )
}

export default LoginForm