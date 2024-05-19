import React, { useState } from 'react'
import logo from '../image/logo.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { CiShoppingBasket } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar(props) {

    const cart = useSelector((state) => state.cart);
    // // console.log("card : " + card);

    // // let price = 0;

    // const price = cart.map((item) => item.price);

    // // console.log("Price : " + price);

    // let value = 0;
    // for (let i = 0; i < price.length; i++) {
    //     value += price[i];
    // }

    // console.log("Value is  : " + value);

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;



    return (
        <div className='flex justify-between items-center p-4 bg-gradient-to-br from-astglobalcolor5'>
            <div>
                <Link to="/"><img src={logo} alt="logo" className='h-24 w-24' /></Link>
            </div>
            <div>
                <ul className='flex gap-x-8'>
                    <NavLink to="/everything">
                        <li>Everythings</li>
                    </NavLink>

                    <NavLink to="/groceries">
                        <li>Groceries</li>
                    </NavLink>

                    <NavLink to="/juice">
                        <li>Juice</li>
                    </NavLink>

                </ul>
            </div>
            <div className='flex gap-x-4'>
                <ul className='flex gap-x-4'>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>

                    <NavLink to="/contact">
                        <li>Contact</li>
                    </NavLink>


                </ul>
                {/* <div className='flex'>
                    <BsCurrencyDollar /> <span>{value}</span>
                    <NavLink to="/cart">
                        <CiShoppingBasket /> <span>{card.length}</span>
                    </NavLink>

                </div> */}
                <NavLink to="/cart">
                    <div className='relative'>
                        <CiShoppingBasket className='font-bold text-2xl' />
                        {
                            cart && cart.length > 0 &&
                            <span className='absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex
                                justify-center items-center animate-bounce rounded-full text-white'
                            >
                                {cart.length}
                            </span>
                        }

                    </div>
                </NavLink>

                <div className='flex gap-x-2'>
                    <NavLink to="/signup">
                        <button
                            className='px-2 py-1 rounded-md border border-gary-500 text-md bg-slate-400 text-gray-200 hover:bg-slate-800 transition-all'
                        >
                            SignUp
                        </button>
                    </NavLink>

                    {
                        !isLoggedIn &&
                        <NavLink to="/login">
                            <button
                                className='px-2 py-1 rounded-md border border-gary-500 text-md bg-slate-400
                             text-gray-200 hover:bg-slate-800 transition-all'
                            >
                                LogIn
                            </button>
                        </NavLink>
                    }
                    {
                        isLoggedIn &&
                        <NavLink to="/logout">
                            <button
                                className='px-2 py-1 rounded-md border border-gary-500 text-md bg-slate-400
                             text-gray-200 hover:bg-slate-800 transition-all'
                            >
                                LogOut
                            </button>
                        </NavLink>
                    }

                </div>

            </div>

        </div>
    )
}

export default Navbar