import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";


const RequestForAnAsset = () => {
    const axiosSecure = UseAxiosSecure();
    const nameRef = useRef()
    const { user } = useAuth()
    const [array,setArray] = useState()
    console.log(user?.email);
    console.log(user?.displayName);
    const { data: infoOfAsset = [] } = useQuery({
        queryKey: ['infoOfAsset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assetsInfo')
            setArray(res.data)
            return res.data
        }
    })
    const handleSearch = (e)=>{
        e.preventDefault()
        const value = nameRef.current.value
        const search = infoOfAsset?.filter(element=> element.assetName.toLowerCase().includes(value.toLowerCase()))
        console.log(search);
        setArray(search)
    }
    const handleType = e =>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const statusFilter = infoOfAsset?.filter(element=> element.assetType == value)
        console.log(statusFilter);
        setArray(statusFilter)
    }
    const handleStatus = (e)=>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const typeFilter = infoOfAsset?.filter(element=> element.assetStatus == value)
        console.log(typeFilter);
        setArray(typeFilter)
    }
    console.log(infoOfAsset);
    const handleRequest = async (e) => {
        e.preventDefault()
        const form = e.target
        const note = form.note.value
        const date = new Date()
        const requestDate = date.toLocaleDateString()
        const requestStatus = 'pending'
        const email = user?.email
        const name = user?.displayName
        const userPhoto = user?.photoURL
        const requestInfo = {
            note,
            requestDate,
            email,
            name,
            userPhoto,
            requestStatus
        }
        const res = await axiosSecure.post('/requestForAsset', requestInfo)
        if (res.data.insertedId) {
            Swal.fire({
                title: "You requested successfully",
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
        <div className="md:ml-5 h-[100vh]">
            <div className="flex justify-between items-center">
                <div className="form-control w-full max-w-xs md:m-10">
                    <label className="label">
                        <span className="label-text text-white text-2xl">Search here</span>
                    </label>
                    <input  ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button onClick={handleSearch}><FaSearch className="text-black text-xl absolute md:-mt-8 md:ml-72"/></button>
                </div>
                <div className="">
                    <h2 className="text-white text-2xl font-Roboto">Asset Type :</h2>
                    <select onChange={handleType} className="px-5 py-2" name="" id="select1">
                        <option value="default">default</option>
                        <option value="returnable">returnable</option>
                        <option value="non-returnable">non-returnable</option>
                    </select>
                </div>
                <div className="md:mr-10">
                    <h2 className="text-white text-2xl font-Roboto">Availability :</h2>
                    <select onChange={handleStatus} className="px-5 py-2" name="" id="select2">
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
                            <th>Product Status</th>
                            <th>Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array?.map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetType}</td>
                                <td>{info.assetStatus}</td>
                                {
                                    info.assetStatus === 'out of stock' ? '' : <td>{/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Request</button>
                                        <dialog id="my_modal_2" className="modal">
                                            <form onSubmit={handleRequest} className="modal-box">
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Additional notes :</span>
                                                    </label>
                                                    <input type="text" name='note' placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" />
                                                    <button type="submit" className="btn w-28 mt-2 btn-primary">Request</button>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </form>
                                        </dialog></td>
                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestForAnAsset;