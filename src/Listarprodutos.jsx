export default function Listarprodutos({produtos}) {
    return(
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

 