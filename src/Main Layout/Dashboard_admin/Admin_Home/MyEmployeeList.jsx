import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const MyEmployeeList = () => {
    const axiosSecure = UseAxiosSecure()
    const [perPageItem,setPerPageItem] = useState(3)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
    const {data: users=[],refetch} = useQuery({
        queryKey: ['allRequests'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/user')
            return res.data
        }
    })
    console.log(users);
    const totalLength = users.length
    console.log(totalLength);
    const button = Math.ceil(totalLength / perPageItem)
    const totalButton = [...Array(button).keys()]
    console.log(totalButton);
    const handleButton = (i)=>{
        setStart(i*perPageItem)
        setEnd(i*perPageItem + perPageItem)
    }
    const handleRemove = id => {
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
                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Removed from the team.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="h-fit">
            <Helmet>
                <title>AssetWise | My Employee Lists</title>
            </Helmet>
            <div>
            <h1 className="border-2 text-4xl shadow-md p-2 md:w-2/5 text-center text-[#dbeeed] mx-auto my-10">My Employee List</h1>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Remove the team</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.name}</td>
                                <td><img className="w-[40px] h[40px]" src={info.photo} alt="" /></td>
                                <td><button onClick={()=>handleRemove(info._id)} className="btn">Remove From the team</button></td>
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

export default MyEmployeeList;