import React from 'react'
import { Mail, BookOpen, TrendingUp } from 'lucide-react'


const ProductCard = ({ product }) => {
  const { title, description, image, category, metrics, material, catalogUrl, enquiryUrl } = product;

  return (
    <div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>
      <div className='relative h-64 overflow-hidden p-4'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'
        />

        <div className='absolute inset-0 bg-linear-to-t from-black via-black/60 to transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300' />

        <div className='absolute bottom-4 right-4 flex items-center gap-3'>
          {catalogUrl && (
            <a
              href={catalogUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110'
              title='Contact Us'
            >
              <Mail className='w-4 h-4 text-white'/>
            </a>
          )}
          {enquiryUrl && (
            <a
              href={enquiryUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110'
              title='View Catalogue'
            >
              <BookOpen className='w-4 h-4 text-white' />
            </a>
          )}
        </div>

        <div className='absolute top-4 left-4'>
          <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full'>
            {material}
          </span>
        </div>
      </div>

      <div className='p-6 space-y-4'>
        <div>
          <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-color duration-300'>
            {title}
          </h3>
          <p className='text-white /60 text-sm leadinf-relaxed line-clamp-2'>
            {description}
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
            <span className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-color duration-200'>
              {category}
            </span>
        </div>

        {metrics && (
          <div className='flex items-center gap-2 pt-3 border-t border-white/10'>
            <TrendingUp className='w-4 h-4 text-green-400' />
            <p className='text-sm font-medium text-green-400'>{metrics}</p>
          </div>
        )}
      </div>
    </div>

  )
}

export default ProductCard;
