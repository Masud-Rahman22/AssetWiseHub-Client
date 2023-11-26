import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
    const {user,loading} = useAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'admin'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;