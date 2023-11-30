import { Link } from "react-router-dom";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const AddAnEmployee = () => {
    const axiosSecure = UseAxiosSecure()
    const [perPageItem,setPerPageItem] = useState(3)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
    const {data: users=[]} = useQuery({
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
    const handleAddTeam = (info)=>{
        console.log(info);
        // const userInfo = {
        //     info.
        // }
        axiosSecure.post('/team',info)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    title: "Added to the team",
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
        })
    }
    return (
        <div className="h-fit">
            <Helmet>
                <title>AssetWise | Add An Employee</title>
            </Helmet>z
            <div className="text-center my-10">
                <Link to='/payment'><button className="btn bg-[#ec5349] btn-lg border-none text-white">Hey There, Buy a package</button></Link>
            </div>
            <div>
                <h1 className="border-2 text-4xl shadow-md p-2 md:w-2/5 text-center text-[#dbeeed] mx-auto">Users Who are not an employee</h1>
                <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Add te the team</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.name}</td>
                                <td><img className="w-[40px] h[40px]" src={info.photo} alt="" /></td>
                                <td><button onClick={()=>handleAddTeam(info)} className="btn">Add to team</button></td>
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
        </div>
    );
};

export default AddAnEmployee;