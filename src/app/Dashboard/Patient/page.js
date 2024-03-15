"use client"
import Input from 'postcss/lib/input'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const requestedPatients = [
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "janedoe@gmail.com",
        "phoneNumber": "08012345678",
    }
]


export default function Patient() {   
    
    const router = useRouter()

    const handleHospitals = async (buttonId) => {
        await router.push('/Dashboard/Patient/hospitals')
        localStorage.setItem('focusedButton', buttonId)
    }

    const handleRecords = async (buttonId) => {
        await router.push('/Dashboard/Patient/myrecords')
        localStorage.setItem('focusedButton', buttonId)
    }

    useEffect(() => {
    const focusedButton = localStorage.getItem('focusedButton')
    if (focusedButton) {
        document.getElementById(focusedButton)?.focus()
    }
}, [router.pathname]) // Add an empty dependency array to the useEffect hook


    return (
       <div className="bg-cover h-screen w-screen bg-no-repeat pt-0 bg-no-scrol" style={{backgroundImage: "url('/background.jpeg')"}}>
            <div className='flex justify-between p-6 '>
                    <div className='flex flex-row justify-around'>
                        <button id='hospitals'
                            onClick={() => handleHospitals('hospitals')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1 '> Hospitals
                        </button>
                        <button id='records'
                            onClick={() => handleRecords('records')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1'>My Records
                        </button>
                    </div>
                    <div className='flex pl-6 '>
                        <input type="text" placeholder='Search' className='bg-transparent  border-b-8 border-2 shadow-lg  border-black border-opacity-20 rounded-l-xl hover:bg-blue-200 w-64 p-2 focus:outline-none focus:ring focus:ring-blue-100 focus:bg-transparent '/>
                        <button className='border-b-8 border-2 border-black border-opacity-20 shardow-lg h-16 w-20 flex justify-center items-center bg-sky-700 rounded-r-xl hover:bg-sky-500 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
            </div>
        </div>
    )
}