import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, List, ListItemButton, ListItemText, ListSubheader, Pagination } from "@mui/material";
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
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const searchRepos = async () => {
            const reposSearch = await instance.get(`/users/${id}/repos`, {
                params: {
                    page,
                    per_page: 5,
                }
            });
            const reposSearchCount = await instance.get(`/users/${id}/repos`);
            setRepos(reposSearch.data);
            setCount(reposSearchCount.data.length);
            setTotalPages(Math.ceil(reposSearch.headers["x-total-count"] / 5));
        }
        searchRepos();

    }, [id, page])

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        e.preventDefault();
        setPage(value);
    };

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
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChangePage}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                />
            </Container>
        </>
    )
}

export default Details;