import { useEffect, useState } from "react";
import Listarprodutos from '../Listarprodutos';

export default function Home() {

    const [lista, setLista] = useState([]);
    const [listaCompleta, setListaCompleta] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () =>  {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
                setListaCompleta(dados);
            } catch (erro) {
                alert("A conexão com a API falhou!!!");
            }
        }
        receberListaProdutos();
    }, []);

    if (listaCompleta.length === 0) {
        return <h1>Carregando...</h1>;
    }

    // Função que ordena de A ate Z
    const orderAz = () => {
        const listaAux = [...lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listaAux);
    }

      // Função que ordena de Z ate A
    const orderZa = () => {
        const listaAux = [...lista].sort((a, b) => a.title.localeCompare(b.title)).reverse();
        setLista(listaAux);
    }

    // Função que ordena do maior preço para o menor preço
    const MaiorPreco = () => {
        const listaAux = [...lista].sort((a, b) => b.price - a.price); // Descendente (Maior para o Menor)
        setLista(listaAux);
    }

     // Função que ordena do menor preço para o maior preço
    const MenorPreco = () => {
        const listaAux = [...lista].sort((a, b) => a.price - b.price); // Ascendente (Menor para o Maior)
        setLista(listaAux);
    }

    const pesquisarItem = (valor) =>{
        if (valor === "") {
            setLista(listaCompleta);
            return;
        }

        const listaAux = lista.filter((item)=>
            item.title.toLowerCase().includes(valor.toLowerCase())

        );
        setLista(listaAux);
    }

    return (
        <>
         <div className="botao">
            <button onClick={orderAz}>Az</button>
        </div>
        <div className="botao">
            <button onClick={orderZa}>Za</button>
        </div>
        <div className="botao">
            <button onClick={MaiorPreco}>Maior</button>
        </div>
        <div className="botao">
            <button onClick={MenorPreco}>Menor</button>
        </div>

            <input className="pesquisas" placeholder="Pesquisar" onChange={(item) => pesquisarItem(item.target.value)}/>

            <Listarprodutos produtos={lista} />
        </>
    );
}
