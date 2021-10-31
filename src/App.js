import React, { useState } from 'react';
import './App.scss';
import Title from "./components/Title/Title";
import Picker from "./components/Picker/Picker";
import { format, addDays } from 'date-fns';
import Slider from "./components/Slider/Slider";

function App() {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);

    const callApiNASA = (date) => {
        return fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`).then(res => res.json());
    };

    const searchDateImages = async (date) => {
        const formattedDate = format(date, 'yyyy-MM-dd');
        const images = await callApiNASA(formattedDate);
        if (images.length) {
            setCount(0);
            setImages(images);
        } else {
            if(count > 10) {
                setCount(0);
            } else {
                setCount(count + 1);
                searchDateImages(addDays(date, 1));
            }

        }
    }

    const handleChooseDate = (date) => {
        if (!date) {
            return setImages([]);
        }
        searchDateImages(date);
    };

    return (
        <div className="App">
            <Title />
            <Picker chooseDate={handleChooseDate}/>
            { images.length ? <Slider images={images}/> : '' }
        </div>
    );
}

export default App;
