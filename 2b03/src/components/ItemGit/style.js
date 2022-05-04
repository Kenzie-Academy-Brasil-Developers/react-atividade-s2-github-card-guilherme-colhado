import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";

export const BoxStyled = styled(Box)({
    display: 'flex',
    backgroundColor: '#ddd',
    margin: '10px 0',
    padding: '25px 10px',
    alignItems: "center",
    borderRadius: '10px',
    width: '50%',
    h4:{
        margin: '0 0 5px',
    },
    p:{
        margin: '0',
        color: 'gray'
    }
})

export const AvatarStyled = styled(Avatar)({
    width: 90,
    height: 90,
    marginRight: 15,
})