import { BoxStyled, ButtonLoading, ButtonSearch, MainContainer, Search } from "./style";
import axios from 'axios'
import { useState } from "react";

export const ContainerSearch = ({setListGit, listGit}) => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    console.log(listGit)
    const onSubmitFunction = () => {
        setLoad(true)
        let output=''
        let newError
        axios.get(`https://api.github.com/repos/${search}`)
        .then(res=>{
            if(listGit.filter(git=> git.data.full_name === res.data.full_name).length === 0){
                output = res
                newError=''
            }else{
                newError = 'Valor pesquisado ja existente na sua lista'
            }
        })
        .catch(err=>{newError='Erro na busca do repositorio'})             
        setTimeout(()=>{
            if(output){
                setListGit(prev=>[...prev, output])
                output = ''
            }
            setError(newError)
            setLoad(false)
        },1000)
    }
    return <MainContainer>
        <BoxStyled>
            <Search variant="outlined" onChange={e=>setSearch(e.target.value)}></Search>
            {load ? <ButtonSearch variant="contained" onClick={onSubmitFunction}>Procurando...</ButtonSearch> :
                <ButtonSearch variant="contained" onClick={onSubmitFunction}>Procurar</ButtonSearch>
            }
        </BoxStyled>
        <span>{error}</span>
    </MainContainer> 
}