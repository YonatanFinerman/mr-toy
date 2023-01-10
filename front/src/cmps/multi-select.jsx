
// export function MultiSelect(){
//     return <div>hi</div>
// }


import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',

];



export function MultiSelect({ setFilterByToEdit, setToyToEdit, toyToEdit }) {
    const [personName, setPersonName] = React.useState([]);



    const handleChange = (event) => {

        const {
            target: { value },
        } = event;

        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        if (setFilterByToEdit) {
            console.log('value-from filter,',)

            setFilterByToEdit((prevFilter) => ({ ...prevFilter, labels: event.target.value }))
        }

        if (setToyToEdit) {
            setToyToEdit((prevToy) => ({ ...prevToy, labels: event.target.value }))
        }

    };

    const SelectVal = (setToyToEdit) ? toyToEdit.labels : personName


    return (
        <div className='multi-select'>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple

                    // value={toyToEdit.labels || personName}
                    value={SelectVal}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" className='multi-select-input'/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
                            <Checkbox checked={SelectVal.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}