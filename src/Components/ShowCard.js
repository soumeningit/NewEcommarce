import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'

function ShowCard({ item }) {

    // console.log("Item in card : " + item);

    return (
        <div className='flex flex-col mx-auto h-72 w-56 border-2 border-gray-200 justify-evenly rounded-md'>
            {
                item ?
                    (
                        <>
                            <img src={item.url} alt="img" className='h-[50%]' />
                            <h2 className='text-xl font-bold'>{item.name}</h2>
                            <span className='flex mx-auto'>
                                <BsCurrencyDollar className='text-xl font-bold mt-1' /><p className='text-xl font-bold'>{item.price}</p>
                            </span>
                            <button className='border border-gray-400 px-2 py-1 text-md rounded-md text-md font-semibold max-w-[50%] mx-auto'>Add To Cart</button>
                        </>
                    )
                    :
                    (
                        <img src="https://cdn.acowebs.com/wp-content/uploads/2023/10/3acwebs-1.jpg" alt="img" className='h-[50%]' />
                    )
            }
        </div >
    )
}

export default ShowCard