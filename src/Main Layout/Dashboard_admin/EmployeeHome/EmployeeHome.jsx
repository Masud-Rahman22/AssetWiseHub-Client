import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import EmployeeHomeModal from "./EmployeeHomeModal";




const EmployeeHome = () => {
    

    const axiosSecure = UseAxiosSecure()
    const [perPageItem, setPerPageItem] = useState(6)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(perPageItem)
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
    const handleButton = (i) => {
        setStart(i * perPageItem)
        setEnd(i * perPageItem + perPageItem)
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
                                        allRequests?.slice(start, end).map((info, i) => <tr key={info._id}>
                                            <th>{i + 1}</th>
                                            <td>{info.assetName}</td>
                                            <td>{info.assetPrice}</td>
                                            <td>{info.assetType}</td>
                                            <td>{info.requestStatus}</td>
                                            <td>{
                                                <EmployeeHomeModal info={info}></EmployeeHomeModal>
                                            }
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                                
                            </table>
                            <div className="flex items-center justify-center gap-10 border-2 p-3 my-10">
                                    {
                                        totalButton.map((idx, i) => <button onClick={() => handleButton(i)} className="btn btn-sm" key={idx}>
                                            {i + 1}
                                        </button>)
                                    }
                                </div>
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
                            pendingRequests?.slice(start, end).map((info, i) => <tr key={info._id}>
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
                        totalButton.map((idx, i) => <button onClick={() => handleButton(i)} className="btn btn-sm" key={idx}>
                            {i + 1}
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
                            allRequests?.slice(start, end).map((info, i) => <tr key={info._id}>
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
                        totalButton.map((idx, i) => <button onClick={() => handleButton(i)} className="btn btn-sm" key={idx}>
                            {i + 1}
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
                            allRequests?.slice(0, 4).map((info, i) => <tr key={info._id}>
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