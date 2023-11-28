import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useAuth from "../Hooks/useAuth";
// const elements = useElements();
const PaymentPageCheckout = () => {
    const [error, setError] = useState()
    const [initialLimit,setInitailLimit] = useState()
    const [adminInfo, setAdminInfo] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [Limit,setLimit] = useState(0);
    const [price, setPrice] = useState(0)
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    
    useEffect(() => {
        axiosSecure.get('/adminInfo')
            .then(res => {
                setAdminInfo(res.data)
                setInitailLimit(adminInfo[0]?.limit)
            })
    }, [axiosSecure,adminInfo])
    // console.log(adminInfo);
    // console.log(initialLimit);
    useEffect(() => {
        if (adminInfo) {
            axiosSecure.get(`/packages/${adminInfo[0]?.packages}`)
                .then(res => {
                    setLimit(res.data.limit)
                    setPrice(res.data.price)
                })
        }
    }, [adminInfo.packages, axiosSecure, adminInfo])
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price])
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
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        
        if (confirmError) {
            console.log(confirmError);
        }
        
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                Swal.fire({
                    title: "You successfully purchased the package",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                    }
                });
                const adminLimit = axiosSecure.put(`/adminInfo`,{member:parseInt(Limit+initialLimit), email: user?.email})
                console.log(adminLimit.data);
                const paymentInfo = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: price,
                    date: new Date(),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', paymentInfo)
                console.log('payment saved', res);
                if (res.data.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
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
            {
                transactionId && <p className="text-green-500">{transactionId}</p>
            }
        </form>
    );
};

export default PaymentPageCheckout;