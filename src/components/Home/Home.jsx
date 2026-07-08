import { useState } from "react";
import { easeInOut, motion, scale } from 'motion/react';
import { FiDollarSign, FiUsers, FiBriefcase, FiAward, FiCode, FiGlobe, FiZap, FiShield, FiArrowRight, FiStar, FiCheck, FiTrendingUp, FiHeart } from "react-icons/fi"
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

// const fadeInUp = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 15,
//             duration: 0.6
//         }
//     }
// };

const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        }
    }
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
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
                                        <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div className="flex-1" variants={scaleIn} initial="hidden" animate="visible">
                            <div className="relative">
                                <motion.div className="bg-primary/10 rounded-3xl p-8 md:p-12" animate={floatAnimation.animate} initial={floatAnimation.initial}>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-4">
                                            <motion.div className="bg-base-100 rounded-xl shadow-lg p-4" whileTap={{ scale: 1.05 }}>
                                                <FiCode className="text-primary text-2xl"></FiCode>
                                                <p className="text-sm font-medium mt-2">Development</p>
                                            </motion.div>
                                            <motion.div className="bg-base-100 rounded-xl p-4 shadow-lg" whileTap={{ scale: 1.05 }}>
                                                <FiGlobe className="text-secondary text-2xl"></FiGlobe>
                                                <p className="text-sm font-medium mt-2">Design</p>
                                            </motion.div>
                                        </div>
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

            {/* About Section */}

            <section className="bg-base-100 py-16 md:py-24">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div className="text-center mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-base-content" variants={itemVariants}>About <span className="text-primary">Us</span></motion.h2>

                        <motion.p className="text-base-content/70 max-w-2xl mx-auto mt-4" variants={itemVariants}>We're passionate about creating digital solutions that make a difference</motion.p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div className="flex-1" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="relative">

                                <motion.div className="bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl p-8" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }}>
                                    <div className="aspect-w-16 aspect-h-9 bg-base-200 rounded-xl p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="text-6xl mb-6">🚀</motion.div>
                                            <h3 className="text-2xl font-bold">Innovation at Heart</h3>
                                            <p className="text-base-content/70 mt-2">Building the future, one line of code at a time</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="absolute -bottom-4 -right-4 bg-primary text-primary-content rounded-2xl p-6 shadow-xl" animate={floatAnimation.animate} initial={floatAnimation.initial}>
                                    <FiHeart className="text-3xl"></FiHeart>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div className="flex-1 space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.h3 className="text-2xl font-bold" variants={itemVariants}>Why Choose us?</motion.h3>
                            <motion.div className="space-y-4" variants={containerVariants}>
                                {
                                    [
                                        { icon: FiUsers, text: 'Expert team with 10+ years of experience' },
                                        { icon: FiCheck, text: 'Proven track record of success' },
                                        { icon: FiStar, text: '500+ satisfied clients worldwide' },
                                        { icon: FiTrendingUp, text: 'Cutting-edge technology solutions' },
                                    ].map((item, index) => (
                                        <motion.div key={index} className="flex items-center gap-4 p-4 bg-base-200 rounded-xl" variants={itemVariants} whileHover={{ x: 10 }}>
                                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                                <item.icon className="text-2xl"></item.icon>
                                            </div>
                                            <span className="text-base-content">{item.text}</span>
                                        </motion.div>
                                    ))

                                }
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;