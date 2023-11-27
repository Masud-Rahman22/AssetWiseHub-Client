import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const EmployeeHome = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: allRequests = [] } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/customRequest')
            return res.data
        }
    })
    console.log(allRequests);
    return (
        <div className="h-[100vh]">
            <div>
                <h1 className="text-4xl text-white border-2 text-center w-48">My Custom Lists</h1>
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
                                    allRequests?.map((info, i) => <tr key={info._id}>
                                        <th>{i + 1}</th>
                                        <td>{info.assetName}</td>
                                        <td>{info.assetPrice}</td>
                                        <td>{info.email}</td>
                                        <td>{info.name}</td>
                                        <td>{info.requestDate}</td>
                                        <td>{info.whyNeed}</td>
                                        <td>{info.requestStatus}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
            }
            </div>
        </div>
    );
};

export default EmployeeHome;