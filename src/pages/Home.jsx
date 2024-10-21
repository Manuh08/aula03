import { useEffect, useState } from "react";

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
        <h1>Lista de Produtos</h1>
        <ul>
            {produtos.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <h2>{produto.descrition}</h2>
                    <p>{produto.category}</p>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
        </ul>
        </>
    );
}