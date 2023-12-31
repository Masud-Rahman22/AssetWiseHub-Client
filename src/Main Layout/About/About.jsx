// import { FaAddressBook, FaFacebook, FaLinkedin } from 'react-icons/fa';
import animation1 from '../../../public/animation/Animation - 1704038935809.json'
import animation2 from '../../../public/animation/Animation - 1704040085166.json'
import gif3 from '../../../public/gif/Animation - 1700832554280.gif'
import gif4 from '../../../public/gif/Animation - 1700832579991.gif'
import gif5 from '../../../public/gif/Animation - 1700832848202.gif'
import gif6 from '../../../public/gif/Animation - 1700832897032.gif'
import Lottie from 'lottie-react'
import './About.css'
const About = () => {
    return (
        <div>
            <div className="flex flex-col-reverse justify-center items-center md:p-20 gap-10">
                <div className='flex-1 my-5 md:my-1'>
                    <Lottie className='w-[800px]' animationData={animation1}></Lottie>
                </div>
                <div className="flex-1 space-y-5">
                    <h1 className="text-[#dbeeed] font-Roboto text-3xl md:text-6xl text-center my-5 lg:my-1 lg:text-left ">Hello and Welcome to <br /> <span className="lg:ml-20 text-[#ec5349]">AssetWise Hub</span>!</h1>
                </div>
            </div>
            <div>
                <h1 className="border-2 text-4xl shadow-md p-2 lg:w-1/6 text-center text-[#dbeeed] mx-auto mb-5 md:mb-1 gradient-button">About Us</h1>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:p-20">
                    <div className="mb-5 md:mb-1">
                    <Lottie className='w-[600px]' animationData={animation2}></Lottie>
                    </div>
                    <div className="flex-1 space-y-5 mx-10">
                        <p className="text-[#dbeeed] text-2xl font-Roboto text-left md:mt-10">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we specialize in providing comprehensive asset management solutions tailored to meet the diverse needs of our clients. With a commitment to excellence and a focus on delivering results, we aim to empower individuals and businesses to achieve their financial objectives efficiently.</p> <p className="text-[#dbeeed] text-2xl font-Roboto text-left">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we prioritize building long-term relationships based on trust, reliability, and successful outcomes. Your financial success is our priority, and we are committed to providing you with the expertise and support needed to navigate the complexities of the financial landscape confidently.Join us on a journey towards financial prosperity. Let us help you unlock the full potential of your assets and secure a brighter financial future.</p>
                        <div className="grid grid-cols-2">
                        <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
                        <img className='w-[100px] h-[100px]' src={gif3} alt="" />
                            <h2 className="text-[#dbeeed]">Our Number 01820643760</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
                        <img className='w-[100px] h-[100px]' src={gif4} alt="" />
                        <h2 className="text-[#dbeeed]">Our Office Narayangonj,Dhaka</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                        <img className='w-[100px] h-[100px]' src={gif5} alt="" />
                        <h2 className="text-[#dbeeed]">@AssetWise Hub</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2">
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