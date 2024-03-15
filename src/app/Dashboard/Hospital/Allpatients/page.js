"use client"
import React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import  { useState } from "react";


export default function Allpatients() {
    const [patients, setPatients] = useState([]);
    const router = useRouter();


    useEffect(() =>  {
        const fetchData = async () => {
            const res = await fetch(
                "http://localhost:3000/api/hospitalhttp://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/patient-profiles"
            );
            const data = await res.json();
            setPatients(data);
        };
        fetchData();
    }, []);

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
    }, [router.pathname])

    return (
        <div className="bg-cover h-screen w-screen bg-no-repeat pt-0 bg-no-scrol" style={{ backgroundImage: "url('/background.jpeg')" }}>
            <div className='flex justify-between p-6 '>
                    <div className='flex flex-row justify-around'>
                        <button id='registered'
                            onClick={() => handleRegistered('registered')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1 '>Registered Patients
                        </button>
                        <button id='All'
                            onClick={() => handleAll('All')}
                            className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1'>All Patients</button>
                        <button id='requested' 
                        onClick={() => handleRequested('requested')}
                         className='border-2 p-2  rounded-lg bg-sky-600 hover:bg-sky-900 focus:bg-transparent focus:text-black ml-1'>Requested Patients
                         </button>
                    </div>
                    <div className='flex pl-6 '>
                        <input type="text" placeholder='Search' className='bg-transparent  border-b-8 border-2 shadow-lg  border-black border-opacity-20 rounded-l-xl hover:bg-blue-200 w-64 p-2 focus:outline-none focus:ring focus:ring-blue-100 focus:bg-transparent '/>
                        <button className='border-b-8 border-2 border-black border-opacity-20 shardow-lg h-16 w-20 flex justify-center items-center bg-sky-700 rounded-r-xl hover:bg-sky-500 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6">
                {patients.map((patient) => (
                    <div key={patient.id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
                        <p className="text-gray-600">{patient.contactInfo}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                ))}
                    <div  className="bg-white rounded-lg shadow-lg p-4 text-black shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                     <div  className="bg-white rounded-lg shadow-lg p-4 text-black shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                     <div  className="bg-white rounded-lg shadow-lg p-4 text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                     <div  className="bg-white rounded-lg shadow-lg p-4 text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                     <div  className="bg-white rounded-lg shadow-lg p-4 text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
                     <div  className="bg-white rounded-lg shadow-lg p-4 text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {/* <img src={patient.profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
                        <h2 className="text-xl font-bold mb-2 text-black">John DOE</h2>
                        <p className="text-gray-600">+2547112441316</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Request
                        </button>
                    </div>
            </div>
        </div>
    );
}
