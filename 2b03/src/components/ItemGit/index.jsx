import { Box, Grid } from "@mui/material";
import { AvatarStyled, BoxStyled, LinkBox } from "./style";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ItemGit = ({git}) =><LinkBox target='_blank' href={git.data.owner.html_url}>
    <BoxStyled>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <AvatarStyled src={git.data.owner.avatar_url}></AvatarStyled>
            <Box>
                <h4>{git.data.full_name}</h4>
                <p>{git.data.description}</p>
            </Box>
        </Box>
        <Box>
            <ChevronRightIcon/>
        </Box>
    </BoxStyled>
</LinkBox>