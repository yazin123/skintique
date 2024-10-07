'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBinoculars, FaHandHoldingHeart, FaInstagram, FaLeaf, FaTrophy } from 'react-icons/fa';
import Footer from './Footer';


const HeroSection = () => {
    const professionals = [
        { name: 'Sarah Rules', title: 'Hair Designer', image: '/team.png' },
        { name: 'Sarah Rules', title: 'Hair Designer', image: '/team.png' },
        { name: 'Sarah Rules', title: 'Hair Designer', image: '/team.png' },
        { name: 'Sarah Rules', title: 'Hair Designer', image: '/team.png' },

    ];
    const features = [
        { icon: <FaHandHoldingHeart />, title: 'Professional Care', description: 'Etiam est augue, tempus purus gravida.' },
        { icon: <FaTrophy />, title: 'Premium brands', description: 'Etiam est augue, tempus purus gravida.' },
        { icon: <FaLeaf />, title: 'Natural cosmetic', description: 'Etiam est augue, tempus purus gravida.' },
    ];


    const bannerData = [
        {
            id: 1,
            imageUrl: '/banner.png',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            duration:'500'
        },
        {
            id: 2,
            imageUrl: '/banner.png',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            duration:'1000'
        },
        {
            id: 3,
            imageUrl: '/banner.png',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            duration:'1500'
        },
        {
            id: 4,
            imageUrl: '/banner.png',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            duration:'2000'
        },
    ];
    const BannerCard = ({ imageUrl, description,duration }) => (
        <div className="relative w-full h-[300px] overflow-hidden" data-aos="fade-up" data-aos-duration={duration}>
            <img src={imageUrl} alt="Bride's Day" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-semibold mb-1">CONHEÇA NOSSO</h2>
                <h3 className="text-[#D4AF37] text-2xl font-bold mb-2">DIA DE NOIVA</h3>
                <p className="text-white text-sm mb-4">{description}</p>
                <button className="bg-[#D4AF37] text-white py-2 px-4 rounded flex items-center justify-center hover:bg-opacity-80 transition-colors">
                    Mais Informações <FaArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>
    );

    const testimonials = [
        {
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            name: "Sarah Nimbus",
            title: "Publicitária",
            image: "https://avatar.iran.liara.run/public/11"
        },
        {
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            name: "Jéssika Jones",
            title: "Advogada",
            image: "https://avatar.iran.liara.run/public/11"
        },
        {
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            name: "Sarah Nimbus",
            title: "Publicitária",
            image: "https://avatar.iran.liara.run/public/11"
        },
        {
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            name: "Jéssika Jones",
            title: "Advogada",
            image: "https://avatar.iran.liara.run/public/11"
        },
    ];
    const TestimonialCard = ({ quote, name, title, image }) => (
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-2" data-aos="fade-in">
            <span className="text-6xl hidden lg:block">"</span>
            <div>
                <p className="text-gray-600 mb-4">{quote}</p>
                <div className="flex items-center">
                    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 className="font-semibold text-gray-800">{name}</h3>
                        <p className="text-gray-500">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };


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
                        <div className=" flex justify-center">
                            <span className="text-2xl md:text-3xl text-[#6d5749] head-font" data-aos="fade-in">&</span>
                        </div>
                        <div className=" flex justify-center " >
                            <Image src='/logo1.png' width={500} height={300} data-aos="fade-in" />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="bg-[#000000] text-white py-2 px-6 rounded-full hover:bg-[#574439] transition duration-900" data-aos="fade-in">
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
                        <h1 className="text-3xl md:text-4xl font-bold head-font mb-4" data-aos="fade-right">MEET SURABHI UNNIKRISHNAN: A JOURNEY OF ELEGANCE AND EXPERTISE</h1>
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
                    <p className="text-gray-600 " data-aos="fade-up">Elegance goes much deeper than just looking gorgeous on the outside. It's about living with grace and kindness. When you cultivate inner beauty through compassion and mindfulness, it naturally radiates outward and enhances your external beauty.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="">
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[
                            { name: 'Makeup', src: '/makeup.png', duration: '900' },
                            { name: 'Skincare', src: '/cosmetics.png', duration: '1400' },
                            { name: 'Haircare', src: '/hairdressing.png', duration: '2100' },
                            { name: 'Nailcare', src: '/nailcare.png', duration: '2600' }
                        ].map((service) => (
                            <div
                                key={service.name}
                                className="relative bg-white shadow-md text-center hover:shadow-lg transition duration-300"
                                style={{
                                    backgroundImage: `url(${service.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                }}
                                data-aos="fade-up" // AOS animation type
                                data-aos-duration={service.duration} // Different durations
                            >
                                {/* Overlay to darken the background */}
                                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                                {/* Service Name */}
                                <div className="relative flex items-center justify-center h-full">
                                    <h3 className="text-2xl font-bold text-white head-font">{service.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* team section */}
            <div className="flex flex-col lg:flex-row">
                {/* Left Section - Main Image */}
                <div className="lg:w-2/3 w-full lg:pr-8  lg:mb-0 min-h-[400px]">
                    <div className="relative h-[400px] lg:h-full">
                        <Image
                            src="/teammain.png"
                            alt="Blonde hair"
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 rounded-lg">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 text-end">OUR</h2>
                            <h2 className="text-yellow-600 text-3xl md:text-4xl font-bold mb-4 text-end">PROFESSIONALS</h2>
                            <p className="text-white text-sm text-end">
                                Meet all our experts who are at your disposal to take care of your hair.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Professionals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {professionals.map((prof, index) => (
                        <div key={index} className=" p-4 rounded-lg ">
                            <Image
                                src={prof.image}
                                alt={prof.name}
                                width={1000}
                                height={1000}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="font-bold text-lg">{prof.name}</h3>
                            <p className="text-gray-600 mb-4">{prof.title}</p>
                            {/* <div className="flex space-x-2">
                                <FaInstagram className="text-gray-500" size={20} />
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* video section */}
            <div className="relative w-full h-screen overflow-hidden">
                {!isPlaying ? (
                    // Placeholder image
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                        <Image
                            src="/video.png" // Replace with your image source
                            alt="Placeholder"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-75"
                        />
                        <button
                            onClick={handlePlayClick}
                            className="absolute text-white text-5xl bg-black rounded-full p-5 h-20 hover:bg-gray-800 transition duration-300"
                        >
                            ▶
                        </button>
                    </div>
                ) : (
                    // Video element
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        controls
                        muted
                        onEnded={() => setIsPlaying(false)} // Reset state when video ends
                    >
                        <source src="/your-video.mp4" type="video/mp4" /> {/* Replace with your video source */}
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            {/* Features */}
            <div className="container mx-auto py-12 px-8 bg-[#F3E2D5]">
                <div className="flex flex-wrap justify-between">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center lg:p-12">
                            <div className="text-4xl mb-2 flex justify-center">{feature.icon}</div>
                            <h3 className="text-[#B22828] font-semibold mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Carousel */}
            <div className="w-full">
                <div className="flex flex-wrap">
                    {bannerData.map((banner) => (
                        <div key={banner.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <BannerCard {...banner} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-[#FDF7F2] py-12 max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-[#C2936E]">TESTIMONIALS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default HeroSection;