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


    return (
        <>
        <Listarprodutos produtos={lista}/>
        
        </>
    );
}