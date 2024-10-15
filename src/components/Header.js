import { useState } from 'react';
import Cart from '../assets/cart.png';
import Logo from '../assets/logo1.png';
import Search from '../assets/search.png';
import { Bars3Icon} from '@heroicons/react/24/solid';
export default function Header(){
    const [toggleMenu , setToggleMenu] = useState(false)
    return <section >
    <div className="bg-gradient-to-r from-indigo-900 to-blue-700 text-white pr-5"><header className="flex justify-between px-3 bg-primary pt-6 text-xl">
<a className="mx-9"href="ll"><img src={Logo} alt='https://softek.radiantthemes.com'/></a>
<nav className='hidden md:block '>
<ul className="flex text-white ">
    <li className='my-3 mr-2'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Home 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

        <ul class="flex ">
            <li class="relative group mt-3">
                <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
                    <a href="https://softek.radiantthemes.com/about-us-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-02</a>
                    <a href="https://softek.radiantthemes.com/services-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-01</a>
                    <a href="https://softek.radiantthemes.com/services-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-02</a>
                    <a href="https://softek.radiantthemes.com/services-03/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-03</a>
                    <a href="https://softek.radiantthemes.com/why-choose-us/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Why Choose Us</a>
                    <a href="https://softek.radiantthemes.com/team/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Team</a>
                    <a href="https://softek.radiantthemes.com/pricing/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Pricing</a>
                    <a href="https://softek.radiantthemes.com/404" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">404 Page</a>
                </div>
            </li>
        </ul>
</div>
    <li className='my-3 mr-1 '>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Portfolio
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Blog
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Shop
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className="mr-1 my-3">
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Contact
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li><img class='cart' src={Cart} alt='https://softek.radiantthemes.com/cart/'/></li>
    <li><img className='w-5 my-4 mr-8' src={Search} alt='https://softek.radiantthemes.com/'/></li>
</ul>






</nav>
{toggleMenu && <nav className='block md:hidden block'>
<ul className="col-class">
    <li className='my-3 mr-2'>
    <a href="tt" class="text-white-100  inline-flex items-center">
    Home 
                    <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

        <ul class="flex ">
            <li class="relative group mt-3">
                <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
                    <a href="https://softek.radiantthemes.com/about-us-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-02</a>
                    <a href="https://softek.radiantthemes.com/services-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-01</a>
                    <a href="https://softek.radiantthemes.com/services-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-02</a>
                    <a href="https://softek.radiantthemes.com/services-03/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-03</a>
                    <a href="https://softek.radiantthemes.com/why-choose-us/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Why Choose Us</a>
                    <a href="https://softek.radiantthemes.com/team/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Team</a>
                    <a href="https://softek.radiantthemes.com/pricing/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Pricing</a>
                    <a href="https://softek.radiantthemes.com/404" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">404 Page</a>
                </div>
            </li>
        </ul>
</div>
    <li className='my-3 mr-1 '>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Portfolio
                    <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Blog
                    <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Shop
                    <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className="mr-1 my-3">
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Contact
                    <svg class="w-4 h-4  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    
</ul>
</nav>}
<img class='w-5 h-5 mt-4 block md:hidden block' src={Cart} alt='https://softek.radiantthemes.com/cart/'/>
    <img className='w-5 my-4 mr-4 ml-5 block md:hidden block' src={Search} alt='https://softek.radiantthemes.com/'/>
<button onClick={() => setToggleMenu(!toggleMenu)}className='block md:hidden block'><Bars3Icon className='text-white h-8'/></button>

</header>
</div>
</section>

}