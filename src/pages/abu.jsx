export default function Lista({produtos}){
    return (
        <>
          <h1>Lista de Produtos</h1>
            <div className="Dog">
          <ul className="produtosgerais">
            {produtos.map(produto => (
              <div className="Gat">
              <li className="nome" key={produto.id}>
                <div className="sel">
                <h2 >{produto.title}</h2>
                <p >{produto.description}</p>
                <p>Preço: ${produto.price}</p>
                <img className="imagen" src={produto.image} alt={produto.title} width={100} />
                </div>
              </li>
              </div>
            ))}
          </ul>
            </div>
        </>
      )
    }