import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure"
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const AssetList = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: infoOfAsset = [], refetch } = useQuery({
        queryKey: ['infoOfAsset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assetsInfo')
            return res.data
        }
    })
    // console.log(infoOfAsset);
    const handleToDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/assetsInfo/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="h-[70vh]">
            <div className="flex justify-between items-center">
                <div className="form-control w-full max-w-xs md:m-10">
                    <label className="label">
                        <span className="label-text text-white text-2xl">Search here</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button className="btn text-white bg-[#ec5349] btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-[#ea271a] border-none mt-8">Quantity: High To Low</button>
                </div>
                <div className="">
                    <h2 className="text-white text-2xl font-Roboto">Stock Status :</h2>
                    <select className="px-5 py-2" name="" id="">
                        <option value="available">returnable</option>
                        <option value="out of stock">non-returnable</option>
                    </select>
                </div>
                <div className="md:mr-10">
                    <h2 className="text-white text-2xl font-Roboto">Asset Type :</h2>
                    <select className="px-5 py-2" name="" id="">
                        <option value="available">available</option>
                        <option value="out of stock">out of stock</option>
                    </select>
                </div>

            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Quantity</th>
                            <th>Date Added</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            infoOfAsset?.map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetType}</td>
                                <td>{info.assetQuantity}</td>
                                <td>{info.date}</td>
                                <td><Link to={`/assetUpdate/${info._id}`}><button className=""><GrUpdate className="text-2xl" /></button></Link></td>
                                <td><button onClick={() => handleToDelete(info._id)}><MdDelete className="text-2xl" /> </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetList;