import { useEffect, useState } from "react";
import Teste from "./abu"
export default function App() {
  
  const [Lista, setLista] = useState([]);

  useEffect(() => { 

    const receberListaProdutos = async () => {
        
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
    }
    catch (error){
        alert("A conexão com a API esta errada!");
    }
}
 
    receberListaProdutos();
  }, []);

  const orderAz = () =>{
    const listaAux = [...Lista].sort((a, b)=>a.title.localeCompare(b.title));
  setLista(listaAux);

  }

  const orderZa = () =>{
    const listaAux = [...Lista].sort((a, b)=> b.title.localeCompare(a.title));
    setLista(listaAux)
  }

  const ordermaio = ()=>{
    const listaAux = [...Lista].sort((menor,maior)=>maior.price-(menor.price));
    setLista(listaAux)
  }

  const ordermeno= ()=>{
    const listaAux = [...Lista].sort((maior,menor)=>maior.price-(menor.price));
    setLista(listaAux)
  }
  return (
<>
    <button onClick={()=> orderAz()}>Az</button>
    <button onClick={()=> orderZa()}>Za</button>
    <button onClick={()=> ordermaio()}>maior</button>
    <button onClick={()=> ordermeno()}>menor</button>
    <Teste produtos={Lista}/>

</>  
);
}