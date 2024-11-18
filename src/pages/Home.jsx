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

  return (
    <Teste produtos={Lista}/>
  );
}