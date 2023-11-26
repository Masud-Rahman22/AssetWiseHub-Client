// import { FaAddressBook, FaFacebook, FaLinkedin } from 'react-icons/fa';
import pic1 from '../../../public/about/2672335.jpg'
import pic2 from '../../../public/about/3026238.jpg'
import gif3 from '../../../public/gif/Animation - 1700832554280.gif'
import gif4 from '../../../public/gif/Animation - 1700832579991.gif'
import gif5 from '../../../public/gif/Animation - 1700832848202.gif'
import gif6 from '../../../public/gif/Animation - 1700832897032.gif'
const About = () => {
    return (
        <div>
            <div className="flex justify-center items-center md:p-20">
                <div className='flex-1'>
                    <img className='md:w-[500px] md:h-[500px]' src={pic1} alt="" />
                </div>
                <div className="flex-1 space-y-5">
                    <h1 className="text-[#dbeeed] font-Roboto text-6xl text-left">Hello and Welcome to <span className="text-[#ec5349]">AssetWise Hub</span>!</h1>
                </div>
            </div>
            <div>
                <h1 className="border-2 text-4xl shadow-md p-2 md:w-1/6 text-center text-[#dbeeed] mx-auto">About Us</h1>
                <div className="flex flex-row-reverse items-center justify-center md:p-20">
                    <div className="">
                        <img className='w-[600px] h-[650px]' src={pic2} alt="" />
                    </div>
                    <div className="flex-1 space-y-5 mx-10">
                        <p className="text-[#dbeeed] text-2xl font-Roboto text-left">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we specialize in providing comprehensive asset management solutions tailored to meet the diverse needs of our clients. With a commitment to excellence and a focus on delivering results, we aim to empower individuals and businesses to achieve their financial objectives efficiently.</p> <p className="text-[#dbeeed] text-2xl font-Roboto text-left">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we prioritize building long-term relationships based on trust, reliability, and successful outcomes. Your financial success is our priority, and we are committed to providing you with the expertise and support needed to navigate the complexities of the financial landscape confidently.Join us on a journey towards financial prosperity. Let us help you unlock the full potential of your assets and secure a brighter financial future.</p>
                        <div className="grid grid-cols-2">
                        <div className="flex items-center gap-2 mb-5">
                        <img className='w-[100px] h-[100px]' src={gif3} alt="" />
                            <h2 className="text-[#dbeeed]">Our Number 01820643760</h2>
                        </div>
                        <div className="flex items-center gap-2 mb-5">
                        <img className='w-[100px] h-[100px]' src={gif4} alt="" />
                        <h2 className="text-[#dbeeed]">Our Office Narayangonj,Dhaka</h2>
                        </div>
                        <div className="flex items-center gap-2">
                        <img className='w-[100px] h-[100px]' src={gif5} alt="" />
                        <h2 className="text-[#dbeeed]">@AssetWise Hub</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className='w-[100px] h-[100px]' src={gif6} alt="" />
                        <h2 className="text-[#dbeeed]">@AssetWiseHub</h2>
                        </div>
                    </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
};

export default About;