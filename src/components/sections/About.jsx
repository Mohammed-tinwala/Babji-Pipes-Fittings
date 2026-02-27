import React, { useState } from 'react'
import { Factory, Wrench, Package, Fuel, Ship, Truck } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { COMPANY_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {

    // CORE_CAPABILITIES
    const CORE_CAPABILITIES = [
        { name: 'Pipes & Fittings', icon: Wrench, color: '#3B82F6' },
        { name: 'Valves & Accessories', icon: Package, color: '#22C55E' },
        { name: 'Oil Field Supplies', icon: Fuel, color: '#F59E0B' },
        { name: 'Marine Products', icon: Ship, color: '#0EA5E9' },
        { name: 'Industrial Trading', icon: Factory, color: '#A855F7' },
        { name: 'Reliable Delivery', icon: Truck, color: '#EF4444' },
    ];


    return (
        <section id='about' className='relative py-20 bg-black overflow-hidden'>
            <RadialGradientBackground variant='about' />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Main Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                    {/* Left Column - Content */}
                    <div className='flex flex-col gap-12'>
                        <div className='flex flex-col gap-8'>
                            <FadeIn delay={60}>
                                <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                    <Factory className='w-4 h-4 text-primary' />
                                    <span className='text-sm font-medium text-primary'>
                                        About Us
                                    </span>
                                    {/* <Sparkles className='w-4 h-4 text-primary' /> */}
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className='text-4xl lg:text-5xl text-white font-normal leading-tight'>Driven by Quality, <br /> Trusted by Industry.</h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className='flex flex-col gap-4'>
                                    {COMPANY_INFO.description.map((paragraph, index) => (
                                        <p key={index} className='text-base text-white/70 leading-relaxed'>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={300}>
                            <div className='grid grid-cols-3 gap-8'>
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className='relative'>
                                        <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                                        <div className='text-3xl font-normal text-white mb-2 font-mono'>
                                            {stat.value}
                                        </div>
                                        <p className='text-sm text-white/60 leading-snug'>
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                onClick={() => window.open(COMPANY_INFO.resume, '_blank')}
                                className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black text-base font-medium px-8 py-4 rounded-full transition-all duration-300 w-fit cursor-pointer group'
                            >
                                {/* <Download className='w-5 h-5 group-hover:translate-y-0.5 transition transform duration-300' /> */}
                                Learn More
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column - Info Grid  */}
                    <FadeIn delay={200}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-span-2 relative group'>
                                <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='flex items-start gap-4'>
                                        <div className='p-3 bg-primary/10 rounded-xl'>
                                            <Wrench className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Our Expertise</h3>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                Specialized in supplying high-quality pipes, fittings, valves, and camlocks for oil field, marine, and industrial applications with reliable service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300">
                                    <div className="w-full h-40 rounded-xl overflow-hidden">
                                        <img
                                            src="/images/about1.png"
                                            alt="Industrial valves and fittings"
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300">
                                    <div className="w-full h-40 rounded-xl overflow-hidden">
                                        <img
                                            src="/images/about3.png"
                                            alt="Industrial valves and fittings"
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-2 relative group'>
                                <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-30'></div>
                                <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                    <div className='grid grid-cols-3 gap-6 text-center'>
                                        <div>
                                            <div className='text-2xl font-bold text-primary mb-1'>100%</div>
                                            <div className='text-xs text-white/60'>Client Satisfaction</div>
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold text-primary mb-1'>24/7</div>
                                            <div className='text-xs text-white/60'>Support Available</div>
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold text-primary mb-1'>Fast</div>
                                            <div className='text-xs text-white/60'>Delivery Time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Capablity and Grid Section */}
                <FadeIn delay={500}>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='text-center'>
                            <h3 className="text-2xl font-normal text-white mb-2">What We Supply</h3>
                            <p className="text-sm text-white/60 mb-2">
                                A wide range of pipes, fittings, valves, and industrial products delivered with reliability.
                            </p>
                        </div>


                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl'>
                            {CORE_CAPABILITIES.map((capablity, index) => (
                                <div key={index} className='group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'>
                                    <capablity.icon className='text-3xl text-primary' />
                                    <div className='text-sm text-center text-white/80 font-medium'>
                                        {capablity.name}
                                    </div>
                                    {/* Hover glow effect */}
                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section >
    )
}

export default About
