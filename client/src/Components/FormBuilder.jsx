import { FormControl, TextField } from '@material-ui/core';

const FormBuilder = ({items, handleChange}) => {
    return(
        items.map(item => (
            <FormControl variant="standard" fullWidth key={item.name}>
            <TextField
            variant="outlined"
            margin="dense"
            name={items.name}
            id={item.name}
            label={item.label}
            value={JSON.parse(item.name)}
            onChange={handleChange}
            />
        </FormControl>
        ))
    )
};

export default FormBuilder;