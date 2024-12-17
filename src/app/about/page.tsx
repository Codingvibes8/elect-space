import React from "react";
import {AboutServices} from "@/app/about/AboutServices";

const About = () => {
    return (
        <section className="bg-gray-100 py-12 max-w-[1536px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className={'px-10'}>
                <div className={'flex flex-col md:flex-row items-center justify-center gap-2'}>
                    <div className={'w-full sm:w-1/2 mx-auto'}>
                        <p className="text-black text-2xl mb-4">
                            Electric James is a fully qualified 18th edition and Part P Electrician in NW2, London.
                            <br/>
                            I provide a reliable, friendly and highly-recommended service (see below).
                            More recommendations available on my website.<br/>

                            You can call me for domestic or commercial electrical services in North London.
                            <br/>
                            I work to the UK national safety standard (BS 7671) and will give you a safety certificate
                            to
                            confirm that my work has been designed, inspected and tested in line with that standard.

                            I am a NAPIT Approved contractor and offer free quotes.
                        </p>
                        <p className="text-black text-2xl mb-4">
                            With years of experience in the industry,
                            i have built a reputation for reliability and professionalism.<br/>
                            My goal is to create lasting relationships with our clients by
                            delivering exceptional results and unparalleled support.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 mx-auto">
                        <h2 className={'text-center text-3xl mb-10 text-black'}>What we do</h2>
                        <ul className={'flex flex-col items-center justify-center gap-2 text-2xl'}>
                            {AboutServices.map((service) => (
                                <li key={service.name} className={'list-decimal text-black'}>
                                    {service.name}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

