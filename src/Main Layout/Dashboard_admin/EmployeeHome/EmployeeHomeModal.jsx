import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EmployeeHomeModal = ({info}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-description">
                        <img className='w-[200px] h-[200px] mx-auto' src={info.assetImage} alt="" />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='flex items-center justify-between'>
                        <h1 className='text-[#ec5349]'>{info.assetName}</h1>
                        <h1 className='text-[#ec5349]'>${info.assetPrice}</h1>
                        <h1 className='text-[#ec5349]'>{info.assetType}</h1>
                        </div>
                        <p>Why Needed: <span className='text-[#ec5349]'>{info.whyNeed}</span></p>
                        <p>Additional Information : <span className='text-[#ec5349]'>{info.info}</span></p>
                        <div className='flex flex-col'>
                        <h1>Request date : <span className='text-[#ec5349]'>{info.requestDate}</span></h1>
                        <h1>Request Status : <span className='text-[#ec5349]'>{info.requestStatus}</span></h1>
                        </div>
                        <div className='flex'>
                        <button className='btn btn-sm'>Update</button>
                        <button className='btn btn-sm'>Close</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default EmployeeHomeModal;