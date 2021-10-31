import React, { useState } from 'react';
import './Picker.scss';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DatePicker from '@mui/lab/DatePicker';

function Picker(props) {
    const [value, setValue] = useState('');
    const myMaxDate = new Date();
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Pick a datea"
                    mask="____-__-__"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        props.chooseDate(newValue);
                    }}
                    maxDate={myMaxDate}
                    inputFormat="yyyy-MM-dd"
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
}

export default Picker;
