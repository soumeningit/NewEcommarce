import React from 'react'
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignOutPage({ setIsSignUp }) {
    const [formData, setFormData] = useState({ email: "" });

    const navigate = useNavigate();

    function changeHandeler(event) {
        setFormData((prevData) => {
            return ({
                ...prevData,
                [event.target.name]: event.target.value
            })
        })
    }

    function submitBtnhandler(event) {
        if (window.confirm("Are you sure to log out ?")) {
            event.preventDefault();
            // console.log(formData);
            fetchData(formData);
        }
        else {
            navigate("/");
        }

    }

    function fetchData() {
        const data = JSON.parse(window.localStorage.getItem("users"));

        // console.log(data);

        if (!data) {
            toast.error("User not found");
            navigate("/signup");
        }

        // const userData = data.filter((item) => item && item.email === formData.email);

        const userIndex = data.findIndex((item) => item.email === formData.email);

        if (userIndex !== -1) {
            // Remove the user from the array
            data.splice(userIndex, 1);

            // Save the updated array back to local storage
            window.localStorage.setItem("users", JSON.stringify(data));

            toast.success("Successfully signed out");
            setIsSignUp(true);
            navigate("/");
        }
        else {
            toast.error("User not exsist");
        }

    }

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

                    <NavLink to="/">
                        <button onClick={submitBtnhandler}
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

export default SignOutPage