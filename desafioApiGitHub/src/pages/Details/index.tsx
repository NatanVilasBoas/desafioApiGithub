import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { useEffect, useState } from "react";
import instance from "../../common/config/api";
import { useUserContext } from "../../context/user";

interface Repo {
    id: number,
    name: string,
}

const Details = () => {
    const { id } = useParams();
    const { user } = useUserContext();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const searchRepos = async () => {
            const reposSearch = await instance.get(`/users/${id}/repos`)
            
            setRepos(reposSearch.data)
            setCount(reposSearch.data.length)
        }
        searchRepos();

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
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Repositórios: {count}
                        </ListSubheader>
                    }
                >
                    {repos.map(repo => {
                        return (
                            <ListItemButton key={repo.id}>
                                <ListItemText primary={repo.name} />
                            </ListItemButton>
                        )
                    })}
                </List>


            </Container>
        </>
    )
}

export default Details;