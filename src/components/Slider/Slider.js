import React, {useState} from 'react';
import './Slider.scss';
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import Box from "@mui/material/Box";

const getFormattedDate = (date) => {
    const formattedDate = new Date(date);
    const year = format(formattedDate,"yyyy");
    const month = format(formattedDate,"MM");
    const day = format(formattedDate,"dd");
    return { year, month, day };
};

function Slider(props) {
    const [imageSelected, setImageSelected] = useState(null);

    const renderImageItem = (item) => {
        const { year, month, day} = getFormattedDate(item.date);
        return (
            <ImageListItem key={`key-${item.identifier}`}>
                <img
                    src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}.png`}
                    alt={item.title}
                    onClick={() => {
                        setImageSelected(item);
                    }}
                    loading="lazy"
                />
            </ImageListItem>
        );
    };

    const handleRenderModal = () => {
        const { year, month, day} = getFormattedDate(imageSelected.date);
        return (
            <Modal
                open={imageSelected}
                onClose={() => setImageSelected(null)}
                onBackdropClick={() => setImageSelected(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: 500,
                        minHeight: 500,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <img
                        src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageSelected.image}.png`}
                        alt={`image of earth day ${imageSelected.date}`}
                        width={500}
                    />
                </Box>

            </Modal>
        );
    };

    return (
        <div className='Slider'>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {props.images.map(item => renderImageItem(item))}
            </ImageList>

            { imageSelected && handleRenderModal() }
        </div>
    );
}

export default Slider;
