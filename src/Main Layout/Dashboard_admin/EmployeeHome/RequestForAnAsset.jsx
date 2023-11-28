import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";


const RequestForAnAsset = () => {
    const axiosSecure = UseAxiosSecure();
    const [perPageItem,setPerPageItem] = useState(3)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
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
    const totalLength = infoOfAsset.length
    console.log(totalLength);
    const button = Math.ceil(totalLength / perPageItem)
    const totalButton = [...Array(button).keys()]
    console.log(totalButton);
    const handleButton = (i)=>{
        setStart(i*perPageItem)
        setEnd(i*perPageItem + perPageItem)
    }
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
            <Helmet>
                <title>AssetWise | Request For An Asset</title>
            </Helmet>
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
                            array?.slice(start,end).map((info, i) => <tr key={info._id}>
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
                <div className="flex items-center justify-center gap-10 border-2 p-3 my-10">
                        {
                            totalButton.map((idx,i)=> <button onClick={()=>handleButton(i)} className="btn btn-sm" key={idx}>
                                {i+1}
                            </button>)
                        }
                        </div>
            </div>
        </div>
    );
};

export default RequestForAnAsset;