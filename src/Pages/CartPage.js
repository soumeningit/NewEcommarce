// import React from 'react'
// import { useSelector } from 'react-redux'
// import CartItem from '../Components/CartItem';


// function CartPage() {

//     const cart = useSelector((state) => state.cart);

//     console.log("inside cartpage.")

//     console.log("Length : " + cart.length);

//     return (
//         <div className='flex flex-row'>
//             <div className=' w-[45%]  '>
//                 {
//                     cart.map((item) => {
//                         return <CartItem item={item} />
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default CartPage


import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../Components/CartItem'

function CartPage() {

    const cart = useSelector((state) => state.cart)

    const [totalAmount, setTotalAmount] = useState(0);

    // useEffect(() => {
    //     setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    // }, [cart])

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }
        total = parseFloat(total.toFixed(2));
        setTotalAmount(total);
    }, [cart]);


    return (
        <div className='flex w-full justify-center items-center'>
            {
                cart.length > 0 ?
                    (<div className='className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
                        <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
                            {
                                cart.map((item) => {
                                    return <CartItem item={item} key={item.id} />
                                })
                            }
                        </div>

                        <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
                            <div className='flex flex-col h-[100%] gap-y-4'>
                                <p className='font-semibold text-xl text-green-400'>Your Cart</p>
                                <p className='font-semibold text-4xl text-green-600 uppercase'>Summary</p>
                                <p className='text-xl'>
                                    <span className='text-gray-700 font-semibold text-xl'>
                                        Total Items:{cart.length}
                                    </span>
                                </p>
                            </div>

                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>Total Ampount : $ {totalAmount}</p>
                                <button className='bg-green-700 hover:bg-purple-50 rounded-lg 
                                    text-white transition duration-300 ease-linear mt-5 border w-48
                                     border-green-600 hover:text-green-700 px-2 py-1 text-xl mb-5'
                                >
                                    Checkout Now
                                </button>
                            </div>
                        </div>

                    </div>) :
                    (
                        <div className='flex flex-col items-center justify-center h-screen'>
                            <h1 className='text-xl font-semibold text-blue-400'>Cart Is Empty</h1>
                            <NavLink to="/">
                                <button className='bg-green-700 hover:bg-purple-50 rounded-lg 
                                    text-white transition duration-300 ease-linear mt-5 border
                                     border-green-400 text-md hover:text-green-700 px-2 py-1'

                                >
                                    Shop Now
                                </button>
                            </NavLink>
                        </div>
                    )


            }
        </div >)

}

export default CartPage