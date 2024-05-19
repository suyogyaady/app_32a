

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';

const Login = () => {

    // make a useState for each input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // make a error state
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    //validation
    const validation = () => {
        let isValid = true;

        if (email.trim() === '' || !email.includes('@')) {
            setEmailError('Email is empty or invalid!')
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError("Password is empty")
            isValid = false;
        }

        return isValid;


    }

    // make a function to handle the form submmission
    const handleLogin = (e) => {
        e.preventDefault()

        // Validation
        if (!validation()) {
            return
        }


        // Make a json object
        const data = {
          "email" : email,
          "password" : password
        }

        // Make a API requests
        loginUserApi(data).then((res)=>{
          // Received data : Success message
          if(res.data.success == false){
            toast.error(res.data.message)
          } else{
            toast.success(res.data.message)

            // success-bool, message-text, token-text, user data-json object
            // setting token and user data in local storage
            localStorage.setItem('token',res.data.token)

            // setting user data
            const convertedData = JSON.stringify(res.data.userData)

            // local storage set
            localStorage.setItem('user',convertedData)

          }
        })
      

    }

    return (
        <div className='container'>
            <h1>Login to your account</h1>
            <form className='w-50'>
                <label>
                    Email Address : {email}
                </label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className='form-control mt-2' placeholder="Enter your email" />
                {
                    emailError && <p className='text-danger'>{emailError}</p>
                }
                <label>
                    Password : {password}
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' className='form-control mt-2' placeholder="Enter your password" />
                {
                    passwordError && <p className='text-danger'>{passwordError}</p>
                }

                <button onClick={handleLogin} className='btn btn-danger w-100 mt-3'> Login</button>

            </form>
        </div>
    )
}

export default Login;


// import React, { useState } from 'react'
// import { toast } from 'react-toastify'

// const Login = () => {

//   // Make a use state
//   const [email, setEmail]= useState('')
//   const [password, setPassword]= useState('')

//   // Use State for Error Message
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')

//   // Make a function to handle the form submission
//   const handleLogin = (e)=>{
//     e.preventDefault()
//     toast.success("Login Button Clicked")
//   }

//   // // validation
//   // var validate = () => {
//   //   var isValid = true;

//   //   // validate the firstname
//   //   if(email.trim() === ''){
//   //     setEmailError("Email is Required!")
//   //     isValid = false
//   //   }

//   //   if(password.trim() === ''){
//   //     setPasswordError("Password is Required!")
//   //     isValid = false
//   //   }

    
//   //   return isValid;

//   // }

//   return (
//     <div className="container">
//       <form>
//       <h1>Login to get started !</h1>
//         <label>Email Address : {email}</label>
//         <input onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter your Email Address"></input>

//         <label>Password: {password}</label>
//         <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter your Password"></input>

//         <br></br>

//         <button onClick={handleLogin} className='btn btn-dark mt-50 w-25'>Login</button>

//       </form>
      
      
//     </div>
//   );
// };

// export default Login;
