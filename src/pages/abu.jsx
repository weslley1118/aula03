export default function Lista({produtos}){
    return (
        <>
          <h1>Lista de Produtos</h1>
          <ul className="produtosgerais">
            {produtos.map(produto => (
              <li className="nome" key={produto.id}>
                <div className="sel">
                <h2 >{produto.title}</h2>
                <p >{produto.description}</p>
                <p>Preço: ${produto.price}</p>
                <img src={produto.image} alt={produto.title} width={100} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )
    }