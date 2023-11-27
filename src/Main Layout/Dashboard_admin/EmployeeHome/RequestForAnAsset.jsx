import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const RequestForAnAsset = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth()
    const { data: infoOfAsset = [] } = useQuery({
        queryKey: ['infoOfAsset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assetsInfo')
            return res.data
        }
    })
    console.log(infoOfAsset);
    const handleRequest = async(e) => {
        e.preventDefault()
        const form = e.target
        const note = form.note.value
        const date = new Date()
        const requestDate = date.toLocaleDateString()
        const email = user?.email
        const name = user?.displayName
        const userPhoto = user?.photoURL
        const requestInfo = {
            note,
            requestDate,
            email,
            name,
            userPhoto
        }
        console.log(requestInfo);
        const res = await axiosSecure.post('/requestForAsset', requestInfo)
        if(res.data.insertedId){
            Swal.fire({
                title: "You Added An Asset",
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
    }
    return (
        <div className="h-[70vh]">
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead className="text-white">
                        <tr>
                            <th>serial</th>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Status</th>
                            <th>Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            infoOfAsset?.map((info, i) => <tr key={info._id}>
                                <th>{i + 1}</th>
                                <td>{info.assetName}</td>
                                <td>{info.assetType}</td>
                                <td>{info.assetStatus}</td>
                                {
                                    info.assetStatus === 'out of stock' ? '' : <td>{/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Request</button>
                                        <dialog id="my_modal_2" className="modal">
                                            <form onSubmit={handleRequest} className="modal-box">
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Additional notes :</span>
                                                    </label>
                                                    <input type="text" name='note'placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" />
                                                    <button type="submit" className="btn w-28 mt-2 btn-primary">Request</button>
                                                </div>
                                            </form>
                                        </dialog></td>
                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestForAnAsset;