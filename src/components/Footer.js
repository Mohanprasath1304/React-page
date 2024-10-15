import Logo from '../assets/logo1.png';
import face from '../assets/face.png';
import twit from '../assets/twit.png';
import link from '../assets/link.png';
import pin from '../assets/pin.png';
export default function Card(){
    return <footer class=" relative bg-gradient-to-r from-indigo-900 to-blue-800 text-white xl:pt-40 pt-20 pb-10 pl-20 pr-10 leading-loose">
    <div class=" xl:absolute bg-white xl:pt-10 xl:pb-10 xl:pl-12 xl:pr-32 xl: xl:items-center xl:justify-between xl:-mb-[700px] xl:-mt-[240px] xl:-ml-2 shadow-lg border border-gray-500  rounded-[10px] hidden md:block ">
    <div class="max-w-xl flex-wrap">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Looking For Business Opportunity?</h2>
      <p class="text-gray-500">Lorem Ipsum is simply dummy the industry’s standard dummy text.</p>
    </div>
    <div className='xl:ml-[550px] xl:-mt-[60px]'>
      <a href="https://softek.radiantthemes.com/" class="box-class">
         Get In Touch
      </a>
    </div>
  </div>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 ">
        <div>
        <img className='mb-5' src={Logo} alt='https://softek.radiantthemes.com'/>
            <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <div class="flex space-x-4">
            <img className='mb-5 w-9 h-9' src={face} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={twit} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={link} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={pin} alt='https://softek.radiantthemes.com'/>
            </div>
        </div>
       
        <div className="xl:pl-20 xl:pt-2">
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Home</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">About Us</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Services</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Contact Us</a></li>
            </ul>
        </div>
        
        <div class="xl:ml-4 xl:-mr-5 xl:pt-2 ">
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <p className='pa'>121 King St, Melbourne</p>
            <p>VIC 3000, Australia</p>
            <p>Email: <a href="mailto:info@example.com" class="hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+18881235678" class="hover:underline">+1 (888) 123-5678</a></p>
        </div>
        
        <div className="pr-5 pt-2 ">
            <h3 class="text-xl font-semibold mb-4">Subscribe</h3>
            <p class="mb-4">Follow our newsletter to stay updated about us.</p>
            <form class="flex">
                <input type="email" placeholder="Email Address" class="w-full p-3 rounded-l-md text-black" />
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-md">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    </div>
    <hr class='border-blue-600'></hr>
    <div class="mt-5 text-center text-gray-400">
        
        <p>2021 RadiantThemes. All Rights Reserved.</p>
    </div>
    
</footer>
}