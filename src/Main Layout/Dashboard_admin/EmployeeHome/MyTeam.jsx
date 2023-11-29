import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const MyTeam = () => {
    const axiosSecure = UseAxiosSecure()
    const [perPageItem,setPerPageItem] = useState(3)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
    const {data: users=[]} = useQuery({
        queryKey: ['allRequests'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/team')
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
    return (
        <div className="h-fit space-y-10">
            <Helmet>
                <title>AssetWise | My Team</title>
            </Helmet>
            <div>
            <h1 className="border-2 text-4xl shadow-md p-2 md:w-2/5 text-center text-[#dbeeed] mx-auto mb-10">Upcoming Events</h1>
            <div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Image</th>
                            <th>Name</th>                      
                            <th>Date Of Birth</th>                      
                            <th>Birthday Status</th>                      
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.name}</td>
                                <td><img className="w-[40px] h[40px]" src={info.photo} alt="" /></td>
                                <td>{info.dob}</td>
                                <td>{info.birthdayStatus}</td>
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
            <div>
            <h1 className="border-2 text-4xl shadow-md p-2 md:w-2/5 text-center text-[#dbeeed] mx-auto mb-10">Team Member Lists</h1>
            <div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Image</th>
                            <th>Name</th>                      
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.name}</td>
                                <td><img className="w-[40px] h[40px]" src={info.photo} alt="" /></td>
                                
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
        </div>
    );
};

export default MyTeam;