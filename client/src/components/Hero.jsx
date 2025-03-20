import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container 2xl:px-20 py-10 mx-auto'>
        <div>
            <h2>Over 10,000+ Jobs to Apply</h2>
            <p>Transform Your Tomorrow: Explore Top Job Opportunities and Make Your Next Big Move!
            </p>
            <div>
                <div>
                    <img loading="lazy" src={assets.search_icon} alt="" />
                    <input type="text"
                    placeholder = "Search for Jobs"
                    className='max-sm:text-xs p-2 rounded outline-none w-full' />
                </div>
                <div>
                    <img loading="lazy" src={assets.location_icon} alt="" />
                    <input type="text"
                    placeholder = "Search Location"
                    className='max-sm:text-xs p-2 rounded outline-none w-full' />
                </div>
                <button>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero