
import slider1 from '../../../public/banner images/business-people-working-with-ipad-high-angle.jpg'
import slider2 from '../../../public/banner images/cropped-frontview-businessman-working-place-restaurant-with-laptop-cellphone-diagrams-latte.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation} from 'swiper/modules';
import { NavLink } from 'react-router-dom';
const Banner = () => {
    
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper md:h-screen"
            >
                <SwiperSlide>
                    <div className="slide-content relative">
                        <div className='absolute flex flex-col justify-start md:justify-center items-center space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-screen' data-aos="fade-up">
                            <h1 className='text-[#dbeeed] text-xl md:text-3xl lg:text-6xl'>Manage Your Assets <span className='text-[#ec5349]'>Wisely</span></h1>
                            <p className='text-[#dbeeed] text-xs lg:text-xl md:w-1/2 text-center font-Roboto'>Discover tailored asset management solutions to optimize your investments. Our team at <span className='text-[#ec5349] font-Roboto'>[AssetWiseHub]</span> specializes in personalized strategies for individuals and businesses. From investment advisory to comprehensive portfolio analysis and risk assessment, we prioritize your financial goals. Transparency and integrity define our approach, empowering clients with knowledge for informed decision-making. Our commitment is to guide you through the intricacies of the financial landscape.
                            </p>
                            <p className='text-[#dbeeed] text-xl lg:text-4xl font-Roboto'><span className='text-[#ec5349]'>Invest Smart</span>.Grow Wealth</p>
                            <NavLink to='/employeeForm'>
                            <motion.button whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                    whileTap={{ scale: 0.9 }} className='btn bg-[#ec5349] rounded-lg border-none text-[#dbeeed] hover:bg-[#f71404]'>JOIN AS AN Employee</motion.button>
                            </NavLink>
                        </div>
                        <img src={slider1} alt="Slide 1 Image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='absolute flex flex-col justify-start md:justify-center items-center space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)] h-screen' data-aos="fade-up">
                            <h1 className='text-[#dbeeed] md:text-3xl lg:text-6xl'>Manage Your Assets <span className='text-[#ec5349]'>Wisely</span></h1>
                            <p className='text-[#dbeeed] text-base lg:text-xl md:w-1/2 text-center font-Roboto'>Discover tailored asset management solutions to optimize your investments. Our team at <span className='text-[#ec5349] font-Roboto'>[AssetWiseHub]</span> specializes in personalized strategies for individuals and businesses. From investment advisory to comprehensive portfolio analysis and risk assessment, we prioritize your financial goals. Transparency and integrity define our approach, empowering clients with knowledge for informed decision-making. Our commitment is to guide you through the intricacies of the financial landscape.
                            </p>
                            <p className='text-[#dbeeed] text-xl lg:text-4xl font-Roboto'><span className='text-[#ec5349]'>Invest Smart</span>.Grow Wealth</p>
                            <NavLink to='/adminForm'>
                                <motion.button whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                    whileTap={{ scale: 0.9 }} className='btn bg-[#ec5349] rounded-lg border-none text-[#dbeeed] hover:bg-[#f71404]'>JOIN AS AN HR/Admin</motion.button>
                            </NavLink>
                        </div>
                        <img src={slider2} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Banner;