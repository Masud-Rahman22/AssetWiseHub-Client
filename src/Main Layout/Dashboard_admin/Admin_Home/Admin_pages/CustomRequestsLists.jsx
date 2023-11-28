import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";

const CustomRequestsLists = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: allRequests = [],refetch } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/customRequest')
            return res.data
        }
    })
    console.log(allRequests);
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
        <div className="h-fit">
            <div className="overflow-x-auto  text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            
                            <th>serial</th>
                            <th>Asset Name</th>
                            <th>Price</th>
                            <th>Asset Type</th>
                            <th>Asset Image</th>
                            <th>Why you need this</th>
                            <th>Additional Information</th>
                            <th>status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRequests?.map((info,i) => <tr key={info._id}>
                                <th>
                                    {i+1}
                                </th>
                                <td>{info.assetName}</td>
                                <td>{info.assetPrice}</td>
                                <td>{info.assetType}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={info.assetImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{info.whyNeed}</td>
                                <td>{info.info}</td>
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

export default CustomRequestsLists;