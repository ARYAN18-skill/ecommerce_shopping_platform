import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_lfr_lfr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt=""/>
       <p className= 'w-full md:w 2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus adipisci alias repellendus reiciendis rem quisquam atque iure facere molestiae? Unde, ea accusantium. Autem nostrum magnam animi ratione consequuntur voluptates!</p>       
      
      </div>
      <div>
        <p className ='text-x1 font-medium mb-5'>COMPANY</p>
        <ul className ='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li> About US</li>
            <li> Delivery</li>
            <li> Privacy Policy</li>

        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 7676765445</li>
            <li> contact@forevryoneforyou</li>
             </ul>
      </div>

    </div>
    <div> 
       <hr />
       <p className='py-5 text-sm text-center'> COPYRIGHT2024@forever.com-ALL RUGHTS ARE RESERVED</p> 
    </div>
    </div>
  )
}

export default Footer
