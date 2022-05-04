import { styled } from '@mui/system'
import { Box, Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
export const MainContainer = styled(Box)({
    textAlign: 'left',
    color: 'red',
})

export const BoxStyled = styled(Box)({
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: 0,
    display: 'flex',
    overflow: 'hidden',
})

export const Search = styled(TextField)({
    width: '100%',
    alignSelf: 'center',
    input: {
        padding: '10px 5px',
        fontSize: '20px'
    },
    fieldset: {
        border: 'none',  
    }
})

export const ButtonSearch = styled(Button)({
    margin: 0,
    borderRadius: 0,
    color: 'white',
    backgroundColor: '#0000ff',
    fontSize: '20px',
    padding: '0 35px',
    fontWeight: '500',
    '&:hover':{
        backgroundColor: '#5488ff',
        color: '#000',
    }
})

export const ButtonLoading = styled(LoadingButton)({
    margin: 0,
    borderRadius: 0,
    widows: '200px',
    color: 'white',
    backgroundColor: '#0000ff',
    fontSize: '20px',
    padding: '0 35px',
    fontWeight: '500',
    '&:hover':{
        backgroundColor: '#5488ff',
        color: '#000',
    }
})
