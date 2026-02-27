import { useState } from 'react'
import { ChevronDown, Star,Factory } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { COMPANY_INFO, STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const Hero = () => {
    return (
        <section id='home' className="relative min-h-screen flex items-center overflow-hidden">
            <RadialGradientBackground variant="hero" />

            {/* Content Container */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* Left Column - Content */}
                    <div className='text-left'>
                        <FadeIn delay={0}>
                            <div className='inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 mt-4 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full'>
                                <Factory className='w-4 h-4 text-white' />
                                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                                    {COMPANY_INFO.name} | Based in {COMPANY_INFO.location.split(',').map(s => s.trim()).slice(-2).join(', ')}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight'>
                                Oil field, pipe fittings & marine products.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className='text-lg text-white/70 max-w-[550px] mb-8'>
                                Providing a complete range of fittings, valves, and camlocks with trusted quality at reasonable prices.
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button onClick={() => scrollToSection('contact')}
                                className="inline-flex items-center gap-0 mb-12 group"
                            >
                                <div className='relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white'>
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-full'>
                                {STATS.map((stat, index) => (
                                    <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0" >
                                        <div className="text-2xl font-normal text-primary mb-[8px] font-mono" >
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white leading-snug">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Coloumn - Developer Image */}
                    <FadeIn delay={200}>
                        <div className='relative'>
                            <div className='relative overflow-hidden rounded-2xl aspect-8/9 max-w-[500px] ml-auto group'>
                                <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                                    <div className='absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl '></div>
                                </div>

                                {/* Image container */}
                                <div className='relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]'>
                                    <img
                                        src="/images/Hero5.png"
                                        alt="Babji Pipes & Fittings"
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div >
            </div >

            {/* Scroll Indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
                aria-label='scroll down'
            >
                <ChevronDown className='w-8 h-8 text-primary' />
            </button>
        </section >
    )
}

export default Hero
