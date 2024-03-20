import { Button, TextField } from "@mui/material";
import { useState } from "react";
import instance from "../../common/config/api";
import ActionAreaCard from "../../components/Card";

interface User{
    login: string,
    avatar_url: string,
}

const Home = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState<User | null>(null);

    const onHandleSearch = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response = await instance.get(`/users/${search}`);
        setUser(response.data)
    }

    return (
        <>
            <form>
                <TextField value={search} onChange={(e) => setSearch(e.target.value)} id="outlined-basic" label="Insira o user do GitHub" variant="outlined" />
                <Button onClick={(e) => onHandleSearch(e)} variant="contained">Consultar</Button>
            </form>
            <div style={{marginTop: '3rem'}}>
                {user &&
                    <ActionAreaCard name={user.login} image={user.avatar_url} />
                }
            </div>
        </>
    )
}

export default Home;