import React, { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, Phone } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullname, email, phone, subject, message } = formData;

        // Basic validation
        if (!fullname || !email || !phone || !subject || !message) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[0-9+\-\s]{8,15}$/;
        if (!phoneRegex.test(phone)) {
            setStatus({ type: 'error', message: 'Please enter a valid phone number.' });
            return;
        }

        // Success
        setStatus({
            type: 'success',
            message: 'Your enquiry has been submitted successfully. Our team will contact you shortly.',
        });

        // Reset form
        setFormData({
            fullname: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });

        // Clear status after 5s
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter
    };
    return (
        <section id='contact' className='relative py-20 bg-black overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
                <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 opacity-20 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={0}>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <MessageSquare className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>
                                Contact Us
                            </span>
                        </div>

                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Let’s Discuss Your Products Requirements
                        </h2>

                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                            Looking for pipes, valves, or fittings? Share your requirement list with us for
                            competitive pricing, quick dispatch, and dependable supply support.
                        </p>
                    </div>
                </FadeIn>

                <div className='grid md:grid-cols-2 gap-12'>
                    <FadeIn delay={100}>
                        <div className='bg-white/5 border border-white/10 rounded-2xl p-8'>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullname" className='block text-sm font-medium text-white/80 mb-2'>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id='fullname'
                                        name='fullname'
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
                                        placeholder='Enter your full name'
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-white/80 mb-2'>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
                                        placeholder='your.email@example.com'
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className='block text-sm font-medium text-white/80 mb-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
                                        placeholder='+91 XXXXX XXXXX'
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className='block text-sm font-medium text-white/80 mb-2'>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300'
                                        placeholder='Product enquiry / Bulk order / Catalogue request'
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className='block text-sm font-medium text-white/80 mb-2'>
                                        Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none'
                                        placeholder='Please mention product name, size, quantity, and delivery location'
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group'
                                >
                                    <span>Send Enquiry</span>
                                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                </button>

                                {/* Status Message */}
                                {status.message && (
                                    <div
                                        className={`p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                            }`}
                                    >
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn delay={200}>
                        <div className='space-y-8'>
                            <div>
                                <div>
                                    <h3 className='text-2xl font-semibold text-white mb-4'>
                                        Connect With Our Sales Team
                                    </h3>
                                    <p className='text-white/60 leading-relaxed'>
                                        Reach out to us for product enquiries, bulk orders, or technical assistance.
                                        Our team is ready to support your piping and industrial material requirements.
                                    </p>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl'>
                                            <Phone className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm text-white/60 mb-1'>Phone</p>
                                            <a
                                                href={`mailto:${COMPANY_INFO.contact.phone1}`}
                                                className='text-white hover"text-[#A8FF8D] transition-colors font-medium'
                                            >
                                                {COMPANY_INFO.contact.phone1} , {COMPANY_INFO.contact.phone2}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                                </div>

                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl'>
                                            <FaWhatsappSquare className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm text-white/60 mb-1'>Whatsapp</p>
                                            <a
                                                href={`mailto:${COMPANY_INFO.contact.phone1}`}
                                                className='text-white hover"text-[#A8FF8D] transition-colors font-medium'
                                            >
                                                {COMPANY_INFO.contact.phone1}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                                </div>

                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl'>
                                            <Mail className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm text-white/60 mb-1'>Email</p>
                                            <a
                                                href={`mailto:${COMPANY_INFO.contact.email}`}
                                                className='text-white hover"text-[#A8FF8D] transition-colors font-medium'
                                            >
                                                {COMPANY_INFO.contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                                </div>

                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl'>
                                            <MapPin className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm text-white/60 mb-1'>Location</p>
                                            <p className='text-white font-medium'>{COMPANY_INFO.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <p className='text-sm text-white/60 mt-8'>Connect with me</p>
                            <div className='flex gap-4'>
                                {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                                    const Icon = socialIcons[platform];
                                    return Icon ? (
                                        <a
                                            key={platform}
                                            href={url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='p-4 bg-white/5 rounded-xl border mt-2 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group'
                                        >
                                            <Icon className='w-6 h-6 text-white/60 group-hover:text-primary transition-colors' />
                                        </a>
                                    ) : null;
                                })}
                            </div>
                        </div> */}
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Contact
