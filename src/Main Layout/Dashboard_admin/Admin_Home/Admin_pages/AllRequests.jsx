import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";
const AllRequests = () => {
    const axiosSecure = UseAxiosSecure()
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
    // const { data: infoOfAsset = [] } = useQuery({
    //     queryKey: ['infoOfAsset'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/assetsInfo')
    //         return res.data
    //     }
    // })
    // console.log(allRequests);
    // console.log(infoOfAsset);
    // const name_type = infoOfAsset?.map(information => information.assetName)
    // console.log(name_type);
    const handleSearch = (e)=>{
        e.preventDefault()
        const value = nameRef.current.value
        const search = allRequests?.filter(element=> element.name.toLowerCase().includes(value.toLowerCase()))
        console.log(search);
        setArray(search)
    }
    const handleApprove = async(id) =>{
        const approvedReq = await axiosSecure.patch(`/customRequest/${id}`)
        if(approvedReq.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                title: "updated",
                text: "Your file has been updated.",
                icon: "success"
            });
        }
    }
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
    return (
        <div className="h-[70vh]">
            <div className="form-control w-full max-w-xs md:m-10">
                    <label className="label">
                        <span className="label-text text-white text-2xl">Search here</span>
                    </label>
                    <input ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button onClick={handleSearch}><FaSearch className="text-black text-xl absolute md:-mt-8 md:ml-72"/></button>
                </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Email of Requester</th>
                            <th>Name of Requester</th>
                            <th>Request Date</th>
                            <th>Additional Note</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array?.map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetPrice}</td>
                                <td>{info.email}</td>
                                <td>{info.name}</td>
                                <td>{info.requestDate}</td>
                                <td>{info.whyNeed}</td>
                                <td>{info.requestStatus}</td>
                                <td><button onClick={()=>handleApprove(info._id)} className=""><AiOutlineLike  className="text-2xl"/></button></td>
                                <td><button onClick={()=>handleToDelete(info._id)} className=""><AiOutlineDislike className="text-2xl"/></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequests;