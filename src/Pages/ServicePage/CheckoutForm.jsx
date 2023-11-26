import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
// const elements = useElements();
const CheckoutForm = () => {
    const [error, setError] = useState()
    const [adminInfo,setAdminInfo] = useState(false)
    const [clientSecret,setClientSecret] = useState('')
    const [price,setPrice] = useState(0)
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    useEffect(()=>{
        axiosSecure.get('/adminInfo')
        .then(res =>{
            setAdminInfo(res.data)
        })
    },[axiosSecure])
    console.log(adminInfo);
    useEffect(()=>{
        if(adminInfo){
        axiosSecure.get(`/packages/${adminInfo[0]?.packages}`)
            .then(res =>{
                setPrice(res.data.price);
            })
        }
    },[adminInfo.packages,axiosSecure,adminInfo])
    useEffect(()=>{
        if(price > 0){
            axiosSecure.post('/create-payment-intent',{price:price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
        }
    },[axiosSecure,price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="w-3/4 mx-auto mt-20 border-2 h-[40vh] flex flex-col items-center justify-center">
            <CardElement
            className="w-2/4 md:mx-32"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#dbeeed',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#aab7c4',
                        },
                    },
                }}
            />
            <button className="btn btn-sm  w-1/4 bg-[#ec5349] my-5 border-none text-white px-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {/* {
                transactionId && <p className="text-green-500">{transactionId}</p>
            } */}
        </form>
    );
};

export default CheckoutForm;