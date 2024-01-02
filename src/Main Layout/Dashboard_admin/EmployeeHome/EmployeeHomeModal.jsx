import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../../Main Layout/About/About.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex', // Using Flexbox
    flexDirection: 'row', // Flex direction (row)
    justifyContent: 'space-between', // Align items along the main axis (horizontally in this case)
    alignItems: 'center', // Align items along the cross axis (vertically in this case)
    padding: '20px',
};

const EmployeeHomeModal = ({info}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-description">
                        <img className='w-[800px] h-[400px] mx-auto mb-5 p-10' src={info.assetImage} alt="" />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='flex items-center justify-between'>
                        <h1 className='text-[#ec5349] gradient-button'>{info.assetName}</h1>
                        <h1 className='text-[#ec5349] gradient-button'>${info.assetPrice}</h1>
                        <h1 className='text-[#ec5349] gradient-button'>{info.assetType}</h1>
                        </div>
                        <p className='my-5'><span className='text-3xl'>Why Needed</span>: <span className='text-[#ec5349]'>{info.whyNeed}</span></p>
                        <p className='my-5'><span className='text-3xl'>Additional Information</span>: <span className='text-[#ec5349]'>{info.info}</span></p>
                        <div className='flex flex-col'>
                        <h1>Request date : <span className='text-[#ec5349]'>{info.requestDate}</span></h1>
                        <h1>Request Status : <span className='text-[#ec5349]'>{info.requestStatus}</span></h1>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                        <button onClick={handleClose} className='btn btn-primary w-full text-2xl'>close</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default EmployeeHomeModal;