"use client"
import Input from 'postcss/lib/input'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'



export default function Requested() {
    const router = useRouter() 
    
    const handleRequested = async (buttonId) => {
        await router.push('/Dashboard/Hospital/Requested')
        localStorage.setItem('focusedButton', buttonId)
    }

    const handleAll = async (buttonId) => {
        await router.push('/Dashboard/Hospital/Allpatients')
        localStorage.setItem('focusedButton', buttonId)
    }

    const handleRegistered = async (buttonId) => {
        await router.push('/Dashboard/Hospital')
        localStorage.setItem('focusedButton', buttonId)
    }

    useEffect(() => {
        const focusedButton = localStorage.getItem('focusedButton')
       if (focusedButton) {
        document.getElementById(focusedButton)?.focus()
    }
    }, [])  
    
    return (
       <div className="bg-cover h-screen w-screen bg-no-repeat pt-0 bg-no-scrol" style={{backgroundImage: "url('/background.jpeg')"}}>
            <div className='flex justify-between p-6 '>
                   <div className='flex flex-row justify-around'>
                        <button id='registered'
                            onClick={() => handleRegistered('registered')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1 '>Registered Patients
                        </button>
                        <button id='All'
                            onClick={() => handleAll('All')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1'>All Patients
                         </button>
                        <button id='requested'
                        onClick={() => handleRequested('requested') }
                         className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1'>Requested Patients
                         </button>
                    </div>
                    <div className='flex pl-6 '>
                        <input type="text" placeholder='Search' className='bg-transparent  border-b-8 border-2 shadow-lg  border-black border-opacity-20 rounded-l-xl hover:bg-blue-200 w-64 p-2 focus:outline-none focus:ring focus:ring-blue-100 focus:bg-transparent '/>
                        <button className='border-b-8 border-2 border-black border-opacity-20 shardow-lg h-16 w-20 flex justify-center items-center bg-sky-700 rounded-r-xl hover:bg-sky-500 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
            </div>
            <div className=' flex flex-col '>
                <div className='flex flex-row justify-start items-center text-black font-bold pt-4 ml-28'>
                    <h3 className='p-1  rounded-b-md border-b-2  border-black shadow-lg text-2xl bg-black bg-opacity-20 text-white '>Requested Patients :</h3>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <p className='text-black pt-4 mr-24'>Total patients : 200</p>
                    </div>
                 <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-5/6 ml-28 bg-black bg-opacity-25 h-5/6 p-2 m-6 ">
                        <thead>
                            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: '0.9674rem'}}>
                                <th className="px-4 py-2 bg-gray-200 " style={{backgroundColor: '#f8f8f8'}}>Profile</th>
                                <th className="px-4 py-2 " style={{backgroundColor: '#f8f8f8'}}>Name</th>
                                <th className="px-4 py-2 " style={{backgroundColor: '#f8f8f8'}}>Gender</th>
                                <th className="px-4 py-2 " style={{backgroundColor: '#f8f8f8'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            <tr className="hover:bg-blue-400 border-b border-gray-200 py-10 font-bold text-white">
                                <td className="px-4 py-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </td>
                                <td className="px-4 py-4">Jane Doe</td>
                                <td className="px-4 py-4">F</td>
                                <td className="px-4 py-4">Pending</td>
                            </tr>
                            <tr className="hover:bg-blue-400 border-b border-gray-200 py-10 font-bold text-white">
                                <td className="px-4 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </td>
                                <td className="px-4 py-4">Jane Doe</td>
                                <td className="px-4 py-4">F</td>
                                <td className="px-4 py-4 text-red-600">Expired</td>
                            </tr>
                             <tr className="hover:bg-blue-400 border-b border-gray-200 py-10 font-bold text-white">
                                <td className="px-4 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </td>
                                <td className="px-4 py-4">Jane Doe</td>
                                <td className="px-4 py-4">F</td>
                                <td className="px-4 py-4 text-red-600">Expired</td>
                            </tr>
                             <tr className="hover:bg-blue-400 border-b border-gray-200 py-10 font-bold text-white">
                                <td className="px-4 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </td>
                                <td className="px-4 py-4">Jane Doe</td>
                                <td className="px-4 py-4">F</td>
                                <td className="px-4 py-4">Pending</td>
                            </tr>
                             <tr className="hover:bg-blue-400 border-b border-gray-200 py-10 font-bold text-white">
                                <td className="px-4 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </td>
                                <td className="px-4 py-4">Jane Doe</td>
                                <td className="px-4 py-4">F</td>
                                <td className="px-4 py-4">Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    
                </div>
            </div>
        </div>
    )
}