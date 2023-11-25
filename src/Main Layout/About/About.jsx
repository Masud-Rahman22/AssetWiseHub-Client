import Lottie from "lottie-react";
import animation from '../../../public/Animation - 1700827940678.json'
import animation2 from '../../../public/Animation - 1700830360274.json'
import social from '../../../public/Animation - 1700832554280.json'
import social2 from '../../../public/Animation - 1700832579991.json'
import social3 from '../../../public/Animation - 1700832848202.json'
import social4 from '../../../public/Animation - 1700832897032.json'
const About = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <Lottie className="flex-1" animationData={animation}></Lottie>
                <div className="flex-1 space-y-5">
                    <h1 className="text-[#dbeeed] font-Roboto text-6xl text-left">Hello and Welcome to <span className="text-[#ec5349]">AssetWise Hub</span>!</h1>
                </div>
            </div>
            <div>
                <h1 className="border-2 text-4xl shadow-md p-2 md:w-1/6 text-center text-[#dbeeed] mx-auto">About Us</h1>
                <div className="flex flex-row-reverse items-center justify-center">
                    <div className="">
                        <Lottie className="w-[800px] h-[800px]" animationData={animation2}></Lottie>
                    </div>
                    <div className=" space-y-5 ml-10">
                        <p className="text-[#dbeeed] text-2xl font-Roboto text-left">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we specialize in providing comprehensive asset management solutions tailored to meet the diverse needs of our clients. With a commitment to excellence and a focus on delivering results, we aim to empower individuals and businesses to achieve their financial objectives efficiently.</p> <p className="text-[#dbeeed] text-2xl font-Roboto text-left">At <span className='text-[#ec5349]'>AssetWise Hub</span>, we prioritize building long-term relationships based on trust, reliability, and successful outcomes. Your financial success is our priority, and we are committed to providing you with the expertise and support needed to navigate the complexities of the financial landscape confidently.Join us on a journey towards financial prosperity. Let us help you unlock the full potential of your assets and secure a brighter financial future.</p>
                        <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <Lottie className="w-[100px] h-[100px]" animationData={social}></Lottie>
                            <h2 className="text-[#dbeeed]">Our Number 01820643760</h2>
                        </div>
                        <div className="flex items-center">
                        <Lottie className="w-[100px] h-[100px]"  animationData={social2}></Lottie>
                        <h2 className="text-[#dbeeed]">Our Office Narayangonj,Dhaka</h2>
                        </div>
                        <div className="flex items-center">
                        <Lottie className="w-[100px] h-[100px]"  animationData={social3}></Lottie>
                        <h2 className="text-[#dbeeed]">@AssetWise Hub</h2>
                        </div>
                        <div className="flex items-center">
                        <Lottie className="w-[100px] h-[100px]"  animationData={social4}></Lottie>
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