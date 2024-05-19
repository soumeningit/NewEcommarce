import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


function SignUpPage({ setIsSignUp }) {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function changeHandeler(event) {
        setFormData((prevData) => {
            return (
                {
                    ...prevData,
                    [event.target.name]: event.target.value
                })
        });
    }

    const btnHandeler = (event) => {
        event.preventDefault();
        // const passKey = JSON.parse(window.localStorage.getItem("formData"));
        // if (formData.password === formData.confirmPassword) {
        //     window.localStorage.setItem("formData", JSON.stringify(formData));
        //     alert("Sign Up Successfully");
        // }
        // else {
        //     alert("Password are not same, reenter password");
        //     setFromData(formData.password = "");
        //     setFromData(formData.confirmPassword = "");
        // }

        let users = JSON.parse(window.localStorage.getItem("users")) || [];

        const sameUser = users.some((user) =>
            user.firstName === formData.firstName &&
            user.lastName === formData.lastName &&
            user.email === formData.email
        );

        if (sameUser) {
            alert("You already signed up");
            dispatch(setIsSignUp(false));
            navigate("/");
        }
        else {
            if (formData.password === formData.confirmPassword) {

                users.push(formData);
                window.localStorage.setItem("users", JSON.stringify(users));
                toast.success("Successfully loged in");
                setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
                navigate("/login");
                dispatch(setIsSignUp(true));
            } else {
                toast.error("Passwords do not match, please re-enter your password");
                setFormData((prevData) => ({
                    ...prevData,
                    password: "",
                    confirmPassword: ""
                }));
            }
        }

    }

    return (
        <div className='flex flex-col items-center mt-2 max-w-[800px] mx-auto gap-y-4 border-none'>

            <form action="#" className='w-[100%] p-20 border border-gray-300 shadow-lg m-0'>

                <label htmlFor="firstName" className='ml-4 text-start'>First Name</label> <br />
                <input type="text"
                    required
                    name='firstName'
                    id='firstName'
                    onChange={changeHandeler}
                    value={formData.firstName}
                    className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                />
                <br />

                <label htmlFor="lastName" className='ml-4 text-start'>Last Name</label> <br />
                <input type="text"
                    required
                    name='lastName'
                    onChange={changeHandeler}
                    id='lastName'
                    value={formData.lastName}
                    className='border border-gray-300 border-t-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                />
                <br />
                <label htmlFor="email" className='ml-4 text-start'>Email Address</label> <br />
                <input type="email"
                    required
                    name='email'
                    id='email'
                    onChange={changeHandeler}
                    value={formData.email}
                    className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                />
                <br />
                <label htmlFor="password" className='ml-4 text-start'>Password</label> <br />
                <input type="password"
                    required
                    name='password'
                    id='password'
                    onChange={changeHandeler}
                    value={formData.password}
                    className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                />
                <br />
                <label htmlFor="confirmPassword" className='ml-4 text-start'>Confirm Password</label> <br />
                <input type="password"
                    required
                    name='confirmPassword'
                    id='confirmPassword'
                    onChange={changeHandeler}
                    value={formData.confirmPassword}
                    className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                />
                <br />
                <NavLink to="/">
                    <button onClick={btnHandeler}
                        className='text-white bg-blue-700 hover:bg-blue-500 focus:ring-2
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mt-2 mb-2 ml-4
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                        Save
                    </button>
                </NavLink>
            </form>
        </div>
    )
}

export default SignUpPage