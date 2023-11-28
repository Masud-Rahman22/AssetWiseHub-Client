import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useEffect, useState } from "react";
// import adminGif from '../../../../public/for admin/Animation - 1701175437244.gif'
import adminPic from '../../../../public/for admin/50426.jpg'
import adminPic2 from '../../../../public/for admin/2002.i039.018_remote_management_distant_work_isometric_icons-15.jpg'
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    const axiosSecure = UseAxiosSecure();
    const [allRequests, setAllRequests] = useState([])
    const { data: allAssets = [] } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assetsInfo')
            return res.data
        }
    })
    useEffect(() => {
        axiosSecure.get('/customRequest')
            .then(res => {
                setAllRequests(res.data)
            })
    }, [axiosSecure])
    console.log(allAssets);
    const limitedStocks = allAssets?.filter(asset => asset.assetQuantity < 10)
    console.log(limitedStocks);
    console.log(allRequests);
    const pendingRequests = allRequests?.filter(info => info.requestStatus == 'pending')
    console.log(pendingRequests);

    

    // pie chart

    return (
        <div className="h-fit">
            <Helmet>
                <title>AssetWise | Admin Home</title>
            </Helmet>
            <div className="flex flex-col space-y-10">
            <div className="text-center text-white flex-1">
                <h1 className="text-[#ec5349] text-6xl mb-10">Dashboard Summary</h1>
                <p className="w-1/2 mx-auto text-2xl">The Dashboard Summary section provides a succinct and informative overview of critical system metrics and recent activities. It offers a condensed snapshot of essential information, including key statistics, charts depicting trends, and a feed of recent activities. This section empowers administrators to swiftly grasp the systems current status, allowing for informed decision-making and quick identification of significant trends or changes within the platform.</p>
            </div>
            <div className="flex-1 mx-auto">
                {/* <img className="w-[300px] h-[300px]" src={adminGif} alt="" /> */}
                <img className="md:w-[500px] md:h[200px]" src={adminPic} alt="" />
            </div>
            </div>
            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">Pending Requests</h1>
                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white">
                            <tr>
                                <th>serial</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Status</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pendingRequests?.slice(0, 5).map((info, i) => <tr key={info._id}>
                                    <th>{i + 1}</th>
                                    <td>{info.assetName}</td>
                                    <td>{info.assetType}</td>
                                    <td>{info.requestStatus}</td>
                                    <td>{info.requestDate}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">Top Most requested Items</h1>
                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white">
                            <tr>
                                <th>serial</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Status</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRequests?.slice(0, 4).map((info, i) => <tr key={info._id}>
                                    <th>{i + 1}</th>
                                    <td>{info.assetName}</td>
                                    <td>{info.assetType}</td>
                                    <td>{info.requestStatus}</td>
                                    <td>{info.requestDate}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-4xl text-white border-2 text-center md:w-96 mx-auto py-4 my-10">Limited Stock Items</h1>
                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead className="text-white">
                            <tr>
                                <th>serial</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Status</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                limitedStocks?.map((info, i) => <tr key={info._id}>
                                    <th>{i + 1}</th>
                                    <td>{info.assetName}</td>
                                    <td>{info.assetType}</td>
                                    <td>{info.assetStatus}</td>
                                    <td>{info.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* pie chart */}

            

            <div className="flex flex-col md:flex-row items-center justify-center my-20">
                <div className="flex-1 text-left space-y-10 ml-10">
                <h1 className="text-white text-6xl font-Roboto underline">Admin Control Centers</h1>
                <p className="text-[#ec5349] text-xl">The Admin Control Center serves as the central hub for managing and overseeing the entire platform. As an administrator, this section provides access to user management, system configurations, analytics, and various tools crucial for maintaining the platform is functionality and security. From user permissions to system settings, this control center empowers administrators with the tools and authority necessary to ensure smooth operations, enforce policies, and make informed decisions to optimize the platform is performance and user experience.</p>
                </div>
                <div className="flex-1">
                <img className="w-[500px] h-[500px] md:ml-36" src={adminPic2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;