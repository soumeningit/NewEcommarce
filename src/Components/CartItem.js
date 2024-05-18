import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../Redux/Slice/CartSlice';
import toast from 'react-hot-toast';


function CartItem({ item }) {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    // console.log("card : " + card);

    // let price = 0;

    const price = cart.map((item) => item.price);

    // console.log("Price : " + price);

    let value = 0;
    for (let i = 0; i < price.length; i++) {
        value += price[i];
    }


    const removeFromCart = () => {
        dispatch(removeProduct(item.id));
        toast.success("Item Removed");
    }

    return (
        <div className="flex flex-col items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">

            <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

                <div className="w-[30%]">
                    <img className='object-cover' src={item.url} alt="product-image" />
                </div>

                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">{item.name}</h1>
                    <div className='flex justify-between'>
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-lg text-green-600">${item.price}</p>
                        </div>
                        <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                            onClick={removeFromCart}
                        >
                            <RiDeleteBinLine />
                        </div>

                    </div>

                </div>

            </div>
            <div className='h-[0.08rem] w-full bg-gray-400'></div>

        </div>
    )
}

export default CartItem