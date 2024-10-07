'use client'
import React from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
        });
    }, []);
    return (
        <>
            {/* Hero Section */}
            <div className="relative her-bg-grad min-h-[500px] flex items-center overflow-hidden lg:h-screen">
                {/* Background circle */}
                <div className="absolute right-2/3 top-1/2 blur transform -translate-y-1/2 w-[200px] h-[200px] bg-[#936b4b57]  rounded-full mr-[-300px] hidden lg:block"></div>
                <div className="absolute right-2/4 top-1/2 blur transform -translate-y-1/2 w-[300px] h-[300px] bg-[rgb(147,107,75)]  rounded-full mr-[-300px] hidden lg:block"></div>

                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between h-full">
                    {/* Text content */}
                    <div className="text-center lg:text-left lg:w-1/2 z-1">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-light text-[#6d5749] text-center head-font" data-aos="fade-in">ELEGENCE REDEFINED</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#3d3026] text-center head-font" data-aos="fade-in">SURABHI UNNIKRISHNAN</h1>
                        <div className="mb-2 flex justify-center">
                            <span className="text-2xl md:text-3xl text-[#6d5749] head-font" data-aos="fade-in">&</span>
                        </div>
                        <div className=" flex justify-center " >
                            <Image src='/Skintique.png' width={300} height={100} className="rounded-full" data-aos="fade-in" />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="bg-[#3d3026] text-white py-2 px-6 rounded-full hover:bg-[#574439] transition duration-300" data-aos="fade-in">
                                View More »
                            </button>
                        </div>
                    </div>

                    {/* Image - hidden on small devices */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        {/* Placeholder for the image */}
                        <div className="w-[400px] h-[800px] rounded-lg">
                            {/* Replace with your actual image */}
                            <Image
                                data-aos="fade-left"
                                src="/hero.png"
                                alt="Elegant woman"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                quality={100}  // Set to maximum quality
                                priority  // Preload this image
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* second Hero Section */}

            <section className=" bg-[#AF8867] text-white ">
                <div className="container mx-auto  px-4 lg:px-40 py-12 md:py-24 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/surabhi.png"
                            alt="Surabhi Unnikrishnan"
                            width={400}
                            height={400}
                            className="rounded-full border" data-aos="fade-in"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-right">MEET SURABHI UNNIKRISHNAN: A JOURNEY OF ELEGANCE AND EXPERTISE</h1>
                        <p className="mb-6" data-aos="fade-right">With over a decade of experience in the beauty industry, Surabhi Unnikrishnan has become a trusted name in aesthetics and beauty care. As a professional trainer, consultant, and business owner, she has mentored over 10,000 beauty professionals across South India, empowering them with knowledge and skills. Renowned for her expertise in permanent makeup and microblading and one of the most sought-after names in the industry, Surabhi's mission is to make beauty care accessible, personalized, and luxurious for every client.</p>
                        <button data-aos="fade-right" className="bg-[#000000] text-white py-2 px-6 rounded-full hover:bg-[#574439] transition duration-300">
                                Connect with me
                            </button>
                    </div>
                </div>

            </section>
            
            <div className=" flex justify-center">
                <Image
                    src="/Skintique.png"
                    alt="Skintique Logo"
                    width={300}
                    height={100}
                />
            </div>
            {/* Elegance Quote Section */}
            <section className="bg-white pb-12 mx-5 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold  mb-4 head-font text-[#6B0606]" data-aos="fade-up">Elegance comes from being as beautiful inside as outside</h2>
                    <p className="text-gray-600 "  data-aos="fade-up">Elegance goes much deeper than just looking gorgeous on the outside. It's about living with grace and kindness. When you cultivate inner beauty through compassion and mindfulness, it naturally radiates outward and enhances your external beauty.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'makeup', icon: '💄' },
                            { name: 'hair styling', icon: '💇‍♀️' },
                            { name: 'nail care', icon: '💅' },
                            { name: 'cosmetology', icon: '🧴' },
                        ].map((service) => (
                            <div key={service.name} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                                <div className="text-4xl mb-2">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;