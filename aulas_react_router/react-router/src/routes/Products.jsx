import {Link} from 'react-router-dom'
export default function Products(){
    const products = [
        {id: 1, name: 'Uva', price: 10},
        {id: 2, name: 'Morango', price: 15},
        {id: 3, name: 'Banana', price: 20},
        {id: 4, name: 'Maçã', price: 25}
    ]
    return(
        <div>
            <h2>Produtos</h2>
            {products.map((prod)=>(
                <ul key= {prod.id}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: R${prod.price}</li>
                    <li><Link to={`/products/${prod.id}/info`}>Mais informações</Link></li>
                    <li><hr/></li>
                </ul>
            ))}
        </div>
    )
}