import { Button, TextField } from "@mui/material";
import { useState } from "react";
import instance from "../../common/config/api";
import ActionAreaCard from "../../components/Card";
import { useUserContext } from "../../context/user";

const Home = () => {
    const [search, setSearch] = useState('');
    const { user, setUser } = useUserContext();

    const onHandleSearch = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try{
            const response = await instance.get(`/users/${search}`);
            setUser(response.data)
        }catch(e){
            console.log('Não foi possível realizar a consulta: ', e);
        }
    }

    return (
        <>
            <form>
                <TextField value={search} onChange={(e) => setSearch(e.target.value)} id="outlined-basic" label="Insira o user do GitHub" variant="outlined" />
                <div style={{marginTop: '2rem'}}>
                    <Button onClick={(e) => onHandleSearch(e)} variant="contained">Consultar</Button>
                </div>
            </form>
            <div style={{ marginTop: '3rem' }}>
                {user.login &&
                    <ActionAreaCard name={user.login} image={user.avatar_url} />
                }
            </div>
        </>
    )
}

export default Home;