import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Input = () => {

    const [inputValue, setInputValue] = useState<string>("");

    return(
        <>
            <Box m={1}>
                <h3>{inputValue}</h3>
                <TextField
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setInputValue(e.target.value);
                    }}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" color="primary">
                                <BackspaceIcon onClick={()=>setInputValue("")} />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </>
    )


}

export default Input;