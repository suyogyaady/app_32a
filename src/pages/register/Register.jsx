import React, { useState } from "react";
import { registerUserApi } from "../../apis/Api";
import { toast } from "react-toastify";

const Register = () => {
  // Make a useState for 5 Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setphone] = useState(""); // Added Phone

  // Use State for Error Message
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState(""); // added for phone

  // Make a each function for changing the value
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setphone(e.target.value);
  }; // added for phone

  // validation
  var validate = () => {
    var isValid = true;

    // validate the firstname
    if (firstName.trim() === "") {
      setFirstNameError("Firstname is Required!");
      isValid = false;
    }

    if (lastName.trim() === "") {
      setLastNameError("Lastname is Required!");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is Required!");
      isValid = false;
    }

    if (phone.trim() === "") {
      setPhoneError("Phone Number is Required!");
      isValid = false;
    } // Added for phone

    if (password.trim() === "") {
      setPasswordError("Password is Required!");
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is Required!");
      isValid = false;
    }

    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and Confirm Password doesn't match!");
      isValid = false;
    }

    return isValid;
  };

  // Submit button Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    // sending requests to the api
    //making json object
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    };

    registerUserApi(data).then((res) => {
      // Received data : Success message
      if (res.data.success == false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };

  return (
    <>
      <div className="container mt-2">
        <h1>Create an Account!</h1>

        <form className="w-50">
          <label>Firstname : {firstName}</label>
          <input
            onChange={handleFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your firstname"
          />

          {firstNameError && <p className="text-danger">{firstNameError}</p>}

          <label className="mt-2">Lastname</label>
          <input
            onChange={handleLastname}
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
          />

          {lastNameError && <p className="text-danger">{lastNameError}</p>}

          <label className="mt-2">Email</label>
          <input
            onChange={handleEmail}
            type="text"
            className="form-control"
            placeholder="Enter your email"
          />

          {emailError && <p className="text-danger">{emailError}</p>}

          {/* added for phone */}
          <label className="mt-2">Phone</label>
          <input
            onChange={handlePhone}
            type="text"
            className="form-control"
            placeholder="Enter your Phone Number"
          />
          {phoneError && <p className="text-danger">{phoneError}</p>}

          <label className="mt-2">Password</label>
          <input
            onChange={handlePassword}
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />

          {passwordError && <p className="text-danger">{passwordError}</p>}

          <label className="mt-2">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />

          {confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p>
          )}

          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;

// Step 1 : Make Complete UI of Register Page (Fields, Button, etc)
// step 2 : Input (Type) - Make a state
// Step 3 : OnChange - Set the value to the state

// https://codeshare.io/VNKEp8
