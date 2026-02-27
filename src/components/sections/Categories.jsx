import React from 'react'
import { Factory, Briefcase } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'

const Categories = ({ categories = PRODUCT_CATEGORIES }) => {
    return (
        <section id='categories' className='relative py-20 bg-black overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute top-1/3 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={0}>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Factory className='w-4 h-4 text-primary' />
                            <span className='text-sm font-medium text-primary'>Categories</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl text-white font-normal mb-4">
                            Our Product Categories
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Explore a carefully selected range of pipes, fittings, valves, and industrial products designed to meet oil field, marine, and industrial project requirements.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={120}>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {categories.map((cat, idx) => (
                            <div
                                key={cat.id ?? idx}
                                className='group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300'
                            >
                                <div className='p-4 aspect-[4/3] w-full bg-white/5'>
                                    <img
                                        src={cat.image}
                                        alt={cat.label}
                                        className='w-full h-full object-contain'
                                    />
                                </div>

                                <div className='absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent'>
                                    <div className='w-full text-center'>
                                        <div className='text-white text-lg font-semibold'>{cat.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Categories
