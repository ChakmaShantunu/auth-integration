// Homepage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    FiHome, FiUsers, FiBriefcase, FiMail, FiPhone,
    FiMapPin, FiClock, FiAward, FiStar, FiHeart,
    FiArrowRight, FiArrowUp, FiCheck, FiMenu,
    FiX, FiGithub, FiLinkedin, FiTwitter, FiInstagram,
    FiGlobe, FiCode, FiZap, FiTrendingUp, FiShield,
    FiUser, FiSettings, FiLogOut, FiChevronDown,
    FiCalendar, FiMessageCircle, FiShare2,
    FiDollarSign, FiPackage, FiBarChart2
} from 'react-icons/fi';

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
    hidden: { y: 30, opacity: 0 },
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
            ease: "easeInOut"
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
            ease: "easeInOut"
        }
    }
};

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [counter, setCounter] = useState({ users: 0, projects: 0, awards: 0, revenue: 0 });

    // Scroll handling
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Simulate loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    // Counter animation
    useEffect(() => {
        if (!isLoading) {
            const targets = { users: 12500, projects: 340, awards: 28, revenue: 54239 };
            const duration = 2000;
            const steps = 60;
            const increment = {
                users: targets.users / steps,
                projects: targets.projects / steps,
                awards: targets.awards / steps,
                revenue: targets.revenue / steps
            };
            let current = { users: 0, projects: 0, awards: 0, revenue: 0 };
            let step = 0;

            const interval = setInterval(() => {
                step++;
                current.users = Math.min(current.users + increment.users, targets.users);
                current.projects = Math.min(current.projects + increment.projects, targets.projects);
                current.awards = Math.min(current.awards + increment.awards, targets.awards);
                current.revenue = Math.min(current.revenue + increment.revenue, targets.revenue);
                setCounter({ ...current });
                if (step >= steps) clearInterval(interval);
            }, duration / steps);

            return () => clearInterval(interval);
        }
    }, [isLoading]);

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Loading Screen
    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-20 h-20 border-4 border-white border-t-transparent rounded-full"
                />
                <motion.h1
                    className="mt-8 text-white text-2xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Loading...
                </motion.h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <section id="home" className="pt-16 md:pt-20 pb-16 md:pb-24 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Hero Content */}
                        <motion.div
                            className="flex-1 text-center lg:text-left"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FiZap className="text-sm" />
                                <span className="text-sm font-medium">Welcome to the future</span>
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight mb-6"
                                variants={itemVariants}
                            >
                                Build Amazing <br />
                                <span className="text-primary">Digital Products</span> <br />
                                With Us
                            </motion.h1>

                            <motion.p
                                className="text-base-content/70 text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
                                variants={itemVariants}
                            >
                                We combine creativity and technology to deliver exceptional digital experiences that drive results for your business.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                                variants={containerVariants}
                            >
                                <motion.button
                                    className="btn btn-primary btn-lg"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started
                                    <FiArrowRight className="ml-2" />
                                </motion.button>
                                <motion.button
                                    className="btn btn-ghost btn-lg"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                                variants={containerVariants}
                            >
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center bg-base-100/50 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-2">
                                            <stat.icon className="text-xl" />
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className="flex-1"
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="relative">
                                <motion.div
                                    className="bg-primary/10 rounded-3xl p-8 md:p-12"
                                    animate={floatAnimation.animate}
                                    initial={floatAnimation.initial}
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <motion.div
                                                className="bg-base-100 rounded-xl p-4 shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <FiCode className="text-primary text-2xl" />
                                                <p className="text-sm font-medium mt-2">Development</p>
                                            </motion.div>
                                            <motion.div
                                                className="bg-base-100 rounded-xl p-4 shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <FiGlobe className="text-secondary text-2xl" />
                                                <p className="text-sm font-medium mt-2">Design</p>
                                            </motion.div>
                                        </div>
                                        <div className="space-y-4 mt-8">
                                            <motion.div
                                                className="bg-base-100 rounded-xl p-4 shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <FiZap className="text-accent text-2xl" />
                                                <p className="text-sm font-medium mt-2">Marketing</p>
                                            </motion.div>
                                            <motion.div
                                                className="bg-base-100 rounded-xl p-4 shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <FiShield className="text-error text-2xl" />
                                                <p className="text-sm font-medium mt-2">Security</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content rounded-full p-4">
                                        <FiStar className="text-2xl" />
                                    </div>
                                </motion.div>

                                {/* Floating badges */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-success text-success-content rounded-full px-4 py-2 text-sm font-bold shadow-lg"
                                    animate={pulseAnimation.animate}
                                    initial={pulseAnimation.initial}
                                >
                                    ⭐ 5 Stars
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-secondary text-secondary-content rounded-full px-4 py-2 text-sm font-bold shadow-lg"
                                    animate={floatAnimation.animate}
                                    initial={floatAnimation.initial}
                                >
                                    🚀 Fast
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-24 bg-base-100">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-base-content"
                            variants={itemVariants}
                        >
                            About <span className="text-primary">Us</span>
                        </motion.h2>
                        <motion.p
                            className="text-base-content/70 mt-4 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            We're passionate about creating digital solutions that make a difference
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="flex-1"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <motion.div
                                    className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <div className="aspect-w-16 aspect-h-9 bg-base-200 rounded-xl p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="text-6xl mb-4"
                                            >
                                                🚀
                                            </motion.div>
                                            <h3 className="text-2xl font-bold">Innovation at Heart</h3>
                                            <p className="text-base-content/70 mt-2">Building the future, one line of code at a time</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -right-4 bg-primary text-primary-content rounded-2xl p-6 shadow-xl"
                                    animate={floatAnimation.animate}
                                    initial={floatAnimation.initial}
                                >
                                    <FiHeart className="text-3xl" />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex-1 space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-2xl font-bold"
                                variants={itemVariants}
                            >
                                Why Choose Us?
                            </motion.h3>
                            <motion.div
                                className="space-y-4"
                                variants={containerVariants}
                            >
                                {[
                                    { icon: FiUsers, text: 'Expert team with 10+ years of experience' },
                                    { icon: FiCheck, text: 'Proven track record of success' },
                                    { icon: FiStar, text: '500+ satisfied clients worldwide' },
                                    { icon: FiTrendingUp, text: 'Cutting-edge technology solutions' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-4 p-4 bg-base-200 rounded-xl"
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                            <item.icon className="text-xl" />
                                        </div>
                                        <span className="text-base-content">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-base-content"
                            variants={itemVariants}
                        >
                            Our <span className="text-primary">Services</span>
                        </motion.h2>
                        <motion.p
                            className="text-base-content/70 mt-4 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Comprehensive solutions tailored to your business needs
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                                    initial={{ x: -100 }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="relative z-10">
                                    <motion.div
                                        className={`w-14 h-14 rounded-2xl bg-${service.color}/10 text-${service.color} flex items-center justify-center mb-4`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon className="text-2xl" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                    <p className="text-sm text-base-content/70 mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="badge badge-ghost text-xs">{feature}</span>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="btn btn-ghost btn-sm mt-4 w-full"
                                        whileHover={{ x: 5 }}
                                    >
                                        Learn More
                                        <FiArrowRight className="ml-1" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 bg-base-100">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-base-content"
                            variants={itemVariants}
                        >
                            What Our <span className="text-primary">Clients Say</span>
                        </motion.h2>
                        <motion.p
                            className="text-base-content/70 mt-4 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Real stories from real people we've had the pleasure of working with
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-base-200 rounded-2xl p-6 hover:bg-base-100 transition-all shadow-lg hover:shadow-xl"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.div
                                        className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-base-content/60">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex text-primary mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar key={i} className="fill-current" />
                                    ))}
                                </div>
                                <p className="text-base-content/80 italic">"{testimonial.text}"</p>
                                <motion.div
                                    className="mt-4 flex justify-end"
                                    whileHover={{ x: 5 }}
                                >
                                    <FiMessageCircle className="text-primary" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-base-200 to-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
                                Get In <span className="text-primary">Touch</span>
                            </h2>
                            <p className="text-base-content/70 mb-8">
                                Have a project in mind? Let's talk about how we can help bring your vision to life.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: FiMail, text: 'hello@dashboard.com' },
                                    { icon: FiPhone, text: '+1 (555) 123-4567' },
                                    { icon: FiMapPin, text: '123 Digital Street, Tech City' },
                                    { icon: FiClock, text: 'Mon-Fri: 9:00 AM - 6:00 PM' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-4 p-4 bg-base-100 rounded-xl shadow-md"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                            <item.icon className="text-xl" />
                                        </div>
                                        <span className="text-base-content">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-8">
                                {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="w-12 h-12 bg-base-100 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="text-base-content/70" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.form
                            className="bg-base-100 rounded-2xl p-8 shadow-xl"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <div className="space-y-4">
                                <motion.input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered w-full"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.textarea
                                    className="textarea textarea-bordered w-full h-32"
                                    placeholder="Your Message"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.button
                                    className="btn btn-primary w-full"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                    <FiArrowRight className="ml-2" />
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-base-300 text-base-content/70 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="text-base-content font-bold mb-4">Dashboard</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base-content font-bold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Design</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Marketing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base-content font-bold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base-content font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-base-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; 2024 Dashboard. All rights reserved.</p>
                        <div className="flex gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub className="cursor-pointer" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiTwitter className="cursor-pointer" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiLinkedin className="cursor-pointer" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className="fixed bottom-8 right-8 btn btn-primary btn-circle shadow-lg z-40"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                    >
                        <FiArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Homepage;