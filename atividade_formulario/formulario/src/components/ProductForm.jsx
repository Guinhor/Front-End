import { useState } from "react";
import "./ProductForm.css";

export default function ProductTable({ salvar, price, name, stock, handleName, handlePrice, handleStock}) {

    return (
        
        <div className="container">
        <h3>Cadastro de Produtos</h3>
            <form onSubmit={(e)=> salvar(e)}>
                
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value ={ name } onChange={(e) => handleName(e)} required/>
                <label htmlFor="nome">Preço:</label>
                <input type="number" name="preco" value ={ price } onChange={(e) => handlePrice(e)} required/>
                <label htmlFor="estoque">Estoque:</label>
                <input type="number" name="estoque" value ={ stock } onChange={(e) => handleStock(e)} required/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
        
    )
}