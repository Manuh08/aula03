import React from "react";
import style from "./app/style/card.module.css"

export default function Listarprodutos({produtos}) {
    return(
        <>
        <main>
        <h1 className={style.produto}>Shopping China</h1>
        <div className={style.home}>
            {produtos.map(produto => (
                <div className={style.card}>
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>{produto.category}</p>
                    <p>{produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
                </div>
            ))}
        </div>
        </main>
        </>
  
    );
  }

 