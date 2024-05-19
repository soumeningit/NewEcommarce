import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

function LogInPage(props) {

    const [formData, setFormData] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    let setIsLoggedIn = props.setIsLoggedIn;


    // const handleLogInButton = () => {
    //     // Perform login logic
    //     handleLogin();
    // };

    // console.log(formData);

    function changeHandeler(event) {
        setFormData((prevData) => {
            return ({
                ...prevData,
                [event.target.name]: event.target.value
            })
        })
    }

    function submtBtnhandler(event) {
        event.preventDefault();
        console.log(formData);
        fetchData(formData);
    }

    function fetchData() {
        const data = JSON.parse(window.localStorage.getItem("users"));
        // console.log(data);

        // const userData = data.filter((item) => item.name.includes(formData.email))
        // console.log(userData.map((item) => item.email));

        if (!data) {
            toast.error("User not found");
            navigate("/signup");
        }

        const userData = data.filter((item) => item && item.email === formData.email);
        const passKey = userData.map((item) => item.password);

        // console.log("password");
        // console.log(passKey);

        if (passKey[0] === formData.password) {
            toast.success("Login Successfull");
            setIsLoggedIn(true);
            navigate("/");
        }
        else {
            toast.error("Email or Password Missmatch");
            setFormData((prevData) => {
                return ({
                    ...prevData,
                    email: "",
                    password: "",

                })
            })
        }
    }

    // useEffect(() => {
    //     fetchData(formData.email);
    // }, []);


    return (
        <div>
            <div className='flex flex-col items-center mt-2 max-w-[800px] mx-auto gap-y-4 border-none'>

                <form action="#" className='w-[100%] p-20 border border-gray-300 shadow-lg m-0'>

                    <label htmlFor="email" className='ml-4 text-start'>Email Address</label> <br />
                    <input type="email"
                        name='email'
                        id='email'
                        onChange={changeHandeler}
                        value={formData.email}
                        className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                    />
                    <br />
                    <label htmlFor="password" className='ml-4 text-start'>Password</label> <br />
                    <input type="password"
                        name='password'
                        id='password'
                        onChange={changeHandeler}
                        value={formData.password}
                        className='border border-gray-300  border-b-blue-300 focus:border-blue-400 w-[95%] ml-4 p-2 rounded-md outline-none'
                    />
                    <NavLink to="/">
                        <button onClick={submtBtnhandler}
                            className='text-white bg-blue-700 hover:bg-blue-500 focus:ring-2
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mt-2 mb-2 ml-4
                            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                        >
                            Submit
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default LogInPage