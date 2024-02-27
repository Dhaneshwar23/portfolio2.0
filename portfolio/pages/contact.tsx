import NavBar from '@/components/NavBar'
import React from 'react'
import './global.css'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

export default function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => { 
        window.location.href = `mailto:dhaneshwarkoshti2312@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`; 
    };
  return (
    <>
    <NavBar />
    <div className="h-screen relative flex flex-col text-center md:text-left px-4 md:px-10 justify-center items-center bg-light w-full dark:bg-dark dark:text-light">
            
            <div className="flex flex-col space-y-10 w-full md:w-auto">
                <h4 className="text-4xl font-semibold text-center"> I have got just what you need. {" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Chat</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>647-914-6849</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>dhaneshwarkoshti2312@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>Etobicoke, Ontario</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full md:w-auto">
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                    <input {...register('subject')} placeholder="Subject" className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder="Message" className='contactInput' />
                    <button type="submit" className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg w-full">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}