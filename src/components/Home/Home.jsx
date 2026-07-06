import { useState } from "react";
import { motion } from 'motion/react';
import { FiDollarSign, FiUsers, FiBriefcase, FiAward, FiCode, FiGlobe, FiZap, FiShield, FiArrowRight } from "react-icons/fi"

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
        <div>

            {/* Hero Section */}
            <section>
                <div>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Hero Content */}
                        <div>
                            <div>
                                <FiZap className="text-sm" />
                                <span>Welcome to the future</span>
                            </div>

                            <h1>
                                Build Amazing <br />
                                <span className="text-primary">Digital Products</span> <br />
                                With Us
                            </h1>

                            <p>We combine creativity and technology to deliver exceptional digital experiences that drive results for your business.</p>

                            <div>
                                <button>Get Started
                                    <FiArrowRight className="ml-2" />
                                </button>
                                <button>
                                    Learn More
                                </button>
                            </div>

                            {/* stats */}
                            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" variants={containerVariants}>
                                {statsData.map((stat, index) => (
                                    <motion.div key={index} className="bg-base-50/100 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
                                        <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-primary gap-2">
                                            <stat.icon></stat.icon>
                                            {stat.value}
                                        </div>
                                        <div>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>


                        {/* Hero Image */}
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;