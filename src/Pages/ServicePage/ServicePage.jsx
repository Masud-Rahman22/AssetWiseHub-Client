// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { loadStripe } from "@stripe/stripe-js";

// import { motion } from "framer-motion"
// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const ServicePage = () => {
    return (
        <div className="h-[70vh]">
            <p className="text-center text-[#dbeeed] font-Roboto text-2xl md:w-1/2 my-10 mx-auto"><span className="text-3xl text-[#ec5349]">Welcome to our secure payment page!</span> Your transaction is protected by state-of-the-art encryption technology to ensure the safety and confidentiality of your financial information</p>
            <div>
            {/* <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements> */}
            </div>
        </div>
    );
};

export default ServicePage;
{/* <div>
            <div>
                <p className="text-center text-[#dbeeed] font-Roboto text-2xl md:w-1/2 my-10 mx-auto"><span className="text-3xl text-[#ec5349]">Welcome to our secure payment page!</span> Your transaction is protected by state-of-the-art encryption technology to ensure the safety and confidentiality of your financial information</p>
                <h1 className="border-2 text-4xl shadow-md p-2 md:w-1/6 text-center text-[#dbeeed] mx-auto">Packages</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 lg:ml-28">
                <motion.div whileHover={{ scale: 0.9 }} className="skeleton relative flex w-full max-w-[20rem] flex-col rounded-xl bg-[#ec5349] h-fit text-[#dbeeed] bg-clip-border p-8 shadow-md">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            standard
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>5
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Maximum 5 Employees
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 0.9 }} className="skeleton relative flex w-full max-w-[20rem] flex-col rounded-xl bg-[#ec5349] h-fit text-[#dbeeed] bg-clip-border p-8 shadow-md">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Premium
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>8
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Maximum 10 Employees
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 0.9 }} className="skeleton relative flex w-full max-w-[20rem] flex-col rounded-xl bg-[#ec5349] h-fit text-[#dbeeed] bg-clip-border p-8 shadow-md">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Logistical
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>15
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Maximum 20 Employees
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </div> */}