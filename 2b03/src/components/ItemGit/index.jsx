import { Box } from "@mui/material";
import { AvatarStyled, BoxStyled } from "./style";

export const ItemGit = ({git}) => <BoxStyled>
    <AvatarStyled src={git.data.owner.avatar_url}></AvatarStyled>
    <Box>
        <h4>{git.data.full_name}</h4>
        <p>{git.data.description}</p>
    </Box>
</BoxStyled>