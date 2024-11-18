import { useEffect, useState } from "react";
import Listarprodutos from '../Listarprodutos'



export default function Home() {

    const [ lista, setLista] = useState([]);
    
    useEffect(() => {
        const receberListaProdutos = async () =>  {
            try {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
            setLista(dados);
            } catch (erro) {
                alert("A conexão com o a API falhou!!!");
            }
        }
        receberListaProdutos();
    }, []);
    if (lista.length === 0) {
        return <h1>Carregando...</h1>
    }
    const orderAz = () =>{
        const listaAux = [...lista].sort((a, b)=> a.title.localeCompare(b.title));
        setLista(listaAux);
    }

    const orderZa = () =>{
        let listaAux = [...lista].sort((a, b)=> a.title.localeCompare(b.title));
        listaAux = listaAux.reverse()
        setLista(listaAux);
    }
   


    return (
        <>
        
<button onClick={()=> orderAz()}>Az</button>
<button onClick={()=> orderZa()}>Za</button>
        <Listarprodutos produtos={lista}/>

        </>
    );
}