import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Charts = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: allRequests = [] } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/customRequest')
            return res.data
        }
    })
    console.log(allRequests);
    // const returnableItems = allRequests?.filter(info => info.assetType == 'returnable')
    // const non_returnableItems = allRequests?.filter(info => info.assetType == 'non-returnable')
    // console.log(returnableItems);
    // console.log(non_returnableItems);
    const data = [
        { value: 5, label: 'A' },
        { value: 10, label: 'B' },
        // { value: 15, label: 'C' },
        // { value: 20, label: 'D' },
    ];

    const size = {
        width: 400,
        height: 200,
    };
    return (
        <div>
            <PieChart
                series={[
                    {
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 45,
                        data,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                    },
                }}
                {...size}
            />
        </div>
    );
};

export default Charts;