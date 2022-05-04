import styled from "@emotion/styled";
import { Avatar, Box, Link } from "@mui/material";

export const LinkBox = styled(Link)({
    display: "flex",
    justifyContent:'center',
    textDecoration: 'none',
    width: '70%',
    svg:{
        transition: 'all .25s ease-in',
        fontSize: 40
    },
    '&:hover svg':{
        color: "black"
    }
})

export const BoxStyled = styled(Box)({
    display: 'flex',
    backgroundColor: '#ddd',
    margin: '10px 0',
    padding: '25px 0 25px 10px',
    alignItems: "center",
    borderRadius: '10px',
    width: '100%',
    justifyContent:'space-between',
    h4:{
        margin: '0 0 5px',
        color: 'black'
    },
    p:{
        margin: '0',
        color: 'gray'
    },
    a:{
        position: 'static',
        color: "black",
        marginLeft: '10px',
        right: '100%'
    }
})

export const AvatarStyled = styled(Avatar)({
    width: 90,
    height: 90,
    marginRight: 15,
})