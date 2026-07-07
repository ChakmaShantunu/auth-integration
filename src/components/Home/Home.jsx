import { useState } from "react";
import { easeInOut, motion, scale } from 'motion/react';
import { FiDollarSign, FiUsers, FiBriefcase, FiAward, FiCode, FiGlobe, FiZap, FiShield, FiArrowRight, FiStar } from "react-icons/fi"
import { type } from "firebase/firestore/pipelines";


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const floatAnimation = {
    initial: { y: 0 },
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: easeInOut
        }
    }
};

const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: easeInOut
        }
    }
};


const Home = () => {

    const [counter, setCounter] = useState({ users: 0, projects: 0, awards: 0, revenue: 0 })

    const services = [
        {
            icon: FiCode,
            title: 'Web Development',
            description: 'Modern, responsive websites built with cutting-edge technologies',
            color: 'primary',
            features: ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            icon: FiGlobe,
            title: 'Digital Marketing',
            description: 'Strategic marketing solutions to grow your online presence',
            color: 'secondary',
            features: ['SEO', 'Social Media', 'Content Strategy']
        },
        {
            icon: FiZap,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that users love',
            color: 'accent',
            features: ['Figma', 'Prototyping', 'User Research']
        },
        {
            icon: FiShield,
            title: 'Cybersecurity',
            description: 'Protect your digital assets with enterprise-grade security',
            color: 'error',
            features: ['Auditing', 'Pen Testing', 'Compliance']
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            image: 'https://i.pravatar.cc/100?img=1',
            text: 'Absolutely incredible work! They transformed our digital presence completely.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'CTO, InnovateCorp',
            image: 'https://i.pravatar.cc/100?img=2',
            text: 'The attention to detail and professionalism is unmatched. Highly recommend!',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder, DesignHub',
            image: 'https://i.pravatar.cc/100?img=3',
            text: 'Working with this team has been an absolute pleasure. They delivered beyond expectations.',
            rating: 5
        }
    ];

    const statsData = [
        { label: 'Total Revenue', value: `$${Math.floor(counter.revenue).toLocaleString()}`, icon: FiDollarSign },
        { label: 'Happy Users', value: Math.floor(counter.users).toLocaleString(), icon: FiUsers },
        { label: 'Projects Delivered', value: Math.floor(counter.projects).toLocaleString(), icon: FiBriefcase },
        { label: 'Awards Won', value: Math.floor(counter.awards).toLocaleString(), icon: FiAward },
    ];
    return (
        <div className="min-h-screen bg-base-200">

            {/* Hero Section */}
            <section className="pt-16 md:pt-20 pb-24 bg-linear-to-br from-base-200 via-base-100 to-base-200">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Hero Content */}
                        <motion.div className="flex-1 text-center lg:text-left" variants={containerVariants} initial="hidden" animate="visible">

                            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-primary bg-primary/10" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                                <FiZap className="text-sm" />
                                <span className="text-sm font-medium">Welcome to the future</span>
                            </motion.div>

                            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight mb-6" variants={itemVariants}>
                                Build Amazing <br />
                                <span className="text-primary">Digital Products</span> <br />
                                With Us
                            </motion.h1>

                            <motion.p className="text-lg max-w-2xl mx-auto lg:mx-0 mb-8 text-base-content/70" variants={itemVariants}>We combine creativity and technology to deliver exceptional digital experiences that drive results for your business.</motion.p>


                            {/* buttons */}
                            <motion.div initial="hidden" animate="visible" className="flex flex-wrap gap-2 justify-center lg:justify-start" variants={containerVariants}>
                                <motion.button className="btn btn-primary btn-lg" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get Started
                                    <FiArrowRight className="ml-2" />
                                </motion.button>
                                <motion.button className="btn btn-ghost btn-lg" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    Learn More
                                </motion.button>
                            </motion.div>

                            {/* stats */}
                            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" variants={containerVariants}>
                                {statsData.map((stat, index) => (
                                    <motion.div key={index} className="bg-base-50/100 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center" variants={itemVariants} whileTap={{ scale: 1.05, y: -5 }}>
                                        <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-primary gap-2">
                                            <stat.icon></stat.icon>
                                            {stat.value}
                                        </div>
                                        <div>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>


                        {/* Hero Image */}
                        <motion.div className="flex-1">
                            <div className="relative">
                                <motion.div animate={floatAnimation.animate} initial={floatAnimation.initial}>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div></div>
                                        <div className="space-y-4 mt-8">
                                            <motion.div className="bg-base-100 rounded-2xl p-4 shadow-lg" whileTap={{ scale: 1.05 }}>
                                                <FiZap className="text-error text-2xl"></FiZap>
                                                <p className="text-sm font-medium mt-2">Marketing</p>
                                            </motion.div>
                                            <motion.div className="bg-base-100 rounded-2xl p-4 shadow-lg" whileTap={{ scale: 1.05 }}>
                                                <FiShield className="text-error text-2xl"></FiShield>
                                                <p className="text-sm font-medium mt-2">Security</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content p-4 rounded-full">
                                        <FiStar className="text-2xl"></FiStar>
                                    </div>
                                </motion.div>


                                {/* Floating Badges */}
                                <motion.div className="absolute -top-4 -right-4 bg-success text-success-content rounded-full px-4 py-2 text-sm font-bold shadow-lg" animate={pulseAnimation.animate} initial={pulseAnimation.initial}>
                                    ⭐ 5 Stars
                                </motion.div>
                                <motion.div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-content rounded-full px-4 py-2 text-sm font-bold shadow-lg" animate={floatAnimation.animate} initial={floatAnimation.initial}>
                                    🚀 Fast
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;