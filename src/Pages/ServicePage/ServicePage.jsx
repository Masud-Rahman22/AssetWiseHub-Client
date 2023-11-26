import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const ServicePage = () => {
    return (
        <div className="h-[70vh]">
            <p className="text-center text-[#dbeeed] font-Roboto text-2xl md:w-1/2 my-10 mx-auto"><span className="text-3xl text-[#ec5349]">Welcome to our secure payment page!</span> Your transaction is protected by state-of-the-art encryption technology to ensure the safety and confidentiality of your financial information</p>
            <div>
            <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default ServicePage;