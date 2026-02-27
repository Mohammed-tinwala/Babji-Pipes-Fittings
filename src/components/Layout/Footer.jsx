import React from 'react'
import { Github, Linkedin, Twitter, Dribbble, Mail, MapPin, Heart, Phone,  } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter,
        dribble: Dribbble
    }


    return (
        <footer className='relative bg-black overflow-hidden border-t border-white/10'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
                <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
                    <FadeIn delay={0}>
                        <div>
                            <div className='mb-4'>
                                <img
                                    src={COMPANY_INFO.logo}
                                    alt={COMPANY_INFO.name}
                                    className='w-20 h-auto object-contain'
                                />
                            </div>
                            <p className='text-white/60 text-sm mb-6 leading.relaxed'>
                                {COMPANY_INFO.tagline}
                            </p>
                            <div className='space-y-3'>
                                <a
                                    href={`mailto:${COMPANY_INFO.contact.email}`}
                                    className='group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg'>
                                        <Mail className='w-4 h-4 text-primary' />
                                    </div>
                                    <span className='text-white/70 text-sm group-hover:text-white transition-colors'>
                                        {COMPANY_INFO.contact.email}
                                    </span>
                                </a>

                                <div className='flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'>
                                    <div className='p-2 bg-primary/10 rounded-lg'>
                                        <MapPin className='w-4 h-4 text-primary' />
                                    </div>
                                    <span className='text-white/70 text-sm'>
                                        {COMPANY_INFO.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div>
                            <h4 className='text-white font-semibold mb-6 text-lg'>Quick Links</h4>
                            <ul className='space-y-3'>
                                {NAV_LINKS.map((link) => (
                                    <li
                                        key={link.id}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className='group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300'
                                        >
                                            <div className='w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300' />
                                            <span className='text-sm'>{link.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div>
                            <h4 className='text-white font-semibold mb-6 text-lg'>Products</h4>
                            <ul className='space-y-3 h-58 overflow-scroll overflow-x-hidden'>
                                {PRODUCT_CATEGORIES.map((product) => (
                                    <li
                                        key={product.id}
                                    >
                                        <button
                                            onClick={() => scrollToSection(product.id)}
                                            className='group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300'
                                        >
                                            <div className='w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300' />
                                            <span className='text-sm'>{product.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>



                    {/* <FadeIn delay={200}>
                        <div className='space-y-8'>
                            <div className='space-y-4'>
                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-2 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-lg'>
                                            <Phone className='w-4 h-4 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-xs text-white/60 mb-1'>Phone</p>
                                            <a
                                                href={`mailto:${COMPANY_INFO.contact.phone1}`}
                                                className='text-white text-sm hover"text-[#A8FF8D] transition-colors font-medium'
                                            >
                                                {COMPANY_INFO.contact.phone1} , {COMPANY_INFO.contact.phone2}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                                </div>

                                <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-2 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-lg'>
                                            <FaWhatsapp className='w-4 h-4 text-primary' />
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-xs text-white/60 mb-1'>Whatsapp</p>
                                            <a
                                                href={`mailto:${COMPANY_INFO.contact.phone1}`}
                                                className='text-white text-sm hover"text-[#A8FF8D] transition-colors font-medium'
                                            >
                                                {COMPANY_INFO.contact.phone1}
                                            </a>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none' />
                                </div>
                            </div>
                        </div>
                    </FadeIn> */}
                </div>

                <FadeIn delay={300}>
                    <div className='pt-8 border-t border-white/10'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                            <p className='text-white/50 text-sm'>
                                © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                            </p>
                            <p className='flex items-center gap-2 text-white/50 text-sm'>
                                Developed by <Heart className='w-4 h-4 text-primary fill-primary animate-pulse' /> <span className=' text-primary font-medium'>Doorstep Services</span>.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    )
}

export default Footer
