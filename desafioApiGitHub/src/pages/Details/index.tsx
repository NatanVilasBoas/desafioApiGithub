import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import { useEffect } from "react";
import instance from "../../common/config/api";
import { useUserContext } from "../../context/user";

const Details = () => {
    const id = useParams();
    const {user} = useUserContext();

    useEffect(() => {
        const searchRepos = async () => {
            const repos = await instance.get(`/users/${id}/repos`)
    
            return repos.data;
        }
        const response = searchRepos;
        
    }, [id])

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    <img src={user.avatar_url} alt={user.login} />
                </Box>
            </Container>
        </>
    )
}

export default Details;