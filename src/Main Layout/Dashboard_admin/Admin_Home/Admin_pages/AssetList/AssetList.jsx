import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure"
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
const AssetList = () => {
    const axiosSecure = UseAxiosSecure();
    const nameRef = useRef()
    const [quantity,setQuantity] = useState(false);
    const [name,setName] = useState('Quantity: High To Low')
    const [array,setArray] = useState()
    const { data: infoOfAsset = [], refetch } = useQuery({
        queryKey: ['infoOfAsset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assetsInfo')
            setArray(res.data)
            return res.data
        }
    })
    // console.log(infoOfAsset);
    console.log(array);
    const handleSearch = (e)=>{
        e.preventDefault()
        const value = nameRef.current.value
        const search = infoOfAsset?.filter(element=> element.assetName.toLowerCase().includes(value.toLowerCase()))
        console.log(search);
        setArray(search)
    }
    const handleStatus = (e)=>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const typeFilter = infoOfAsset?.filter(element=> element.assetType == value)
        console.log(typeFilter);
        setArray(typeFilter)
    }
    const handleType = e =>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const statusFilter = infoOfAsset?.filter(element=> element.assetStatus == value)
        console.log(statusFilter);
        setArray(statusFilter)
    }
    const handleSort = () =>{
        setQuantity(!quantity)
        if(quantity==false){
            setName('Quantity: High To Low')
            const sort = infoOfAsset.sort((a,b)=>a.assetQuantity - b.assetQuantity)
            setArray(sort)
        }
        else{
            setName('Quantity: Low To High')
            const sort = infoOfAsset.sort((a,b)=>b.assetQuantity - a.assetQuantity)
            setArray(sort)
        }
    }
    console.log(quantity);
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
                    <input  ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs relative" />
                    <button onClick={handleSearch}><FaSearch className="text-black text-xl absolute md:-mt-8 md:ml-72"/></button>
                </div>
                <div>
                    <button onClick={()=>handleSort()} className="btn text-white bg-[#ec5349] btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-[#ea271a] border-none mt-8">{name}</button>
                </div>
                <div className="">
                    <h2 className="text-white text-2xl font-Roboto">Product Status :</h2>
                    <select onChange={handleStatus} className="px-5 py-2" name="status" id="select1">
                        <option value="default">default</option>
                        <option value="returnable">returnable</option>
                        <option value="non-returnable">non-returnable</option>
                    </select>
                </div>
                <div className="md:mr-10">
                    <h2 className="text-white text-2xl font-Roboto">Asset Type :</h2>
                    <select onChange={handleType} className="px-5 py-2" name="" id="select2">
                        <option value="default">default</option>
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
                            <th>Product Status</th>
                            <th>Date Added</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array?.map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetType}</td>
                                <td>{info.assetQuantity}</td>
                                <td>{info.assetStatus}</td>
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