import { useForm } from "react-hook-form"
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const MakeACustomRequest = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const assetName = data.name
        const assetPrice = parseFloat(data.price)
        const assetType = data.type
        const assetImage = data.image
        const whyNeed = data.whyNeed
        const info = data.info
        const email = user?.email
        const name = user?.displayName
        const date = new Date()
        const requestDate = date.toLocaleDateString()
        const requestStatus = 'pending'
        const customReqInfo = {
            assetName,
            assetPrice,
            assetType,
            assetImage,
            whyNeed,
            info,
            email,
            name,
            requestDate,
            requestStatus
        }
        console.log(customReqInfo);
        const res = await axiosSecure.post('/customRequest', customReqInfo)
        if(res.data.insertedId){
            reset()
            Swal.fire({
                title: "You Added A Custom Request",
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
        }
    }
    return (
        <div className="h-fit">
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[50vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('name')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asset Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('price')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asset Price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <select className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-[#1a3756]" placeholder=" " required {...register('type')} id="type">
                        <option value="default">Default</option>
                        <option value="returnable">Returnable</option>
                        <option value='non-returnable'>Non-Returnable</option>
                    </select>
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('image')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asset Image</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('whyNeed')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Why you need this</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('info')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Information</label>
                </div>
                <button type="submit" className="glass p-2 w-full text-white hover:bg-black">Request</button>
            </form>
        </div>
    );
};

export default MakeACustomRequest;