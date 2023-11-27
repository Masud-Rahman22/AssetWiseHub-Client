
import { useForm } from "react-hook-form"
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AssetUpdate = () => {
    const info = useLoaderData()
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const name = data.name
        const type = data.type
        const quantity = data.quantity
        const date = data.da
        const updatedInfo = {
            assetName:name,
            assetType:type,
            assetQuantity: quantity,
            date
        }
        const res = await axiosSecure.put(`/assetUpdate/${info._id}`, updatedInfo)
        if(res.data.modifiedCount > 0){
            reset()
            Swal.fire({
                title: "You updated the information",
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
        <div className="h-[70vh]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[50vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('name')} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={info.assetName} placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <select className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-[#1a3756]" placeholder=" " required {...register('type')} id="type">
                        <option defaultValue={info.assetType}>{info.assetType}</option>
                        <option value="returnable">Returnable</option>
                        <option value='non-returnable'>Non-Returnable</option>
                    </select>
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" {...register('quantity')} id="quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={info.assetQuantity} placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Quantity</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                        <input type="date" {...register('da')} id="da" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={info.date} placeholder=" " required />
                        <label htmlFor="dob floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date Added :</label>
                    </div>
                <button type="submit" className="glass p-2 w-full text-white hover:bg-black">Add a Product</button>
            </form>
        </div>
    );
};

export default AssetUpdate;