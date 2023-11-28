import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const EmployeeHome = () => {
    const axiosSecure = UseAxiosSecure()
    const [perPageItem,setPerPageItem] = useState(6)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(perPageItem)
    const { data: allRequests = [] } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/customRequest')
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
    const pendingRequests = allRequests?.filter(request => request.
        requestStatus == 'pending')
    console.log(pendingRequests);
    return (
        <div className="h-fit">
            <Helmet>
                <title>AssetWise | Employee Home</title>
            </Helmet>
            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">My Custom Lists</h1>
            </div>
            <div>
                {
                    allRequests.length === 0 ? <div></div>
                        :
                        <div className="overflow-x-auto text-white">
                            <table className="table">
                                {/* head */}
                                <thead className="text-white">
                                    <tr>
                                        <th>serial</th>
                                        <th>Asset Name</th>
                                        <th>Asset Price</th>
                                        <th>Asset Type</th>
                                        <th>Status</th>
                                        <th>View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allRequests?.slice(start,end).map((info, i) => <tr key={info._id}>
                                            <th>{i + 1}</th>
                                            <td>{info.assetName}</td>
                                            <td>{info.assetPrice}</td>
                                            <td>{info.assetType}</td>
                                            <td>{info.requestStatus}</td>
                                            <td>{
                                                <div>
                                                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>View Details</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        {/* card */}
                                                        <div className="card bg-base-100 shadow-xl">
                                                            <figure><img src={info.assetImage} alt="Shoes" /></figure>
                                                            <div className="card-body text-black">
                                                                <h2 className="card-title">{info.assetName}</h2>
                                                                <h2 className="text-xl text-[#ec5349]">${info.assetPrice}</h2>
                                                                <h2 className="text-xl text-[#ec5349]">{info.assetType}</h2>
                                                                <div>
                                                                    <h2 className="text-xl text-[#ec5349]  text-center">Why Needed</h2>
                                                                <p>{info.whyNeed}</p>
                                                                </div>
                                                                <div>
                                                                <h2 className="text-xl text-[#ec5349]  text-center">Additional Information</h2>
                                                                <p>{info.info}</p>
                                                                </div>
                                                                <p className="text-[#ec5349]">Request Date : {info.requestDate}</p>
                                                                <p className="text-[#ec5349]">Request Status : {info.requestStatus}</p>
                                                                <div className="card-actions justify-end">
                                                                    <button className="btn btn-primary">Update</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end */}
                                                        <div className="modal-action">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                                </div>
                                                }
                                                </td>
                                        </tr>)
                                    }

                                </tbody>
                                <div className="flex items-center justify-center gap-10 border-2 p-3 my-10">
                        {
                            totalButton.map((idx,i)=> <button onClick={()=>handleButton(i)} className="btn btn-sm" key={idx}>
                                {i+1}
                            </button>)
                        }
                        </div>
                            </table>
                        </div>
                }
            </div>
            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">My Pending Requests</h1>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                        <th>serial</th>
                        <th>Asset Name</th>
                        <th>Asset Price</th>
                        <th>Asset Type</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingRequests?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetPrice}</td>
                                <td>{info.assetType}</td>
                                <td>{info.requestStatus}</td>
                                
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
            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">My monthly Requests</h1>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                        <th>serial</th>
                        <th>Asset Name</th>
                        <th>Asset Price</th>
                        <th>Asset Type</th>
                        <th>Status</th>
                        <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRequests?.slice(start,end).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetPrice}</td>
                                <td>{info.assetType}</td>
                                <td>{info.requestStatus}</td>
                                <td>{info.requestDate}</td>
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
            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">My Frequently Requests</h1>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                        <th>serial</th>
                        <th>Asset Name</th>
                        <th>Asset Price</th>
                        <th>Asset Type</th>
                        <th>Status</th>
                        <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRequests?.slice(0,4).map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetPrice}</td>
                                <td>{info.assetType}</td>
                                <td>{info.requestStatus}</td>
                                <td>{info.requestDate}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeHome;