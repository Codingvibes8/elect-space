import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Hero = () => {
    return (
        <div className='w-full min-h-screen  flex items-center justify-center'>
            <div className='flex flex-col md:flex-row px-6 items-center w-full max-w-6xl mx-auto'>
                <div className='flex flex-col items-center justify-center bg-white rounded-2xl h-auto md:h-[500px] w-full md:w-[500px] p-6'>
                    <h1 className='text-6xl mb-4'>
                        Electricjay
                    </h1>
                    <h2 className='text-3xl mb-4'>
                        Reliable Electrician
                    </h2>
                    <h3 className='text-lg capitalize mb-2 mx-auto items-center flex'>
         electrical installations or repairs.
                    </h3>
                    <div className="flex items-center space-x-4 mt-4 font-bold">
                        <MdOutlinePhone className="h-6 w-6 text-blue-900" />
                        <span className="text-green-900 text-sm">123-456-7890</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-2 font-bold">
                        <MdOutlineEmail className="h-6 w-6 text-blue-900" />
                        <span className="text-green-900">info@electrijames.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={'/services'} className="transition-colors bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-md flex mb-6 items-center justify-center">
                            services
                        </Link>
                        <Link href={'/about'} className="bg-blue-800 hover:bg-blue-500 text-white px-4 py-2 mt-4 rounded-md flex mb-6 items-center justify-center">
                            about me
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-1 p-6'>
                    <Image src='/fuse-box1.jpg' width={500} height={500} className='rounded-2xl object-cover ring-4 ring-yellow-300' alt='Electrician Hero Image' />
                </div>
            </div>
        </div>
    );
};

export default Hero;