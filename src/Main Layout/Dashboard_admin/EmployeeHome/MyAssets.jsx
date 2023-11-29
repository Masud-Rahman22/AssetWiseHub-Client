import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyAssets = () => {
    const axiosSecure = UseAxiosSecure()
    const [perPageItem,setPerPageItem] = useState(10)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
    const nameRef = useRef()
    const [array,setArray] = useState()
    const {data: allRequests=[],refetch} = useQuery({
        queryKey: ['allRequests'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/customRequest')
            setArray(res.data)
            return res.data
        }
    })
    console.log(allRequests);
    const totalLength = allRequests.length
    console.log(totalLength);
    const button = Math.ceil(totalLength / perPageItem)
    const totalButton = [...Array(button).keys()]
    console.log(totalButton);
    const handleButton = (i)=>{
        setStart(i*perPageItem)
        setEnd(i*perPageItem + perPageItem)
    }
    const handleStatus = (e)=>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const typeFilter = allRequests?.filter(element=> element.assetType == value)
        console.log(typeFilter);
        setArray(typeFilter)
    }
    const handleType = e =>{
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        const statusFilter = allRequests?.filter(element=> element.requestStatus == value)
        console.log(statusFilter);
        setArray(statusFilter)
    }
    const handleSearch = (e)=>{
        e.preventDefault()
        const value = nameRef.current.value
        const search = allRequests?.filter(element=> element.assetName.toLowerCase().includes(value.toLowerCase()))
        console.log(search);
        setArray(search)
    }
    // const handleStatusChanged = async(name) =>{
    //     const approvedReq = await axiosSecure.patch(`/customRequest/${name}`)
    //     if(approvedReq.data.modifiedCount > 0){
    //         refetch()
    //         Swal.fire({
    //             title: "updated",
    //             text: "Your file has been updated.",
    //             icon: "success"
    //         });
    //     }
    // }
    const handleDelete = id => {
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
                axiosSecure.delete(`/customRequest/${id}`)
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
    const handleReturned = async(name) =>{
        const returnedReq = await axiosSecure.patch(`/customRequest/${name}`)
        if(returnedReq.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                title: "updated",
                text: "Your file has been updated.",
                icon: "success"
            });
        }
    }
    return (
        <div className="h-fit">
            <Helmet>
                <title>AssetWise | My Assets</title>
            </Helmet>
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="form-control w-full max-w-xs md:m-10">
                    <label className="label">
                        <span className="label-text text-white text-2xl">Search here</span>
                    </label>
                    <input ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button onClick={handleSearch}><FaSearch className="text-black text-xl absolute md:-mt-8 md:ml-72"/></button>
                </div>
                <div className="">
                    <h2 className="text-white text-2xl font-Roboto">Product Type :</h2>
                    <select onChange={handleStatus} className="px-5 py-2" name="status" id="select1">
                        <option value="default">default</option>
                        <option value="returnable">returnable</option>
                        <option value="non-returnable">non-returnable</option>
                    </select>
                </div>
                <div className="md:mr-10">
                    <h2 className="text-white text-2xl font-Roboto">Asset Status :</h2>
                    <select onChange={handleType} className="px-5 py-2" name="" id="select2">
                        <option value="default">default</option>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Request Date</th>
                            <th>Approval Date</th>
                            <th>Status</th>
                            <th>Action to cancel :</th>
                            <th>Action to return :</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetType}</td>
                                <td>{info.requestDate}</td>
                                <td>{info.approvedDate}</td>
                                <td>{info.requestStatus}</td>
                                <td>{info.requestStatus == 'pending' && <button className="btn" onClick={()=>handleDelete(info._id)}>cancel</button>}</td>
                                <td>{info.requestStatus == 'approved' && info.assetType == 'returnable' ? <button onClick={()=>handleReturned(info.assetName)} className="btn">return</button> : ''}</td>
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

export default MyAssets;