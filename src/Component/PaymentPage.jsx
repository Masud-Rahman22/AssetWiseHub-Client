import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPageCheckout from "./PaymentPageCheckout";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const PaymentPage = () => {
    const info = useLoaderData()
    console.log(info);
    return (
        <div className="h-[70vh]">
            <p className="text-center text-[#dbeeed] font-Roboto text-2xl md:w-1/2 my-10 mx-auto"><span className="text-3xl text-[#ec5349]">Welcome to our secure payment page!</span> Your transaction is protected by state-of-the-art encryption technology to ensure the safety and confidentiality of your financial information</p>
            <div>
            <Elements stripe={stripePromise}>
                    <PaymentPageCheckout></PaymentPageCheckout>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;